import React from "react";
import Cards from "../cards/Cards";

const Services = () => {
  return (
    <section className="bg-[#525252] pt-20">
      <div className="container mx-auto px-3.5 max-w-300">
        <div className="flex flex-col gap-20">
          <div className="flex justify-between items-center">
            <h2 className="flex flex-col gap-2.5">
              <span className="text-[#F7F5F5] text-5xl font-bold">
                Наши услуги
              </span>
              <span className="text-[#f03957] text-5xl font-bold">
                {" "}
                для вас
              </span>
            </h2>
            <div className="max-w-116.5">
              <p className="text-[#F7F5F5]  font-bold">
                Наша компания оказывает полный спектр услуг, имеет надежную
                репутация, и успела завоевать доверие и расположение своих
                клиентов
              </p>
            </div>
          </div>
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Services;
