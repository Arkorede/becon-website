import testimony_img from "./assets/testimony_img.png";
import small_testimonial_img from "./assets/small_testimonial_img.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Testimonial = () => {
  // const testimonialList = [
  //   "First Testimonial",
  //   "Second Testimonial",
  //   "Third Testimonial",
  //   "Fourth Testimonial",
  // ];
  // const [page, setPage] = useState(0);
  // const testimonialLength = testimonialList.length;

  return (
    <div className="relative bg-black h-[50rem] mt-[3.75rem] sm:h-[58.2rem] md:h-[41rem] md:pl-24 lg:pl-32">
      <Tabs>
        <TabList>
          <div className="absolute bottom-[309px] left-[50px] flex items-center justify-center gap-2 min-[484px]:bottom-[403px] min-[524px]:bottom-[370px] sm:bottom-[241px] lg:bottom-[190.6px] md:left-[128px]">
            <Tab
              className={"testimonial-tab"}
              selectedClassName="testimonial-tabs--selected"
            >
              {" "}
              <img
                src={small_testimonial_img}
                alt=""
                className="w-[3.625rem] h-[3.625rem] rounded-lg lg:w-[4.625rem] lg:w-[4.625rem]"
              />
            </Tab>
            <Tab
              className={"testimonial-tab"}
              selectedClassName="testimonial-tabs--selected"
            >
              <img
                src={small_testimonial_img}
                alt=""
                className="w-[3.625rem] h-[3.625rem] rounded-lg lg:w-[4.625rem] lg:w-[4.625rem]"
              />
            </Tab>
            <Tab
              className={"testimonial-tab"}
              selectedClassName="testimonial-tabs--selected"
            >
              <img
                src={small_testimonial_img}
                alt=""
                className="w-[3.625rem] h-[3.625rem] rounded-lg lg:w-[4.625rem] lg:w-[4.625rem]"
              />
            </Tab>
            <Tab
              className={"testimonial-tab"}
              selectedClassName="testimonial-tabs--selected"
            >
              <img
                src={small_testimonial_img}
                alt=""
                className="w-[3.625rem] h-[3.625rem] rounded-lg lg:w-[4.625rem] lg:w-[4.625rem]"
              />
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="flex flex-col-reverse items-start justify-center gap-y-12 lg:gap-5 md:flex-row">
            <div className="px-12 mt-[2.6rem] md:px-0 lg:mt-[3rem]">
              <h1 className="text-xl text-white font-normal leading-[146%] mt-8 sm:text-2xl">
                Pst. Thompson Ehima's Testimony
              </h1>
              <p className="text-sm text-[#ffffffcc] font-normal leading-[136%] mt-2 lg:text-base lg:leading-[146%]">
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
                <br />
                <br className="" />
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
                <br />
                <br />
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
              </p>
            </div>
            <div className="">
              <img
                src={testimony_img}
                alt=""
                className="h-[24.7rem] min-[484px]:h-[26.7rem] min-[524px]:h-[28.7rem] sm:h-[37rem] md:h-auto md:w-auto"
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex items-start justify-center justify-between">
            <div className="mt-[3rem]">
              <h1 className="text-2xl text-white font-normal leading-[146%}">
                Pst. Emeka Egwuchukwu's Testimony
              </h1>
              <p className="text-base text-[#ffffffcc] font-normal leading-[146%] mt-2">
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
                <br />
                <br />
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
                <br />
                <br />
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
              </p>
            </div>
            <div className="">
              <img src={testimony_img} alt="" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex items-start justify-center justify-between">
            <div className="mt-[4.31rem] ">
              <h1 className="text-xl text-white font-normal leading-[146%] sm:text-2xl">
                Pst. John Fasanu’s Testimony
              </h1>
              <p className="text-base text-[#ffffffcc] font-normal leading-[146%] mt-2">
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
                <br />
                <br />
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
                <br />
                <br />
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
              </p>
            </div>
            <div className="">
              <img src={testimony_img} alt="" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex items-start justify-center justify-between">
            <div className="mt-[4.31rem] ">
              <h1 className="text-xl text-white font-normal leading-[146%] sm:text-2xl">
                Pst. Moses Omokhafe's Testimony
              </h1>
              <p className="text-base text-[#ffffffcc] font-normal leading-[146%] mt-2">
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
                <br />
                <br />
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
                <br />
                <br />
                Men and women gather from all over the world for a great
                encounter, irrespective of denomination and culture. Believers’
                Convention provides a platform for intense fellowship with the
                Lord and the brethren.
              </p>
            </div>
            <div className="">
              <img src={testimony_img} alt="" />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Testimonial;
