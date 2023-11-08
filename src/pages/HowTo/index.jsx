import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

const HowToPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-newsreader sm:gap-10 md:gap-10 gap-[142px] items-start justify-start mx-auto pb-[188px] w-full">
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
              className="common-pointer mb-11 sm:ml-[0] ml-[63px] sm:mt-0 mt-[47px] text-base text-black-900 text-center"
              size="txtInterRegular16"
              onClick={() => navigate("/shoppingcart")}
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
          <div className="bg-white-A700 flex flex-col gap-[29px] items-start justify-end pt-[55px] md:px-10 sm:px-5 px-[55px] w-full">
            <Text
              className="ml-10 md:ml-[0] md:text-5xl text-[64px] text-black-900 tracking-[-1.28px]"
              size="txtNewsreaderRegular64"
            >
              How to ?
            </Text>
            <Line className="bg-gray-300 h-0.5 max-w-[824px] mx-auto shadow-bs w-full" />
          </div>
        </div>
        <div className="flex flex-col font-inter items-center justify-start md:ml-[0] ml-[120px] md:px-5 w-[71%] md:w-full">
          <div className="bg-gray-50 border-2 border-gray-300 border-solid flex flex-col md:gap-10 gap-[101px] items-center justify-end p-4 rounded-[24px] w-full">
          <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/bJB7ry7wd9Y" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div className="flex flex-col items-start justify-start mb-[13px]">
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
      </div>
    </>
  );
};

export default HowToPage;

