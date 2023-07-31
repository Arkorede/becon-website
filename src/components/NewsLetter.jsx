import arrow_right from "../assets/arrow_right.png";

const NewsLetter = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-[12.59rem]">
      <h1 className="text-sm font-medium leading-[1.9rem] tracking-[0.8rem] text-[#B88D38] min-[576px]:text-[15px] sm:text-[15px] md:text-base">
        OUR NEWSLETTER
      </h1>
      <h1 className="text-xl font-extrabold leading-[1.9rem] mt-1 min-[576px]:text-2xl">
        STAY TUNED FOR BECON’23 UPDATES
      </h1>
      <label htmlFor="email-address" className="flex items-end justify-center">
        <input
          type="email"
          className="pl-[2.125rem] pr-[6.2rem] py-[0.8rem] mt-8 rounded-lg rounded-r-none border border-[#EEDFC2] bg-[#FFFCF6] outline-none text-base min-[521px]:py-[0.9375rem] min-[440px]:pr-[8.2rem] min-[484px]:pr-[10.2rem] min-[521px]:pr-[14.2rem] min-[576px]:pr-[17.6rem] sm:pr-[22rem] md:pr-[26rem]"
          placeholder="your email address"
        />
        <button className="bg-[#B88D38] px-[1.125rem] py-[13px] rounded-r-lg min-[521px]:py-4">
          <img src={arrow_right} alt="arrow-right" className="h-6 w-6" />
        </button>
      </label>
    </section>
  );
};

export default NewsLetter;
