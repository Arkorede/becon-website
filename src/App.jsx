import { useRef, useState } from "react";
import egfm_logo from "./assets/egfm_logo.png";
import arrow_down from "./assets/arrow_down.png";
import hero_img from "./assets/hero_img.png";
import about_img from "./assets/about_img.png";
import gallery1 from "./assets/gallery1.png";
import gallery2 from "./assets/gallery2.png";
import gallery3 from "./assets/gallery3.png";
import gallery4 from "./assets/gallery4.png";
import gallery5 from "./assets/gallery5.png";
import gallery6 from "./assets/gallery6.png";
import gallery7 from "./assets/gallery7.png";
import gallery8 from "./assets/gallery8.png";
import minister1 from "./assets/minister1.png";
import question_mark from "./assets/question_mark.png";
import arrow_right from "./assets/arrow_right.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaBars, FaTimes } from "react-icons/fa";
import Faq from "./Faq";
import Testimonial from "./Testimonial";
import "./App.css";
import HiddenMenu from "./HiddenMenu";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const clicked = () => {
    setShowMenu(true);
  };

  return (
    <div className="max-[412px]:w-[412px]">
      {/* HEADER  SECTION */}
      <header className="relative py-4 border border-[red]">
        <nav className="flex items-center justify-center justify-between px-16 md:px-32">
          <div className="flex items-center justify-center gap-4">
            <img
              src={egfm_logo}
              alt="egfm logo"
              className="w-[3.1875rem] h-[3.1875rem]"
            />
            <div className="flex items-center justify-center gap-2">
              <p className="hidden font-normal text-sm md:block">About EGFM</p>
              <p className="hidden font-normal text-sm md:block">FAQ</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center justify-center gap-4">
              <p className="hidden font-medium text-sm md:block">
                Follow BECON online
              </p>
              <img
                src={arrow_down}
                alt="arrow down"
                className="hidden w-[0.99rem] h-[0.44363rem] md:block"
              />
            </div>
            <a
              href="#"
              className="hidden bg-black text-white font-normal text-sm px-8 py-3 rounded-lg md:block"
            >
              Register now
            </a>
          </div>
          <button className="block md:hidden" onClick={clicked}>
            <FaBars />
          </button>
        </nav>
        {showMenu && (
          <div className="absolute top-[-46px] w-full">
            <HiddenMenu setShowMenu={setShowMenu} />
          </div>
        )}
      </header>

      {/* HERO SECTION */}
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
            {/* w-[4.625rem] */}
            <div className="w-[4.625rem] h-[6.25rem] bg-[#FFFDF9]">
              <div
                className="flex flex-col items-center justify-center bg-[#FFFDF9] w-full rounded h-[5rem] sm:h-[6rem]"
                style={{
                  boxShadow: "-1px -1px 17px 0px rgba(235,220,192,0.81)",
                }}
              >
                <p className="text-3xl font-extrabold">45</p>
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
                <p className="text-3xl font-extrabold">22</p>
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
                <p className="text-3xl font-extrabold">34</p>
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
                <p className="text-3xl font-extrabold">12</p>
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
            className="inline-block bg-black text-white font-normal text-sm px-8 py-3 rounded-lg"
          >
            Register now
          </a>
        </div>

        {/* HERO IMAGE */}
        <div className="">
          <div className="max-w-full">
            <img
              src={hero_img}
              alt="a group of believers"
              className="w-full h-auto sm:w-[33.6765rem] "
            />
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="px-16 mt-[7.69rem] sm:px-32">
        <div className="flex flex-col items-center justify-center justify-between md:flex-row">
          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            ABOUT{" "}
            <span className="text-[#B88D38]">EGFM BELIEVERS’ CONVENTION</span>
          </h1>
          <p className="text-sm font-normal text-[#46371bb3] mt-6 md:mt-0 lg:text-base">
            BeCon is a 7-day camp meeting that takes place in August every year.
            In times like this, it remains a spiritual platform for teaching the
            gospel of Christ and the Son of God.
            <br />
            <br />
            Through this platform, seasoned ministers of the New Testament bring
            the gospel of salvation via various ministrations that prepare and
            furnish the hearts of saints to inherit eternal life ultimately.
          </p>
        </div>

        <div className="mt-[4.94rem] flex flex-col items-center justify-center gap-[4.625rem] md:flex-row">
          <div className="flex items-start gap-[1.9375rem]">
            <p className="bg-[#B88D38] w-[0.5625rem] h-[11.8rem]"></p>
            <div className="md:w-[20.125rem]">
              <h1 className="text-2xl text-[#B88D38] font-extrabold leading-[1.9rem]">
                BECON FOR EVERYONE
              </h1>
              <p className="text-sm text-[#000000b3] font-normal leading-[156%]">
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
              </p>
              <br />
              <span className="block font-normal text-sm sm:text-[15px] md:text-base">
                BECON FOR EVERYONE HOLDS:
              </span>
              <span className="block font-semibold text-sm mt-[-3px] sm:text-base md:text-lg">
                AUG 6TH - 12TH, 2023
              </span>
              <button className="flex items-center justify-center px-6 py-2 gap-2 rounded-3xl bg-[#F5F1E7] mt-4 sm:mt-6">
                <p className="text-sm text-[#B88D38] font-normal sm:text-[15px] md:text-base">
                  Add to calendar
                </p>
                <div className="flex items-center justify-center text-[#B88D38]">
                  <ion-icon name="calendar-outline"></ion-icon>
                </div>
              </button>
            </div>
          </div>
          <div className="max-w-full">
            <img
              src={about_img}
              alt="a group of believers"
              className="w-full h-auto sm:w-[33.6875rem]"
            />
          </div>
        </div>
      </div>

      {/* WHY YOU SHOULD ATTEND */}
      <div className="mt-[6.88rem] md:mt-[11.88rem]">
        <div className="flex items-center justify-center p-2">
          <h1 className="text-lg text-center font-extrabold leading-[1.6rem] w-full min-[480px]:text-[21px] sm:w-[25.375rem] sm:leading-[1.9rem] sm:text-2xl">
            WHY YOU SHOULD ATTEND BELIEVERS’ CONVENTION?
          </h1>
        </div>
        {/* TESTIMONIAL */}
        <div className="">
          <Tabs>
            <TabList className={"attend-tab-list"}>
              <Tab
                className={"attend-tab"}
                selectedClassName="attend-tabs__tab--selected"
              >
                <p className="text-sm text-center min-[576px]:text-base">
                  Ministers
                </p>
              </Tab>
              <Tab
                className={"attend-tab"}
                selectedClassName="attend-tabs__tab--selected"
              >
                <p className="text-sm text-center min-[576px]:text-base">
                  Participants
                </p>
              </Tab>
            </TabList>
            <TabPanel>
              <Testimonial />
            </TabPanel>
            <TabPanel>
              <h2>Any content</h2>
            </TabPanel>
          </Tabs>

          <div
            className="w-full h-[102rem] md:h-[138.375rem]"
            style={{
              background:
                "linear-gradient(180deg, #000 48%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          >
            <div className="h-1 bg-black sm:h-8 md:hidden"></div>
            <div className="flex flex-col items-start justify-center gap-y-2 gap-x-[5.75rem] px-12 min-[490px]:gap-[5.75rem] sm:flex-row md:px-0">
              <br />
              <h1 className="text-xl text-white font-extrabold w-full mt-3 sm:text-2xl sm:w-[29.3125rem] md:mt-0 md:text-4xl">
                PREVIOUSLY ON{" "}
                <span className="text-[#B88D38]">
                  EGFM BELIEVERS’ CONVENTION
                </span>
              </h1>
              <p className="text-sm text-[#ffffffcc] font-normal w-full mt-3 leading-[146%] sm:w-[31.875rem] md:mt-0 md:text-base">
                9 years and on…
                <br />
                <br />
                Season after season, through the revelation of the divine
                mysteries, Believers' Convention has become even more beautiful
                as we have drawn nearer to the things of God’s glory.
                <br />
                <br />
                From the days of{" "}
                <span className="font-semibold">The Gathering</span> of 2 or 3,
                till the dawning of{" "}
                <span className="font-semibold">Who is Like God</span>, the
                light of the gospel has continued to shine brighter upon every
                heart that diligently participates.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-[4.5rem] sm:gap-3 sm:grid-cols-4 md:gap-x-[1.25rem]">
              <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-[1.25rem]">
                <img src={gallery1} alt="believers" />
                <img src={gallery2} alt="believers" />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-[1.25rem]">
                <img src={gallery3} alt="believers" />
                <img src={gallery4} alt="believers" />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-[1.25rem]">
                <img src={gallery5} alt="believers" />
                <img src={gallery6} alt="believers" />
              </div>
              <div className="flex flex-col items-center justify-center hidden gap-2 sm:block sm:gap-3 md:gap-[1.25rem]">
                <img src={gallery7} alt="believers" />
                <img src={gallery8} alt="believers" />
              </div>
            </div>
            {/* MINISTERS */}
            <div className="flex items-center justify-center mt-[5.72rem] gap-5">
              <img
                src={egfm_logo}
                alt="egfm logo"
                className="w-[3.2rem] h-[3.2rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[3.875rem] md:h-[3.875rem]"
              />
              <h1 className="text-2xl text-white font-extrabold md:text-4xl">
                MEET <span className="text-[#F4DBA8]">THE MINISTERS</span>
              </h1>
            </div>
            <div className="grid grid-cols-2 mt-[2.09rem] sm:grid-cols-3">
              <div className="relative text-left">
                {/* <p
                  className="absolute w-full h-[10px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #495057 30%, rgb(134, 142, 150)100%)",
                  }}
                ></p> */}
                <img src={minister1} alt="a minister" />
                <p className="absolute text-[15px] text-white font-extrabold leading-[1.2rem] left-6 bottom-[3rem] min-[521px]:mb-3.5 min-[556px]:mb-0 min-[521px]:bottom-[2.1rem] min-[576px]:bottom-[3rem] sm:bottom-[4rem] md:left-10 md:text-base md:leading-[1.9rem]">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-[13px] text-[#ffffffcc] font-normal leading-[126%] left-6 bottom-3 min-[576px]:bottom-6 sm:bottom-7 min-[832px]:bottom-10 md:left-10 md:text-sm md:leading-[146%] md:bottom-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-[15px] text-white font-extrabold leading-[1.2rem] left-6 bottom-[3rem] min-[521px]:mb-3.5 min-[556px]:mb-0 min-[521px]:bottom-[2.1rem] min-[576px]:bottom-[3rem] sm:bottom-[4rem] md:left-10 md:text-base md:leading-[1.9rem]">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-[13px] text-[#ffffffcc] font-normal leading-[126%] left-6 bottom-3 min-[576px]:bottom-6 sm:bottom-7 min-[832px]:bottom-10 md:left-10 md:text-sm md:leading-[146%] md:bottom-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-[15px] text-white font-extrabold leading-[1.2rem] left-6 bottom-[3rem] min-[521px]:mb-3.5 min-[556px]:mb-0 min-[521px]:bottom-[2.1rem] min-[576px]:bottom-[3rem] sm:bottom-[4rem] md:left-10 md:text-base md:leading-[1.9rem]">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-[13px] text-[#ffffffcc] font-normal leading-[126%] left-6 bottom-3 min-[576px]:bottom-6 sm:bottom-7 min-[832px]:bottom-10 md:left-10 md:text-sm md:leading-[146%] md:bottom-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-[15px] text-white font-extrabold leading-[1.2rem] left-6 bottom-[3rem] min-[521px]:mb-3.5 min-[556px]:mb-0 min-[521px]:bottom-[2.1rem] min-[576px]:bottom-[3rem] sm:bottom-[4rem] md:left-10 md:text-base md:leading-[1.9rem]">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-[13px] text-[#ffffffcc] font-normal leading-[126%] left-6 bottom-3 min-[576px]:bottom-6 sm:bottom-7 min-[832px]:bottom-10 md:left-10 md:text-sm md:leading-[146%] md:bottom-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-[15px] text-white font-extrabold leading-[1.2rem] left-6 bottom-[3rem] min-[521px]:mb-3.5 min-[556px]:mb-0 min-[521px]:bottom-[2.1rem] min-[576px]:bottom-[3rem] sm:bottom-[4rem] md:left-10 md:text-base md:leading-[1.9rem]">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-[13px] text-[#ffffffcc] font-normal leading-[126%] left-6 bottom-3 min-[576px]:bottom-6 sm:bottom-7 min-[832px]:bottom-10 md:left-10 md:text-sm md:leading-[146%] md:bottom-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-[15px] text-white font-extrabold leading-[1.2rem] left-6 bottom-[3rem] min-[521px]:mb-3.5 min-[556px]:mb-0 min-[521px]:bottom-[2.1rem] min-[576px]:bottom-[3rem] sm:bottom-[4rem] md:left-10 md:text-base md:leading-[1.9rem]">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-[13px] text-[#ffffffcc] font-normal leading-[126%] left-6 bottom-3 min-[576px]:bottom-6 sm:bottom-7 min-[832px]:bottom-10 md:left-10 md:text-sm md:leading-[146%] md:bottom-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-[15px] text-white font-extrabold leading-[1.2rem] left-6 bottom-[3rem] min-[521px]:mb-3.5 min-[556px]:mb-0 min-[521px]:bottom-[2.1rem] min-[576px]:bottom-[3rem] sm:bottom-[4rem] md:left-10 md:text-base md:leading-[1.9rem]">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-[13px] text-[#ffffffcc] font-normal leading-[126%] left-6 bottom-3 min-[576px]:bottom-6 sm:bottom-7 min-[832px]:bottom-10 md:left-10 md:text-sm md:leading-[146%] md:bottom-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-[15px] text-white font-extrabold leading-[1.2rem] left-6 bottom-[3rem] min-[521px]:mb-3.5 min-[556px]:mb-0 min-[521px]:bottom-[2.1rem] min-[576px]:bottom-[3rem] sm:bottom-[4rem] md:left-10 md:text-base md:leading-[1.9rem]">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-[13px] text-[#ffffffcc] font-normal leading-[126%] left-6 bottom-3 min-[576px]:bottom-6 sm:bottom-7 min-[832px]:bottom-10 md:left-10 md:text-sm md:leading-[146%] md:bottom-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="hidden relative text-left sm:block">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-[15px] text-white font-extrabold leading-[1.2rem] left-6 bottom-[3rem] min-[521px]:mb-3.5 min-[556px]:mb-0 min-[521px]:bottom-[2.1rem] min-[576px]:bottom-[3rem] sm:bottom-[4rem] md:left-10 md:text-base md:leading-[1.9rem]">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-[13px] text-[#ffffffcc] font-normal leading-[126%] left-6 bottom-3 min-[576px]:bottom-6 sm:bottom-7 min-[832px]:bottom-10 md:left-10 md:text-sm md:leading-[146%] md:bottom-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-[6.94rem]">
              <h1 className="text-sm text-[#B88D38] text-center font-medium leading-[1.9rem] tracking-[.8rem] sm:text-[15px] md:text-base">
                FAQS
              </h1>
              <h1 className="text-xl text-center font-extrabold leading-[1.9rem] mt-1 sm:text-[21px] md:text-2xl">
                FREQUENTLY ASKED QUESTIONS
              </h1>

              <Faq />
            </div>
            {/* ANY QUESTIONS */}
            <div className="flex items-center justify-center mt-[9.31rem] px-16 sm:justify-between md:px-32">
              <div className="flex flex-col items-center justify-center sm:block">
                <h1 className="text-2xl font-extrabold mb-8 w-full min-[576px]:text-3xl md:w-72 md:text-4xl">
                  ANY <span className="text-[#B88D38]">QUESTIONS?</span>
                </h1>
                <a
                  href="#"
                  className="bg-black text-sm px-[2.5rem] py-4 rounded-lg text-white min-[576px]:py-4 min-[576px]:px-[5.5rem] md:text-base"
                >
                  Talk to us
                </a>
              </div>
              <div className="">
                <img
                  src={question_mark}
                  alt="question mark"
                  className="hidden w-[11rem] min-[484px]:w-[13rem] min-[576px]:w-[15rem] sm:block sm:w-[16.5rem] md:w-[21.1875rem]"
                />
              </div>
              {/* w-[11rem] min-[484px]:w-[13rem] min-[576px]:w-[15rem] sm:w-[16.5rem] md:w-[21.1875rem] */}
            </div>

            {/* NEWSLETTER */}
            <div className="flex flex-col items-center justify-center mt-[12.59rem]">
              <h1 className="text-sm font-medium leading-[1.9rem] tracking-[0.8rem] text-[#B88D38] min-[576px]:text-[15px] sm:text-[15px] md:text-base">
                OUR NEWSLETTER
              </h1>
              <h1 className="text-xl font-extrabold leading-[1.9rem] mt-1 min-[576px]:text-2xl">
                STAY TUNED FOR BECON’23 UPDATES
              </h1>
              <label
                htmlFor="email-address"
                className="flex items-end justify-center"
              >
                <input
                  type="email"
                  className="pl-[2.125rem] pr-[6.2rem] py-[0.8rem] mt-8 rounded-lg rounded-r-none border border-[#EEDFC2] bg-[#FFFCF6] outline-none text-base min-[521px]:py-[0.9375rem] min-[440px]:pr-[8.2rem] min-[484px]:pr-[10.2rem] min-[521px]:pr-[14.2rem] min-[576px]:pr-[17.6rem] sm:pr-[22rem] md:pr-[26rem]"
                  placeholder="your email address"
                />
                <button className="bg-[#B88D38] px-[1.125rem] py-[13px] rounded-r-lg min-[521px]:py-4">
                  <img
                    src={arrow_right}
                    alt="arrow-right"
                    className="h-6 w-6"
                  />
                </button>
              </label>
            </div>
            {/* FOOTER */}
            <div className="px-20 min-[490px]:px-32 mt-[7.91rem]">
              <div className="border-t py-[2.44rem]">
                {/* min-[422px]:text-[15px]  */}
                <p className="text-center text-[15px] font-normal leading-normal min-[576px]:text-base">
                  Copyright © 2023 Eternal Glorious Fountain Ministry. All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
