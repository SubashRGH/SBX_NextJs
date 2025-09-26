import Link from "next/link";
import React, { useState } from "react";
type MenuProps = {
  onLinkClick?: () => void;
};

const Menu: React.FC<MenuProps> = ({ onLinkClick }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const menuItems = [
    {
      label: "Products",
      href: "/products",
      iconColor: "text-turquoise",
      subItems: [
        { label: "Forex", href: "/products/forex", description: "Trade major and minor currency pairs seamlessly", imgSrc: "/static/images/icons/forex.webp" },
        { label: "Indices", href: "/products/indices", description: "Trade leveraged products on key global indices", imgSrc: "/static/images/icons/indices.webp" },
        { label: "Commodities", href: "/products/commodities", description: "Trade popular commodities under competitive conditions", imgSrc: "/static/images/icons/commodities.webp" },
        { label: "Crypto CFD", href: "/products/crypto-cfd", description: "Trade top cryptocurrencies securely and efficiently", imgSrc: "/static/images/icons/cryptoCFD.webp" },
        { label: "Stocks", href: "/products/stocks", description: "Trade shares of the world’s leading companies", imgSrc: "/static/images/icons/stocks.webp" },
        { label: "Trading Condition", href: "/products/conditions", description: "Trade shares of the world’s leading companies", imgSrc: "/static/images/icons/tradingCondition.webp" },
      ],
    },
    {
      label: "Accounts",
      href: "/account-type",
      iconColor: "text-turquoise",
      subItems: [
        { label: "Manage Account", href: "/", description: "Easily view and update your personal details, preferences, and trading settings", imgSrc: "/static/images/icons/manageAccount.webp" },
        { label: "Account Types", href: "/accounts/account-type", description: "Explore our range of account options and choose the one that best fits your trading style", imgSrc: "/static/images/icons/accountTypes.svg" },
        { label: "Deposits and Withdrawals", href: "accounts/deposit-and-withdraws", description: "Manage your funds securely with fast and hassle-free transactions", imgSrc: "/static/images/icons/depositAndWithdrawals.webp" },
        { label: "Client Protection", href: "accounts/client-protection", description: "Benefit from robust security measures designed to safeguard your account and assets", imgSrc: "/static/images/icons/clientProtection.webp" },
        { label: "Fees", href: "accounts/fees", description: "Understand all costs upfront with transparent and clearly outlined fee structures", imgSrc: "/static/images/icons/fees.webp" },
      ],
    },
    {
      label: "Platform",
      href: "/platform",
      iconColor: "text-turquoise",
      subItems: [
        { label: "CTrader", href: "/platform/c-trader", description: "Seamless trading experience", imgSrc: "/static/images/icons/ctrader.webp" },
        {
          label: (
            <>
              <span className="text-[#909197]">Metatrader 5</span>
              <span className="ml-2 text-[12px] font-semibold text-black bg-turquoise px-[6px] rounded-full">Soon</span>
            </>
          ),
          href: "/",
          description: "Advanced and intuitive trading platform",
          imgSrc: "/static/images/icons/metaTrader.webp",
        },
      ],
    },
    { label: "Partners", href: "/partners" },
    {
      label: "About Us",
      href: "/about-us",
      iconColor: "text-turquoise",
      subItems: [
        { label: "About Us", href: "about/who-we-are", description: "Learn more about Stockbanx's wide range of services and products designed to meet your trading needs.", imgSrc: "/static/images/icons/aboutUs.webp" },
        { label: "Contact Us", href: "about/contact", description: "Get in touch with our support team, available 24/5 to assist you with any questions or issues.", imgSrc: "/static/images/icons/contactUs.svg" },
        { label: "Legal Documents", href: "about/legal-documents/privacy-policy", description: "Access and download our legal documents for detailed information on our policies and terms.", imgSrc: "/static/images/icons/legalDocuments.svg" },
        {
          label: (
            <>
              <span className="text-[#909197]">Company Events</span>
              <span className="ml-2 text-[12px] font-semibold text-black bg-turquoise px-[6px] rounded-full">Soon</span>
            </>
          ),
          href: "/",
          description: "",
          imgSrc: "/static/images/icons/companyEvents.svg",
        },
      ],
    },
  ];

  return (
    <ul className="space-y-6 text-2xl">
      {menuItems.map((item) => (
        <li key={item.label}>
          <div className="flex justify-between items-center">
            {item.href.startsWith("http") ? (
              <a className="text-white nav-link-mobile ml-2 !text-[24px] font-light" href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link href={item.href}>
                <a onClick={onLinkClick} className="text-white nav-link-mobile ml-2 !text-[24px] font-light">{item.label}</a>
              </Link>
            )}
            {item.iconColor && item.subItems && (
              <button
                className="w-[30px] h-[30px] flex items-center justify-center"
                onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                aria-expanded={openSection === item.label}
              >
                {openSection !== item.label ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-[30px] h-[30px] ${item.iconColor}`}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-red-500">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" />
                  </svg>
                )}
              </button>
            )}
          </div>

          {item.subItems && (
            <div
              className={`overflow-hidden transition-all duration-300 ${openSection === item.label ? "max-h-[2000px] pt-5" : "max-h-0"
                }`}
            >
              <div className="grid grid-cols-1 gap-4">
                {item.subItems.map((subItem) => (
                  <div key={typeof subItem.label === "string" ? subItem.label : "subitem"} className="flex gap-3 p-2 hover:bg-[#0D0F12] rounded-[10px]">
                    {subItem.href.startsWith("http") ? (
                      <a href={subItem.href} target="_blank" rel="noopener noreferrer" className="flex gap-3">
                        <img src={subItem.imgSrc} alt={typeof subItem.label === "string" ? subItem.label : "Section Item"} className="w-[25px] h-[25px] object-cover" />
                        <div className="flex flex-col gap-1">
                          <h3 className="text-[16px] font-[300]">{subItem.label}</h3>
                          <p className="text-[14px] text-[#6C738D]">{subItem.description}</p>
                        </div>
                      </a>
                    ) : (
                      <Link href={subItem.href} onClick={onLinkClick}>
                        <a className="flex gap-3">
                          <img src={subItem.imgSrc} alt={typeof subItem.label === "string" ? subItem.label : "Section Item"} className="w-[25px] h-[25px] object-cover" />
                          <div className="flex flex-col gap-1">
                            <h3 className="text-[16px] font-[300]">{subItem.label}</h3>
                            <p className="text-[14px] text-[#6C738D]">{subItem.description}</p>
                          </div>
                        </a>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;