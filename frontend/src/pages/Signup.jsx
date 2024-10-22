// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import signupImg from '../assets/images/signup.gif';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL } from "../config";
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Signup = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: 'patient',
  });

  const navigate = useNavigate()

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async event => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({...formData, photo:data.url});
  };

  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const { message } = await res.json();
  
      if (!res.ok) {
        throw new Error(message);
      }
  
      setLoading(false);
      toast.success(message);
      navigate('/login');

    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className='px-5 xl:px-0'> 
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/*======== img box =========*/}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="Signup" className='w-full rounded-l-lg' />
            </figure>
          </div>

          {/*========= sign up form ==========*/}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              tạo một <span className='text-primaryColor'>tài khoản</span> 
            </h3>
            <form onSubmit={submitHandler}>
              <div className='mb-5'>
                <label htmlFor='name' className='text-headingColor font-bold text-[16px] leading-7'>
                  Họ và tên
                </label>
                <input 
                  type="text" 
                  id='name'
                  placeholder='Nhập vào họ và tên của bạn' 
                  name='name' 
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor
                  rounded-md cursor-pointer'
                />
              </div>

              <div className='mb-5'>
                <label htmlFor='email' className='text-headingColor font-bold text-[16px] leading-7'>
                  Email
                </label>
                <input 
                  type="email" 
                  id='email'
                  placeholder='Nhập vào email của bạn' 
                  name='email' 
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor
                  rounded-md cursor-pointer'
                />
              </div>

              <div className='mb-5'>
                <label htmlFor='password' className='text-headingColor font-bold text-[16px] leading-7'>
                  Mật khẩu
                </label>
                <input 
                  type="password" 
                  id='password'
                  placeholder='Nhập vào mật khẩu của bạn' 
                  name='password' 
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor
                  rounded-md cursor-pointer'
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label htmlFor='role' className='text-headingColor font-bold text-[16px] leading-7'>
                  Bạn là
                  <select 
                    name="role"
                    id='role'
                    value={formData.role}
                    onChange={handleInputChange} 
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                  >
                    <option value="patient">Bệnh nhân</option>
                    <option value="doctor">Bác sĩ</option>
                  </select>
                </label>
                <label htmlFor='gender' className='text-headingColor font-bold text-[16px] leading-7'>
                  Giới tính
                  <select 
                    name="gender"
                    id='gender'
                    value={formData.gender}
                    onChange={handleInputChange} 
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                  >
                    <option value="">Giới tính</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor 
                flex items-center justify-center'>
                  <img src={previewURL} className='w-full rounded-full' />
                </figure>}

                <div className='relative w-[160px] h-[50px]'>
                  <input 
                    type="file" 
                    name='photo' 
                    id='customFile' 
                    onChange={handleFileInputChange}
                    accept='.jpg, .png' 
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  />
                  <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center
                  px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor
                  font-semibold rounded-lg truncate cursor-pointer'>
                    Tải hình ảnh lên
                  </label>
                </div>
              </div>
              
              <div className="mt-7">
                <button 
                disabled={loading && true}
                type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px]
                py-3 rounded-lg'>
                  { loading ? (<HashLoader size={35} color='#ffffff' />) :( 'Đăng Ký')}
                  </button>
              </div>

              <p className='mt-5 text-textColor text-center'>
                Bạn đã có tài khoản?<Link to='/login' className='text-primaryColor
                font-medium ml-1'>Đăng nhập</Link>
              </p> 
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
