import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const ProductpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[217px] w-full">
        <header className="border-b-2 border-b-black-900 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full">
          <Text
            className="common-pointer mb-[38px] ml-24 sm:ml-[0] sm:mt-0 mt-[41px] md:text-3xl sm:text-[28px] text-[32px] text-light_green-900 tracking-[-0.32px]"
            size="txtNewsreaderMedium32"
            onClick={() => navigate("/")}
          >
            EatHealthy!
          </Text>
          <Text
            className="common-pointer mb-11 sm:ml-[0] ml-[934px] sm:mt-0 mt-[47px] text-base text-black-900 text-center"
            size="txtInterRegular16"
            onClick={() => navigate("/productpage")}
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
            className="cursor-pointer font-inter font-semibold min-w-[126px] ml-12 sm:ml-[0] mr-24 sm:mt-0 my-8 rounded-lg text-base text-center"
            size="sm"
          >
            Basket (3)
          </Button>
        </header>
        <div className="bg-white-A700 flex flex-col items-center justify-start pt-[62px] md:px-10 sm:px-5 px-[62px] w-full">
          <div className="flex flex-col gap-[22px] items-center justify-start max-w-[1695px] mx-auto w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
              <Text
                className="md:text-5xl text-[64px] text-black-900 tracking-[-1.28px]"
                size="txtNewsreaderRegular64"
              >
                Weekly Dishes
              </Text>
              <Text
                className="sm:ml-[0] ml-[51px] text-black-900 text-xl"
                size="txtInterRegular20"
              >
                <span className="text-black-900 font-inter text-left font-medium">
                  Fresh
                </span>
                <span className="text-black-900 font-inter text-left font-light">
                  {" "}
                  — August 21, 2023
                </span>
              </Text>
              <Button
                className="cursor-pointer font-inter font-semibold mb-2.5 min-w-[88px] sm:ml-[0] ml-[733px] sm:mt-0 mt-[13px] text-base text-center"
                shape="round"
              >
                Default
              </Button>
              <Button
                className="border border-gray-400 border-solid cursor-pointer font-inter font-semibold mb-2.5 min-w-[62px] ml-2 sm:ml-[0] sm:mt-0 mt-[13px] text-base text-center"
                shape="round"
                color="white_A700"
              >
                A-Z
              </Button>
              <Button
                className="border border-gray-400 border-solid cursor-pointer font-inter font-semibold mb-2.5 min-w-[101px] ml-2 sm:ml-[0] sm:mt-0 mt-[13px] text-base text-center"
                shape="round"
                color="white_A700"
              >
                List view
              </Button>
            </div>
            <Line className="bg-gray-300 h-0.5 shadow-bs w-full" />
          </div>
        </div>
        <div
          className="common-pointer bg-gray-50 border-2 border-gray-300 border-solid flex flex-col gap-[49px] justify-start max-w-[1134px] mt-[63px] mx-auto pb-[29px] md:px-5 rounded-[24px] w-full"
          onClick={() => navigate("/shoppingcart")}
        >
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
        <List
          className="flex flex-col gap-[261px] items-center max-w-[1144px] mt-[132px] mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          <div
            className="common-pointer bg-gray-50 border-2 border-gray-300 border-solid flex flex-1 flex-col gap-[25px] justify-start pb-[29px] rounded-[24px] w-full"
            onClick={() => navigate("/shoppingcart")}
          >
            <Img
              className="common-pointer h-[526px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-full"
              src="images/img_edoneilavvdz.png"
              alt="edoneilavvdz"
              onClick={() => navigate("/shoppingcart")}
            />
            <div className="flex flex-col items-start justify-start ml-6 md:ml-[0]">
              <Text
                className="text-black-900 text-xl"
                size="txtInterSemiBold20Black900"
              >
                Mediterranean Chickpea Salad
              </Text>
              <Text
                className="mt-[5px] text-light_green-900 text-xl"
                size="txtInterSemiBold20"
              >
                Ingredients includes: Canned chickpeas (garbanzo beans),
                Tomatoes, Onions
              </Text>
              <Text
                className="mt-[17px] text-base text-gray-600"
                size="txtInterRegular16Gray600"
              >
                Total Calories: 520-700 calories
              </Text>
            </div>
          </div>
          <div
            className="common-pointer bg-gray-50 border-2 border-gray-300 border-solid flex flex-1 flex-col gap-[25px] justify-start pb-[29px] rounded-[24px] w-full"
            onClick={() => navigate("/shoppingcart")}
          >
            <Img
              className="common-pointer h-[526px] sm:h-auto object-cover rounded-tl-[24px] rounded-tr-[24px] w-full"
              src="images/img_edoneilavvdz.png"
              alt="edoneilavvdz"
              onClick={() => navigate("/shoppingcart")}
            />
            <div className="flex flex-col items-start justify-start ml-6 md:ml-[0]">
              <Text
                className="text-black-900 text-xl"
                size="txtInterSemiBold20Black900"
              >
                Mediterranean Chickpea Salad
              </Text>
              <Text
                className="mt-[5px] text-light_green-900 text-xl"
                size="txtInterSemiBold20"
              >
                Ingredients includes: Canned chickpeas (garbanzo beans),
                Tomatoes, Onions
              </Text>
              <Text
                className="mt-[17px] text-base text-gray-600"
                size="txtInterRegular16Gray600"
              >
                Total Calories: 520-700 calories
              </Text>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default ProductpagePage;
