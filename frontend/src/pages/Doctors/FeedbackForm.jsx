// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { BASE_URL,token } from '../../config';
import HashLoader from 'react-spinners/HashLoader';
import { toast } from 'react-toastify'


const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [loading, setLoading] = useState(false)

    const {id} = useParams();

    const handleSubmitReview = async e => {
        e.preventDefault();
        setLoading(true)

        try {
            if(!rating || !reviewText){
                setLoading(false)
               return toast.error('Rating & Review Fields are requiered')

            }

            const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`,{
                method:'post',
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                },
                body: JSON.stringify({rating,reviewText})
            })

            const result = await res.json()
            
            if(!res.ok){
                throw new Error(result.message)
            }

            setLoading(false)
            toast.success(result.message)

        } catch (err) {
            setLoading(false)
            toast.error(err.message)
        }
    }
    return (
        <form action="">
            <div>
                <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                Bạn đánh giá trải nghiệm tổng thể như thế nào?*
                </h3>
                <div>
                    {[...Array(5).keys()].map((_, index) => {
                        index += 1;
                        return (
                            <button
                                key={index}
                                type='button'
                                className={`${
                                    index <= (hover || rating)
                                        ? "text-yellowColor"
                                        : "text-gray-400"
                                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                onDoubleClick={() => {
                                    setHover(0);
                                    setRating(0);
                                }}
                            >
                                <span>
                                    <AiFillStar />
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className='mt-[30px]'>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
              Chia sẽ trải nghiệm và phản hồi của bạn *
            </h3>

            <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full
            px-4 py-3 rounded-md' 
            rows="5" 
            placeholder='Viết ý kiến của bạn'
            onChange={e => setReviewText(e.target.value)}
            ></textarea>
            </div>
            <button type='submit' onClick={handleSubmitReview} className='btn'>{loading ? <HashLoader size={25} color='#fff'/> : 'Gửi phản hồi'}</button>
        </form>
    );
}

export default FeedbackForm;
