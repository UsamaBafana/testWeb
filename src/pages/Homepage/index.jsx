import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-newsreader items-center justify-start mx-auto pb-[222px] w-full">
        <div className="border-black-900 border-solid flex flex-col items-end justify-start w-full">
          <header className="bg-white-A700 border-b-2 border-b-black-900 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 rounded-[15px] w-full">
            <Text
              className="mb-[38px] ml-24 sm:ml-[0] sm:mt-0 mt-[41px] md:text-3xl sm:text-[28px] text-[32px] text-light_green-900 tracking-[-0.32px]"
              size="txtNewsreaderMedium32"
            >
              EatHealthy!
            </Text>
            <Text
              className="common-pointer mb-11 sm:ml-[0] ml-[487px] sm:mt-0 mt-[47px] text-base text-black-900 text-center"
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
            <Text
              className="common-pointer sm:ml-[0] ml-[60px] mr-[158px] sm:mt-0 my-[45px] text-base text-black-900 text-center"
              size="txtInterRegular16"
              onClick={() => navigate("/shoppingcart")}
            >
              Basket
            </Text>
          </header>
          <Text
            className="leading-[120.00%] mb-auto mt-[167px] mx-auto md:text-5xl text-[64px] text-black-900 text-center tracking-[-1.28px] w-[71%] sm:w-full"
            size="txtNewsreaderRegular64"
          >
            <span className="text-black-900 font-newsreader font-normal">
              Start your{" "}
            </span>
            <span className="text-black-900 font-newsreader font-normal italic">
              healthy
            </span>
            <span className="text-black-900 font-newsreader font-normal">
              {" "}
              eating habits now by learning{" "}
            </span>
            <span className="text-black-900 font-newsreader font-normal italic">
              how
            </span>
            <span className="text-black-900 font-newsreader font-normal">
              {" "}
              to cook!
            </span>
          </Text>
          <div className="flex flex-col font-inter md:gap-10 gap-[185px] items-start justify-start mt-[46px] md:px-5 w-[94%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Img
                className="h-[668px] md:h-auto md:mt-0 mt-[218px] object-cover"
                src="images/img_jonathankemper.png"
                alt="jonathankemper"
              />
              <div className="flex flex-col items-start justify-start mb-[57px]">
                <Button
                  className="common-pointer cursor-pointer font-semibold min-w-[227px] rounded-lg shadow-bs text-center text-xl"
                  onClick={() => navigate("/productpage")}
                  size="md"
                >
                  Browse our shop
                </Button>
                <Img
                  className="h-[480px] sm:h-auto mt-[248px] object-cover w-full"
                  src="images/img_stocksytxp226f.png"
                  alt="stocksytxp226f"
                />
                <Text
                  className="mt-[19px] text-black-900 text-sm tracking-[-0.14px]"
                  size="txtInterMedium14"
                >
                  Cumin-crusted chicken with kale salad and hummus dressing
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start w-[78%] md:w-full">
              <Text
                className="md:mt-0 mt-[7px] text-black-900 text-sm tracking-[0.56px] uppercase"
                size="txtInterSemiBold14"
              >
                WHAT WE BELIEVE
              </Text>
              <Text
                className="leading-[160.00%] text-black-900 text-xl"
                size="txtInterRegular20"
              >
                <>
                  We believe in healthy cooking.
                  <br />
                  <br />
                  Learn how to cook healthy food with our healthy ingredients
                  from fresh produce and meat. Subscribe to our service to get
                  ingredients to cook and we will line up different dishes for
                  you to learn how to cook and we will send you the ingredients
                  and instructions needed !<br />
                  <br />
                  Customers will be able to get discount with more steps in !
                  Use a FitBit and tracked the number of steps you have walked
                  per day to clock in more discount. Terms and conditions
                  applies.
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
