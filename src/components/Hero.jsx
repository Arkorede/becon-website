import hero_img from "../assets/hero_img.png";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("August 6, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    let intervalRef = interval.current;

    startTimer();
    return () => {
      clearInterval(intervalRef);
    };
  });

  return (
    <section>
      <div className="mt-12 flex flex-col items-center justify-center gap-[7.5rem] md:flex-row md:px-32">
        <div className="flex flex-col items-center justify-center md:block">
          <h1 className="font-[1000] w-56 text-center text-4xl md:text-6xl md:text-left xl:text-5xl">
            BECON23 IS HERE
          </h1>
          <p className="text-[#000000b3] text-sm uppercase tracking-[0.25rem] mt-1.5 sm:mt-0">
            A <span className="text-[#B88D38] italic">7-day </span>{" "}
            life-changing event
          </p>
          <div className="flex items-center justify-center mt-10 mb-4">
            {/* DAYS */}
            <div className="w-[4.625rem] h-[6.25rem] bg-[#FFFDF9]">
              <div
                className="flex flex-col items-center justify-center bg-[#FFFDF9] w-full rounded h-[5rem] sm:h-[6rem]"
                style={{
                  boxShadow: "-1px -1px 17px 0px rgba(235,220,192,0.81)",
                }}
              >
                <p className="text-3xl font-extrabold">{timerDays}</p>
                <p className="text-[0.625rem] text-[#A1957D] tracking-[0.13125rem] font-semibold">
                  DAYS
                </p>
              </div>
              <span className="block bg-[#EBDCC0] h-[12px] rounded-b"></span>
            </div>
            <div className="mx-[0.44rem]">
              <p className="w-[0.375rem] h-[0.375rem] bg-[#EBDCC0] rounded-md mb-1.5"></p>
              <p className="w-[0.375rem] h-[0.375rem] bg-[#EBDCC0] rounded-md"></p>
            </div>
            {/* HOURS */}
            <div className="w-[4.625rem] h-[6.25rem] bg-[#FFFDF9]">
              <div
                className="flex flex-col items-center justify-center bg-[#FFFDF9] w-full rounded h-[5rem] sm:h-[6rem]"
                style={{
                  boxShadow: "-1px -1px 17px 0px rgba(235,220,192,0.81)",
                }}
              >
                <p className="text-3xl font-extrabold">{timerHours}</p>
                <p className="text-[0.625rem] text-[#A1957D] tracking-[0.13125rem] font-semibold">
                  HOURS
                </p>
              </div>
              <span className="block bg-[#EBDCC0] h-[12px] rounded-b"></span>
            </div>
            <div className="mx-[0.44rem]">
              <p className="w-[0.375rem] h-[0.375rem] bg-[#EBDCC0] rounded-md mb-1.5"></p>
              <p className="w-[0.375rem] h-[0.375rem] bg-[#EBDCC0] rounded-md"></p>
            </div>
            {/* MINUTES */}
            <div className="w-[4.625rem] h-[6.25rem] bg-[#FFFDF9]">
              <div
                className="flex flex-col items-center justify-center bg-[#FFFDF9] w-full rounded h-[5rem] sm:h-[6rem]"
                style={{
                  boxShadow: "-1px -1px 17px 0px rgba(235,220,192,0.81)",
                }}
              >
                <p className="text-3xl font-extrabold">{timerMinutes}</p>
                <p className="text-[0.625rem] text-[#A1957D] tracking-[0.13125rem] font-semibold">
                  MIN
                </p>
              </div>
              <span className="block bg-[#EBDCC0] h-[12px] rounded-b"></span>
            </div>
            <div className="mx-[0.44rem]">
              <p className="w-[0.375rem] h-[0.375rem] bg-[#EBDCC0] rounded-md mb-1.5"></p>
              <p className="w-[0.375rem] h-[0.375rem] bg-[#EBDCC0] rounded-md"></p>
            </div>
            {/* SECONDS */}
            <div className="w-[4.625rem] h-[6.25rem] bg-[#FFFDF9]">
              <div
                className="flex flex-col items-center justify-center bg-[#FFFDF9] w-full rounded h-[5rem] sm:h-[6rem]"
                style={{
                  boxShadow: "-1px -1px 17px 0px rgba(235,220,192,0.81)",
                }}
              >
                <p className="text-3xl font-extrabold">{timerSeconds}</p>
                <p className="text-[0.625rem] text-[#A1957D] tracking-[0.13125rem] font-semibold">
                  SEC
                </p>
              </div>
              <span className="block bg-[#EBDCC0] h-[12px] rounded-b"></span>
            </div>
          </div>
          <p className="mt-4 text-[#000] font-normal text-base tracking-[.2rem] mb-8">
            AUGUST 6TH - 12TH, 2023
          </p>
          <a
            href="#"
            className="register_link inline-block bg-black text-white font-normal text-sm px-8 py-3 rounded-lg"
          >
            Register now
          </a>
        </div>

        {/* HERO IMAGE */}
        <div className="">
          <div className="hero_img_container max-w-full">
            <img
              src={hero_img}
              alt="a group of believers"
              className="hero_img w-full h-auto sm:w-[33.6765rem] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
