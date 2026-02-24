import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(form);
  };

  return (
    <section className="bg-[#525252] py-20">
      <div className="container mx-auto px-3.5 max-w-300">
        <div className="flex flex-col gap-6 mb-10 md:flex-row md:justify-between md:items-start">
          <h2 className="flex flex-col gap-1">
            <span className="text-3xl font-bold tracking-tight text-white uppercase md:text-4xl">
              У вас остались
            </span>
            <span className="text-[#F03957] text-3xl md:text-4xl font-bold uppercase tracking-tight">
              вопросы?
            </span>
          </h2>
          <div className="max-w-xs">
            <p className="text-sm leading-relaxed text-white">
              Оставьте заявку, мы свяжемся с вами и ответим на них
            </p>
          </div>
        </div>
        <div className="max-w-full p-8 mx-auto bg-white rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex flex-col flex-1 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#F03957] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#F03957] transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон*"
                  value={form.phone}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#F03957] transition-colors"
                />
              </div>
              <div className="flex-1">
                <textarea
                  name="message"
                  placeholder="Опишите проблему и добавьте видео неисправности"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full h-full min-h-[140px] border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#F03957] transition-colors resize-none"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 mt-2">
              <button
                type="submit"
                className="bg-[#F03957] text-white font-semibold py-3 px-10 rounded-lg hover:bg-[#d42e49] transition-colors"
              >
                Оставить заявку
              </button>
              <p className="text-xs text-center text-gray-400">
                Нажимая на данную кнопку вы соглашаетесь с{" "}
                <a href="#" className="underline hover:text-[#F03957]">
                  политикой конфиденциальности
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
