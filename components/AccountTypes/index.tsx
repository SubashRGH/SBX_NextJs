import { accountsTypePacks } from "@/constants";
import Image from "next/image";
import { FC } from "react";

export const AccountTypes: FC = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5 lg:gap-12 mt-12">
      {accountsTypePacks.map((li) => (
        <li
          key={li.title}
          className="flex p-8 flex-col gap-5 flex-1 items-start rounded-[16px] border-[2px] border-[rgba(0,0,0,0.2)] relative col-span-1 hover:scale-105 duration-200 hover:shadow-[0px_0px_50px_-10px_#00B144]"
        >
          <div className="rounded-2xl absolute inset-0 z-0">
            <Image
              src="/static/images/account/bg-account-type.webp"
              layout="fill"
            />
          </div>

          <h3 className="text-[40px] md:text-[30px] lg-[40px] font-[600] text-white z-10">
            {li.title}
          </h3>

          <ul className="w-full z-10">
            {li.items.map((feature) => (
              <li
                key={feature.label}
                className="flex justify-between mb-2 font-[400] text-[#D2D3DF] text-[18px] md:text-[14px] lg:text-[18px] z-10"
              >
                <p>{feature.label}</p>
                {feature.label === "Priority Customer Support" ? (
                  <div className="relative w-6 h-6">
                    <Image
                      className="w-full h-full"
                      layout="fill"
                      src={
                        feature.value === "No"
                          ? "/static/images/account/x.svg"
                          : "/static/images/account/check.svg"
                      }
                    />
                  </div>
                ) : (
                  <p>{feature.value}</p>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
