const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Liên hệ chúng tôi</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Có vấn đề về kỹ thuật? Bạn muốn gửi phản hồi về tính năng? Hãy cho chúng tôi biết.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Email của bạn
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Đăng ký
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Hãy cho chúng tôi biết chúng tôi có thể giúp bạn như thế nào?"
              className="form__input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Hãy gửi tin nhắn của bạn
            </label>
            <textarea
              rows="6"
              id="message"
              placeholder="Để lại bình luận..."
              className="form__input mt-1"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Gửi đến chúng tôi
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
