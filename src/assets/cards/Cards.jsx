import React from "react";
import Button from "../button/Button";
import card1Img from "../images/card1.png";

const Cards = () => {
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <div className="container mx-auto px-3.5 max-w-300 flex ">
          <div>
            <h2>
              Ремонт <span> аудио техники</span>
            </h2>
            <p>
              Мы выполняем качественный ремонт аудиотехники, включая колонки,
              усилители и прочее оборудование, выдаем гарантию и имеем
              необходимые запчасти в наличие
            </p>
            <Button />
          </div>
          <div>
            <img src={card1Img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
