import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const ShoppingcartPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-newsreader items-start justify-start mx-auto pb-[158px] w-full">
        <div className="flex flex-col items-center w-full">
          <header className="border-b-2 border-b-black-900 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full">
            <Text
              className="common-pointer mb-[38px] ml-24 sm:ml-[0] sm:mt-0 mt-[41px] md:text-3xl sm:text-[28px] text-[32px] text-light_green-900 tracking-[-0.32px]"
              size="txtNewsreaderMedium32"
              onClick={() => navigate("/")}
            >
              EatHealthy!
            </Text>
            <Text
              className="mb-11 sm:ml-[0] ml-[937px] sm:mt-0 mt-[47px] text-base text-black-900 text-center"
              size="txtInterRegular16"
            >
              Shop
            </Text>
            <Text
              className="ml-12 sm:ml-[0] sm:mt-0 my-[45px] text-base text-black-900 text-center"
              size="txtInterRegular16"
            >
              Newstand
            </Text>
            <Text
              className="ml-12 sm:ml-[0] sm:mt-0 my-[45px] text-base text-black-900 text-center"
              size="txtInterRegular16"
            >
              Who we are
            </Text>
            <Text
              className="mb-11 ml-12 sm:ml-[0] sm:mt-0 mt-[47px] text-base text-black-900 text-center"
              size="txtInterRegular16"
            >
              My profile
            </Text>
            <Button
              className="cursor-pointer font-inter font-semibold min-w-[126px] ml-12 sm:ml-[0] mr-24 sm:mt-0 my-8 rounded text-base text-center"
              size="sm"
            >
              Basket (3)
            </Button>
          </header>
          <div className="bg-white-A700 flex flex-col gap-[30px] items-start justify-end pt-[54px] md:px-10 sm:px-5 px-[54px] w-full">
            <Text
              className="md:ml-[0] ml-[41px] md:text-5xl text-[64px] text-black-900 tracking-[-1.28px]"
              size="txtNewsreaderRegular64"
            >
              Basket
            </Text>
            <Line className="bg-gray-300 h-0.5 max-w-[1698px] mx-auto shadow-bs w-full" />
          </div>
        </div>
        <div className="font-inter h-[655px] md:h-[693px] md:ml-[0] ml-[84px] mt-10 md:px-5 relative w-[83%] md:w-full">
          <div className="bg-gray-50 border-2 border-gray-300 border-solid flex flex-col gap-[49px] h-full justify-start m-auto pb-[29px] rounded-[24px] w-[99%]">
            <Img
              className="h-[485px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-full"
              src="images/img_stocksytxp226f.png"
              alt="stocksytxp226f"
            />
            <div className="flex flex-col items-start justify-start ml-6 md:ml-[0]">
              <Text
                className="text-black-900 text-sm tracking-[-0.14px]"
                size="txtInterMedium14"
              >
                Cumin-crusted chicken with kale salad and hummus dressing
              </Text>
              <Text
                className="mt-[11px] text-light_green-900 text-xl"
                size="txtInterSemiBold20"
              >
                Ingredients includes: Chicken breasts, Ground cumin, Salt and
                pepper{" "}
              </Text>
              <Text
                className="mt-[17px] text-base text-gray-600"
                size="txtInterRegular16Gray600"
              >
                Total Calories: 315-380 calories
              </Text>
            </div>
          </div>
          <div
            className="common-pointer absolute bg-gray-50 border-2 border-gray-300 border-solid flex flex-col gap-[49px] h-full inset-[0] justify-center m-auto pb-[29px] rounded-[24px] w-full"
            onClick={() => navigate("/howto")}
          >
            <Img
              className="common-pointer h-[485px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-full"
              src="images/img_stocksytxp226f.png"
              alt="stocksytxp226f_One"
              onClick={() => navigate("/howto")}
            />
            <div className="flex flex-col items-start justify-start ml-6 md:ml-[0]">
              <Text
                className="text-black-900 text-sm tracking-[-0.14px]"
                size="txtInterMedium14"
              >
                Cumin-crusted chicken with kale salad and hummus dressing
              </Text>
              <Text
                className="mt-[11px] text-light_green-900 text-xl"
                size="txtInterSemiBold20"
              >
                Ingredients includes: Chicken breasts, Ground cumin, Salt and
                pepper{" "}
              </Text>
              <Text
                className="mt-[17px] text-base text-gray-600"
                size="txtInterRegular16Gray600"
              >
                Total Calories: 315-380 calories
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 border-2 border-gray-300 border-solid flex flex-col font-inter items-center justify-end md:ml-[0] ml-[109px] mt-[126px] p-6 md:px-5 rounded-[24px] w-[82%] md:w-full">
          <div className="flex flex-col items-start justify-start mt-0.5 w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtInterSemiBold20Black900"
            >
              Order summary
            </Text>
            <div className="flex flex-row md:gap-10 items-center justify-between mt-[31px] w-full">
              <Text
                className="text-base text-black-900"
                size="txtInterRegular16"
              >
                Subtotal
              </Text>
              <Text
                className="text-base text-black-900 text-right"
                size="txtInterRegular16"
              >
                $27.44
              </Text>
            </div>
            <div className="flex flex-row md:gap-10 items-start justify-between mt-4 w-full">
              <Text
                className="text-base text-black-900"
                size="txtInterRegular16"
              >
                Shipping
              </Text>
              <Text
                className="text-base text-black-900 text-right"
                size="txtInterRegular16"
              >
                $3.99
              </Text>
            </div>
            <div className="flex flex-row md:gap-10 items-center justify-between mt-[15px] w-full">
              <Text
                className="text-base text-black-900"
                size="txtInterRegular16"
              >
                Tax
              </Text>
              <Text
                className="text-base text-black-900 text-right"
                size="txtInterRegular16"
              >
                $2.00
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[9px] w-full">
              <div className="h-5 md:h-[26px] mb-1.5 md:mt-0 mt-0.5 relative w-[5%] md:w-full">
                <Text
                  className="m-auto text-base text-black-900"
                  size="txtInterSemiBold16"
                >
                  Discount
                </Text>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-base text-black-900 w-max"
                  size="txtInterSemiBold16"
                >
                  Discount
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[640px] md:mt-0 mt-[9px] text-base text-black-900"
                size="txtInterSemiBold16"
              >
                Steps Tracked: XXX
              </Text>
              <Text
                className="mb-[9px] md:ml-[0] ml-[566px] text-base text-black-900 text-right"
                size="txtInterSemiBold16"
              >
                -$15.43
              </Text>
            </div>
            <div className="flex flex-row md:gap-10 items-start justify-between mt-[74px] w-full">
              <Text
                className="mt-[3px] text-base text-black-900"
                size="txtInterSemiBold16"
              >
                Total
              </Text>
              <Text
                className="mb-[3px] text-base text-black-900 text-right"
                size="txtInterSemiBold16"
              >
                $33.43
              </Text>
            </div>
            <div className="bg-light_green-900 flex flex-row md:gap-10 items-center justify-between mt-[194px] p-2 rounded-lg w-full">
              <Text
                className="ml-4 text-base text-white-A700"
                size="txtInterSemiBold16WhiteA700"
              >
                Continue to payment
              </Text>
              <Img
                className="h-8 mr-2 w-8"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingcartPage;
