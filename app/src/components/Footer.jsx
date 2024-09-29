import React from "react";
import { exploreIPhone, goFurther, shopIPhone } from "../constants";

const Footer = () => {
  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className=" w-[87%] m-auto">
        <h1 className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-2 font-medium">
          iPhone
        </h1>

        <div className=" flex lg:gap-[80px] flex-col lg:flex-row">
          <div className=" flex flex-col">
            <h1 className=" mt-20 text-gray-400 font-light">Explore iPhone</h1>
            <ul>
              {exploreIPhone.map((ele, ind) => (
                <li
                  className={` mt-2 ${
                    ind === 0
                      ? "text-[36px] font-semibold"
                      : ind === 1
                      ? "text-[33px] font-semibold"
                      : ind === exploreIPhone.length - 1
                      ? "text-[17px] font-semibold"
                      : ind === exploreIPhone.length - 2
                      ? "text-[17px] font-semibold"
                      : "text-[29px] font-semibold"
                  }`}
                >
                  {ele}
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex gap-[80px]">
            <div className=" flex flex-col">
              <h1 className=" mt-20 mb-4 text-gray-400 font-light">
                Shop iPhone
              </h1>
              <ul>
                {shopIPhone.map((ele, ind) => (
                  <li className=" mt-1 font-semibold">{ele}</li>
                ))}
              </ul>
            </div>

            <div className=" flex flex-col">
              <h1 className=" mt-20 text-gray-400 font-light">Go Further</h1>
              <ul>
                {goFurther.map((ele, ind) => (
                  <li
                    className={` font-semibold mt-2 text-[calc(20px - ${ind})]`}
                  >
                    {ele}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
