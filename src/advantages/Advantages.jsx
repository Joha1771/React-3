import React from "react";

import icon1 from "../assets/icons/advantages1.svg";
import icon2 from "../assets/icons/advantages2.svg";
import icon3 from "../assets/icons/advantages3.svg";

const advantagesData = [
  {
    id: 1,
    image: icon1,
    title: "Удаленная диагностика",
    description:
      "Проведем предварительную диагностику по видео с неисправностью от клиента и сориентируем по стоимости ремонта",
    variant: "light",
  },
  {
    id: 2,
    image: icon2,
    title: "Покажем причины неисправности",
    description:
      "Сделаем бесплатную диагностику и предоставим видео запись. Инженер даст комментарии о причинах неисправности, чтобы у вас не осталось сомнений",
    variant: "dark",
  },
  {
    id: 3,
    image: icon3,
    title: "Прозрачная цена",
    description:
      "Заранее согласуем цену, честную и конкурентную, которая соответствует цене в прайс-листе на нашем сайте",
    variant: "red",
  },
];

const variantStyles = {
  light: "bg-[#E8E8E8] text-[#1a1a1a]",
  dark: "bg-[#525252] text-white",
  red: "bg-[#F03957] text-white",
};

const Advantages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-3.5 max-w-300">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start mb-14">
          <h2 className="flex flex-col gap-1">
            <span className="text-[#1a1a1a] text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Наши
            </span>
            <span className="text-[#F03957] text-4xl md:text-5xl font-bold uppercase tracking-tight">
              преимущества
            </span>
          </h2>
          <div className="max-w-xs md:max-w-sm">
            <p className="text-[#555] text-sm md:text-base leading-relaxed">
              Сервисный центр KRepair является клиентоориентированным, на первом
              месте у нас гарантированное качественное и надежное решение задач
              клиента
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {advantagesData.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-7 flex flex-col gap-5 ${variantStyles[item.variant]}`}
            >
              <div className="w-10 h-10">
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                )}
              </div>

              <h3 className="text-xl font-bold leading-snug">{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
