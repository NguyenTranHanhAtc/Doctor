// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-[13px] border border-solid border-[#D9DCE2]'>
            <div className='flex items-center gap-[13px] mb-4'>
              <img src={patientAvatar} alt="Patient Avatar" className='w-10 h-10 rounded-full' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              Tôi đã sử dụng dịch vụ y tế của họ. Họ đối xử rất tốt và
              họ cung cấp dịch vụ y tế tốt nhất.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-[13px] border border-solid border-[#D9DCE2]'>
            <div className='flex items-center gap-[13px] mb-4'>
              <img src={patientAvatar} alt="Patient Avatar" className='w-10 h-10 rounded-full' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              Tôi đã sử dụng dịch vụ y tế của họ. Họ đối xử rất tốt và
              họ cung cấp dịch vụ y tế tốt nhất.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-[13px] border border-solid border-[#D9DCE2]'>
            <div className='flex items-center gap-[13px] mb-4'>
              <img src={patientAvatar} alt="Patient Avatar" className='w-10 h-10 rounded-full' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              Tôi đã sử dụng dịch vụ y tế của họ. Họ đối xử rất tốt và
              họ cung cấp dịch vụ y tế tốt nhất.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-[13px] border border-solid border-[#D9DCE2]'>
            <div className='flex items-center gap-[13px] mb-4'>
              <img src={patientAvatar} alt="Patient Avatar" className='w-10 h-10 rounded-full' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                  <HiStar className='text-yellowColor w-[18px] h-5' />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              Tôi đã sử dụng dịch vụ y tế của họ. Họ đối xử rất tốt và
              họ cung cấp dịch vụ y tế tốt nhất.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;
