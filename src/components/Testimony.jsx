import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Minister from "./Minister";
import Gallery from "./Gallery";
import Stream from "./Stream";
// import Try from "./Try";

const Testimony = () => {
  return (
    <section className="">
      <div className="flex items-center justify-center p-2 min-[480px]:p-0 mt-[6.88rem] md:mt-[11.88rem]">
        <h1 className="text-lg text-center font-extrabold leading-[1.6rem] w-full min-[480px]:text-[21px] sm:w-[25.375rem] sm:leading-[1.9rem] sm:text-2xl">
          WHY YOU SHOULD ATTEND BELIEVERS’ CONVENTION?
        </h1>
      </div>
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
        <div className="becon_bg">
          <TabPanel>
            <Minister />
          </TabPanel>

          <div className="flex flex-col items-start justify-center justify-between pt-[76px] pl-8 pr-[114px] sm:gap-[5.75rem] sm:flex-row md:pl-24 lg:pl-32 xl:pr-[126px]">
            <h1 className="text-xl text-white font-extrabold w-full mt-3 sm:text-2xl sm:w-[29.3125rem] sm:mt-0 md:text-4xl">
              PREVIOUSLY ON{" "}
              <span className="text-[#B88D38]">EGFM BELIEVERS’ CONVENTION</span>
            </h1>
            <p className="text-sm text-[#ffffffcc] font-normal w-full leading-[146%] mt-3 sm:w-[31.875rem] sm:mt-0 md:text-base">
              9 years and on…
              <br />
              <br />
              Season after season, through the revelation of the divine
              mysteries, Believers&apos; Convention has become even more
              beautiful as we have drawn nearer to the things of God’s glory.
              <br />
              <br />
              From the days of{" "}
              <span className="font-semibold">The Gathering</span> of 2 or 3,
              till the dawning of{" "}
              <span className="font-semibold">Who is Like God</span>, the light
              of the gospel has continued to shine brighter upon every heart
              that diligently participates.
            </p>
          </div>

          <Gallery />
          <Stream />
        </div>

        <TabPanel>
          <h2>Any content</h2>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Testimony;
