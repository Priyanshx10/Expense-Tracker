import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 flex items-center flex-col mt-[-100px]">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black dark:text-white text-center sm:text-left mb-20 ">
                Unleash the power of <br />
                <span className=" items-center text-3xl sm:text-5xl md:text-[4rem] lg:text-[6rem] font-bold mt-1 leading-tight sm:leading-none text-blue-800 ">
                  AUTOMATION AND FINANCE
                </span>
              </h1>
            </>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] w-full sm:w-3/4 md:w-4/5 lg:w-[90%] object-center "
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default HeroSection;
