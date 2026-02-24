import heroImg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="pt-[20px] lg:pt-[150px] pb-[160px]">
      <div className="container mx-auto px-[15px] flex flex-col items-center justify-center lg:flex-row gap-[30px] md:justify-center max-w-300">
        <div className="flex flex-col gap-[20px] lg:gap-[60px] ">
          <h2 className="text-6xl font-bold">Сервисный центр </h2>
          <p className="font-medium text-[#817979] text-4xl">
            по ремонту техники в Москве
          </p>
          <div className="flex flex-col gap-[15px] sm:flex-row sm:pt-[50px]">
            <button className="py-4.5 px-8.5 bg-[#F03957] text-[white] rounded-[10px] sm:max-w-[300px]">
              Получить консультацию
            </button>
            <button className="py-4.5 px-8.5 rounded-[10px] border-2 sm:max-w-[300px]">
              Смотреть прайс-лист
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
