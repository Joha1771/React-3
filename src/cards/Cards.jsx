import React from "react";
import Button from "../button/Button";

import card1Img from "../assets/images/card1.png";
import card2Img from "../assets/images/card2.png";
import card3Img from "../assets/images/card3.png";
import card4Img from "../assets/images/card4.png";
import card5Img from "../assets/images/card5.png";

const cardsData = [
  {
    id: 1,
    title: "Ремонт",
    highlight: "аудио техники",
    description:
      "Мы выполняем качественный ремонт аудиотехники, включая колонки, усилители и прочее оборудование, выдаем гарантию и имеем необходимые запчасти в наличие",
    image: card1Img,
    imageAlt: "Аудио техника",
    reverse: false,
  },
  {
    id: 2,
    title: "Ремонт",
    highlight: "фото/видео техники",
    description:
      "Осуществляем ремонт современной цифровой фото и видео аппаратура, проводимый первоклассными инженерами",
    image: card2Img,
    imageAlt: "Фото/видео техника",
    reverse: true,
  },
  {
    id: 3,
    title: "Ремонт",
    highlight: "телефонов",
    description:
      "Мы предоставляем полный спектр услуг по обслуживанию и ремонту мобильных устройств марки Apple",
    image: card3Img,
    imageAlt: "Телефон",
    reverse: false,
  },
  {
    id: 4,
    title: "Ремонт",
    highlight: "электротранспорта",
    description:
      "Осуществляем ремонт электровелосипедов, сегвеев, моноколес, электросамокатов, гироскутеров и пр.",
    image: card4Img,
    imageAlt: "Электротранспорт",
    reverse: true,
  },
  {
    id: 5,
    title: "Ремонт",
    highlight: "телевизоров",
    description:
      "Сервисный центр Krepair выполнит профессиональный ремонт телевизоров любых марок и моделей",
    image: card5Img,
    imageAlt: "Телевизор",
    reverse: false,
  },
];

// Single card component
const Card = ({ title, highlight, description, image, imageAlt, reverse }) => {
  return (
    <div className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-2xl">
      <div
        className={`flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 ${
          reverse ? "sm:flex-row-reverse" : ""
        }`}
      >
        {/* Text block */}
        <div className="flex flex-col flex-1 gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
            {title} <span className="text-[#F03957]">{highlight}</span>
          </h3>
          <p className="text-[#555] text-sm md:text-base leading-relaxed">
            {description}
          </p>
          <div className="mt-2">
            <Button />
          </div>
        </div>

        {/* Image block */}
        <div className="flex-shrink-0 w-[180px] h-[180px] md:w-[220px] md:h-[220px] flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="object-contain w-full h-full"
            />
          ) : (
            // Placeholder when no image provided
            <div className="flex items-center justify-center w-full h-full text-sm text-gray-300 bg-gray-100 rounded-xl">
              {imageAlt}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Cards list component
const Cards = () => {
  return (
    <div className="flex flex-col gap-5 pb-20">
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Cards;
