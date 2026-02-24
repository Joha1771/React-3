import React from "react";

const footerLinks = {
  col1: [
    { label: "Прайс-лист", href: "#" },
    { label: "О компании", href: "#" },
    { label: "Контакты", href: "#" },
  ],
  col2: [
    { label: "Услуги", href: "#" },
    { label: "Ремонт аудио техники", href: "#" },
    { label: "Ремонт видео техники", href: "#" },
  ],
  col3: [
    { label: "Ремонт телефонов", href: "#" },
    { label: "Ремонт электротранспорта", href: "#" },
    { label: "Политика конфиденциальности", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-[300px] md:h-[380px] relative bg-gray-200 mx-auto container">
        <iframe
          title="KRepair на карте"
          src="https://yandex.ru/map-widget/v1/?ll=37.681500%2C55.712000&z=15&pt=37.681500,55.712000,pm2rdm"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
        <div className="absolute top-6 left-6 bg-[#2a2a2a] text-white rounded-xl p-5 max-w-[220px] shadow-xl">
          <div className="mb-3">
            <span className="text-lg font-black tracking-tight text-white">
              k<span className="text-[#F03957]">repair</span>
            </span>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">
              сервисный центр
            </p>
          </div>
          <p className="mb-1 text-xs leading-relaxed text-gray-300">
            Москва, ул. Шарикоподшипниковская д.4 к.4а
          </p>
          <p className="mb-2 text-xs text-gray-400">info@krepair.ru</p>
          <p className="text-sm font-semibold text-white">+7 499 226 29 28</p>
        </div>
      </div>

      <div className="bg-[#111] text-white py-10">
        <div className="container mx-auto px-3.5 max-w-300">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <span className="text-2xl font-black tracking-tight text-white">
                k<span className="text-[#F03957]">repair</span>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {footerLinks.col1.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {footerLinks.col2.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {footerLinks.col3.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
