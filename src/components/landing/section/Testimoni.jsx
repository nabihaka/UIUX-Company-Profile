import * as React from "react";
import GmeetLogo from "@/assets/gmeet_logo.svg";
import Quote from "@/assets/quote_icon.svg";

const TestimoniSection = () => {
  return (
    <section id="testimoni" className="pt-[120px]">
      <div className="xl:mx-[178px] xl2:mx-[218px] xl3:mx-[258px] 2xl:mx-[306px] flex flex-col items-center">
        <div className="flex flex-col items-center mb-10">
          <span className="font-normal lg:text-sm xl:text-base text-custom-A7ABB6 mb-4">
            What our customer say
          </span>
          <h2 className="capitalize font-bold lg:text-[35px] xl:text-[2.5rem] text-custom-blue mb-6">
            testimonial
          </h2>
          <p className="font-normal text-center lg:text-sm xl:text-base text-custom-A7ABB6">
            Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
          </p>
        </div>
        <div className="w-full flex flex-col items-center mb-11">
          <div className="w-full relative flex justify-center items-center">
            <img src={Quote} className="absolute left-0" />
            <img src={GmeetLogo} />
          </div>
        </div>
        <div className="w-full mb-10">
          <p className="font-light text-center text-[2rem] text-black">
            Horizon Free make a great web product and help our business to be
            more efficient and increase profit.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <span className="font-bold text-xl text-custom-blue">
            Larry Pageim Fred & Sergey Brin
          </span>
          <span className="font-normal text-sm text-black">
            Sr. Director, Brand Marketing
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
