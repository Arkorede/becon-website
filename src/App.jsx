// import { useState } from "react";
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
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Faq from "./Faq";

function App() {
  return (
    <>
      {/* NAVIGATION SECTION */}
      <nav className="flex items-center justify-center justify-between px-32 pt-3.5">
        <div className="flex items-center justify-center gap-4">
          <img
            src={egfm_logo}
            alt="egfm logo"
            className="w-[3.1875rem] h-[3.1875rem]"
          />
          <div className="flex items-center justify-center gap-2">
            <p className="font-normal text-sm">About EGFM</p>
            <p className="font-normal text-sm">FAQ</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-4">
            <p className="font-medium text-sm">Follow BECON online</p>
            <img
              src={arrow_down}
              alt="arrow down"
              className="w-[0.99rem] h-[0.44363rem]"
            />
          </div>
          <a
            href="#"
            className="bg-black text-white font-normal text-sm px-8 py-3 rounded-lg"
          >
            Register now
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="px-32 mt-12 flex items-center justify-center gap-[7.5rem]">
        <div className="">
          <h1 className="font-[1000] text-6xl w-56">BECON23 IS HERE</h1>
          <p className="text-[#000000b3] text-sm uppercase tracking-[0.25rem]">
            A <span className="text-[#B88D38] italic">7-day </span>{" "}
            life-changing event
          </p>
          <div className="flex items-center justify-start mt-10 mb-4">
            {/* DAYS */}
            <div className="w-[4.625rem] h-[6.25rem] bg-[#FFFDF9]">
              <div
                className="flex flex-col items-center justify-center bg-[#FFFDF9] w-full h-[6rem] rounded"
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
                className="flex flex-col items-center justify-center bg-[#FFFDF9] w-full h-[6rem] rounded"
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
                className="flex flex-col items-center justify-center bg-[#FFFDF9] w-full h-[6rem] rounded"
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
                className="flex flex-col items-center justify-center bg-[#FFFDF9] w-full h-[6rem] rounded"
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
              className="w-[33.6765rem] w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="px-32 mt-[7.69rem]">
        <div className="flex items-center justify-center justify-between">
          <h1 className="text-5xl font-extrabold">
            ABOUT{" "}
            <span className="text-[#B88D38]">EGFM BELIEVERS’ CONVENTION</span>
          </h1>
          <p className="text-base font-normal text-[#46371bb3]">
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

        <div className="mt-[4.94rem] flex items-center justify-center gap-[4.625rem]">
          <div className="flex items-start gap-[1.9375rem]">
            <p className="bg-[#B88D38] w-[0.5625rem] h-[11.8rem]"></p>
            <div className="w-[20.125rem]">
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
              <span className="block font-normal text-base">
                BECON FOR EVERYONE HOLDS:
              </span>
              <span className="block font-semibold text-lg mt-[-3px]">
                AUG 6TH - 12TH, 2023
              </span>
              <button className="flex items-center justify-center px-6 py-2 gap-2 rounded-3xl bg-[#F5F1E7] mt-6">
                <p className="text-base text-[#B88D38] font-normal">
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
              className="w-[33.6875rem] w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* WHY YOU SHOULD ATTEND */}
      <div className="mt-[11.88rem]">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-extrabold leading-[1.9rem] w-[25.375rem]">
            WHY YOU SHOULD ATTEND BELIEVERS’ CONVENTION?
          </h1>
        </div>
        <div className="">
          <Tabs>
            <TabList className={"attend-tab-list"}>
              <Tab className={"attend-tab"}>Ministers</Tab>
              <Tab className={"attend-tab"}>Participants</Tab>
            </TabList>

            <TabPanel></TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>

          <div
            className="w-full h-[138.375rem] mt-[3.75rem]"
            style={{
              background:
                "linear-gradient(180deg, #000 50%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          >
            {/* <Tabs>
                  <TabPanel>
                    <h2>Any content 1</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                  <TabList>
                    <Tab className={"attende-tab"}>Title 1</Tab>
                    <Tab className={"attende-tab"}>Title 2</Tab>
                  </TabList>
                </Tabs> */}
            <div className="flex items-start justify-center gap-[5.75rem]">
              <h1 className="text-4xl text-white font-extrabold w-[29.3125rem]">
                PREVIOUSLY ON{" "}
                <span className="text-[#B88D38]">
                  EGFM BELIEVERS’ CONVENTION
                </span>
              </h1>
              <p className="text-base text-[#ffffffcc] font-normal w-[31.875rem] leading-[146%]">
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

            <div className="grid grid-cols-4 gap-x-[1.25rem] mt-[4.5rem]">
              <div className="flex flex-col items-center justify-center gap-[1.25rem]">
                <img src={gallery1} alt="believers" />
                <img src={gallery2} alt="believers" />
              </div>
              <div className="flex flex-col items-center justify-center gap-[1.25rem]">
                <img src={gallery3} alt="believers" />
                <img src={gallery4} alt="believers" />
              </div>
              <div className="flex flex-col items-center justify-center gap-[1.25rem]">
                <img src={gallery5} alt="believers" />
                <img src={gallery6} alt="believers" />
              </div>
              <div className="flex flex-col items-center justify-center gap-[1.25rem]">
                <img src={gallery7} alt="believers" />
                <img src={gallery8} alt="believers" />
              </div>
            </div>
            {/* MINISTERS */}
            <div className="flex items-center justify-center mt-[5.72rem] gap-5">
              <img
                src={egfm_logo}
                alt="egfm logo"
                className="w-[3.875rem] h-[3.875rem]"
              />
              <h1 className="text-4xl text-white font-extrabold">
                MEET <span className="text-[#F4DBA8]">THE MINISTERS</span>
              </h1>
            </div>
            <div className="grid grid-cols-3 mt-[2.09rem]">
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-base text-white font-extrabold leading-[1.9rem] w-[14.4375rem] bottom-[4.75rem] left-12">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-sm text-[#ffffffcc] font-normal leading-[146%] bottom-12 left-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-base text-white font-extrabold leading-[1.9rem] w-[14.4375rem] bottom-[4.75rem] left-12">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-sm text-[#ffffffcc] font-normal leading-[146%] bottom-12 left-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-base text-white font-extrabold leading-[1.9rem] w-[14.4375rem] bottom-[4.75rem] left-12">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-sm text-[#ffffffcc] font-normal leading-[146%] bottom-12 left-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-base text-white font-extrabold leading-[1.9rem] w-[14.4375rem] bottom-[4.75rem] left-12">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-sm text-[#ffffffcc] font-normal leading-[146%] bottom-12 left-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-base text-white font-extrabold leading-[1.9rem] w-[14.4375rem] bottom-[4.75rem] left-12">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-sm text-[#ffffffcc] font-normal leading-[146%] bottom-12 left-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-base text-white font-extrabold leading-[1.9rem] w-[14.4375rem] bottom-[4.75rem] left-12">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-sm text-[#ffffffcc] font-normal leading-[146%] bottom-12 left-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-base text-white font-extrabold leading-[1.9rem] w-[14.4375rem] bottom-[4.75rem] left-12">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-sm text-[#ffffffcc] font-normal leading-[146%] bottom-12 left-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-base text-white font-extrabold leading-[1.9rem] w-[14.4375rem] bottom-[4.75rem] left-12">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-sm text-[#ffffffcc] font-normal leading-[146%] bottom-12 left-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
              <div className="relative text-left">
                <img src={minister1} alt="a minister" />
                <p className="absolute text-base text-white font-extrabold leading-[1.9rem] w-[14.4375rem] bottom-[4.75rem] left-12">
                  REV. KAYODE OYEGOKE
                </p>
                <p className="absolute text-sm text-[#ffffffcc] font-normal leading-[146%] bottom-12 left-12">
                  President, Eternal Glorious Fountain Ministeries
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-[6.94rem]">
              <h1 className="text-base text-[#B88D38] text-center font-medium leading-[1.9rem] tracking-[.8rem]">
                FAQS
              </h1>
              <h1 className="text-2xl text-center font-extrabold leading-[1.9rem] mt-1">
                FREQUENTLY ASKED QUESTIONS
              </h1>

              <Faq />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
