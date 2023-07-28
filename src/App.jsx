import question_mark from "./assets/question_mark.png";
import arrow_right from "./assets/arrow_right.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Ministers from "./components/Ministers";
import Faq from "./components/Faq";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer";
import "./App.css";
// import Try from "./Try";

function App() {
  return (
    // <div className="">
    //   <Try />
    // </div>
    <>
      <div className="max-[412px]:w-[412px]">
        <Header />
        <Hero />
        <About />
        {/* WHY YOU SHOULD ATTEND */}
        <div className="mt-[6.88rem] md:mt-[11.88rem]">
          <div className="flex items-center justify-center p-2 min-[480px]:p-0">
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
                  disabled
                >
                  <p className="text-sm text-center min-[576px]:text-base">
                    Participants
                  </p>
                </Tab>
              </TabList>
              <TabPanel>
                <Testimony />
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
              <div className="flex flex-col items-start justify-center justify-between pt-[76px] pl-12 pr-[114px] sm:gap-[5.75rem] sm:flex-row md:pl-24 lg:pl-32 xl:pr-[126px]">
                <h1 className="text-xl text-white font-extrabold w-full mt-3 sm:text-2xl sm:w-[29.3125rem] sm:mt-0 md:text-4xl">
                  PREVIOUSLY ON{" "}
                  <span className="text-[#B88D38]">
                    EGFM BELIEVERS’ CONVENTION
                  </span>
                </h1>
                <p className="text-sm text-[#ffffffcc] font-normal w-full leading-[146%] mt-3 sm:w-[31.875rem] sm:mt-0 md:text-base">
                  9 years and on…
                  <br />
                  <br />
                  Season after season, through the revelation of the divine
                  mysteries, Believers&apos; Convention has become even more
                  beautiful as we have drawn nearer to the things of God’s
                  glory.
                  <br />
                  <br />
                  From the days of{" "}
                  <span className="font-semibold">The Gathering</span> of 2 or
                  3, till the dawning of{" "}
                  <span className="font-semibold">Who is Like God</span>, the
                  light of the gospel has continued to shine brighter upon every
                  heart that diligently participates.
                </p>
              </div>

              <Gallery />
              <Ministers />

              {/* FAQ */}
              <div className="mt-[6.94rem]" id="faq">
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
                    className="question_link bg-black text-sm px-[2.5rem] py-4 rounded-lg text-white min-[576px]:py-4 min-[576px]:px-[5.5rem] md:text-base"
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
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//

export default App;
