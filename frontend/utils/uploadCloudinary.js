const upload_preset = 'doctor-booking-system';
const cloud_name = 'dkla6iocy';

const uploadImageToCloudinary = async (file) => {
    if (!file) {
        throw new Error('No file provided');
    }
    
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('upload_preset', upload_preset);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: 'POST',
        body: uploadData
    });
    
    if (!res.ok) {
        throw new Error(`Upload failed: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
};

export default uploadImageToCloudinary;
