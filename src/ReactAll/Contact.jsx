import React from "react";
const Contact = () => {
  return (
    <form className="px-3 px-md-5" action="" method="post">
      <div class="card p-3 p-md-5">
        <div className="container py-3">
          <p className="">お名前(漢字)</p>
          <input
            required="required"
            className="form-control form-control-lg bg-white"
            type="text"
            name="name"
            placeholder="漢字"
          />
        </div>
        <div className="container py-3">
          <p className="">お名前(ひらがな)</p>
          <input
            required="required"
            className="form-control form-control-lg bg-white"
            type="text"
            name="hira"
            placeholder="ひらがな"
          />
        </div>
        <div className="container py-3">
          <p className="">あなたのメールアドレス</p>
          <input
            required="required"
            className="form-control form-control-lg bg-white"
            type="email"
            name="email"
            placeholder="メールアドレス"
          />
        </div>
        <div className="container py-3">
          <p className="">お問合せ内容</p>
          <input
            required="required"
            className="form-control form-control-lg bg-white"
            type="text"
            name="message"
            placeholder="お問合せ内容"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="d-block">
            <button
              className="btn btn-outline-dark mb-2 bg-dark text-white hover mx-5 px-5 py-2"
              type="submit"
              name="send"
            >
              送信
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Contact;
