import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = user => {
    return jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {
            expiresIn: "15d",
    })
}

export const register = async (req, res) => {
    console.log("Register function hit");
    const { email, password, name, role, photo, gender } = req.body;

    try {
        let user = null;

        if (role == 'patient') {
            console.log('Registering patient...');
            user = await User.findOne({ email });
        } else if (role == 'doctor') {
            console.log('Registering doctor...');
            user = await Doctor.findOne({ email });
        }

        // Check if user exists
        if (user) {
            console.log('User already exists.');
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hassPassword = await bcrypt.hash(password, salt);

        if (role === 'patient') {
            console.log('Creating patient user...');
            user = new User({
                name,
                email,
                password: hassPassword,
                photo,
                gender,
                role
            });
        }
        if (role === 'doctor') {
            console.log('Creating doctor user...');
            user = new Doctor({
                name,
                email,
                password: hassPassword,
                photo,
                gender,
                role
            });
        }

        await user.save();

        res.status(200).json({ success: true, message: 'User successfully created' });

    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ success: false, message: 'Internal server error, try again' });
    }
};

export const login = async (req, res) => {
    const { email } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            user = await Doctor.findOne({ email });
        }

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ status: false, message: "Invalid credentials" });
        }

        const token = generateToken(user);
        const { password, role, appointments, ...rest } = user._doc;

        res.status(200).json({ status: true, message: "Successfully logged in", token, data: { ...rest }, role });

    } catch (err) {
        res.status(500).json({ status: false, message: "Failed to login" });
    }
};

