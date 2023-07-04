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
    <div className="relative bg-black h-[41rem] mt-[3.75rem] pl-32">
      <Tabs>
        <TabList>
          <div className="absolute bottom-[143.6px] left-[128px] flex items-center justify-center gap-2">
            <Tab
              className={"testimonial-tab"}
              selectedClassName="testimonial-tabs--selected"
            >
              {" "}
              <img
                src={small_testimonial_img}
                alt=""
                className="w-[4.625rem] h-[4.625rem] rounded-lg"
              />
            </Tab>
            <Tab
              className={"testimonial-tab"}
              selectedClassName="testimonial-tabs--selected"
            >
              <img
                src={small_testimonial_img}
                alt=""
                className="w-[4.625rem] h-[4.625rem] rounded-lg"
              />
            </Tab>
            <Tab
              className={"testimonial-tab"}
              selectedClassName="testimonial-tabs--selected"
            >
              <img
                src={small_testimonial_img}
                alt=""
                className="w-[4.625rem] h-[4.625rem] rounded-lg"
              />
            </Tab>
            <Tab
              className={"testimonial-tab"}
              selectedClassName="testimonial-tabs--selected"
            >
              <img
                src={small_testimonial_img}
                alt=""
                className="w-[4.625rem] h-[4.625rem] rounded-lg"
              />
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="flex items-start justify-center justify-between">
            <div className="mt-[4.31rem] ">
              <h1 className="text-2xl text-white font-normal leading-[146%}">
                Pst. Thompson Ehima's Testimony
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
              <h1 className="text-2xl text-white font-normal leading-[146%}">
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
              <h1 className="text-2xl text-white font-normal leading-[146%}">
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
