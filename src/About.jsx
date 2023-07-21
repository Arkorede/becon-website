import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import everyone from "./assets/everyone.png";
import teens from "./assets/teens.png";
import kids from "./assets/kids.png";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // useEffect(() => {
  //   const details = gsap.utils.toArray(
  //     ".desktopContentSection:not(:first-child)"
  //   );
  //   const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

  //   gsap.set(photos, { xPercent: 101 });

  //   const allPhotos = gsap.utils.toArray(".desktopPhoto");

  //   let mm = gsap.matchMedia();

  //   mm.add("(min-width: 640px)", () => {
  //     ScrollTrigger.create({
  //       trigger: ".about_gallery",
  //       start: "top top",
  //       end: "bottom bottom",
  //       pin: ".about_gallery",
  //     });

  //     details.forEach((detail, index) => {
  //       let headline = detail.querySelector("h1");
  //       let animation = gsap.timeline().to(photos[index], { xPercent: 0 });
  //       // .set(allPhotos[index], { autoAlpha: 0 });

  //       ScrollTrigger.create({
  //         trigger: headline,
  //         start: "top 80%",
  //         end: "top 50%",
  //         animation: animation,
  //         scrub: true,
  //         markers: false,
  //       });
  //     });
  //   });
  // }, []);
  return (
    <div className="">
      {/* <div className="hidden mt-[7.69rem] sm:block sm:px-32">
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
        <div className="about_gallery">
          <div className="left">
            <div className="desktopContent">
              <div className="desktopContentSection">
                <div className="flex items-start gap-[1.9375rem]">
                  <p className="bg-[#B88D38] w-[0.5625rem] h-[11.8rem]"></p>
                  <div className="md:w-[20.125rem]">
                    <h1 className="text-2xl text-[#B88D38] font-extrabold leading-[1.9rem]">
                      BECON FOR EVERYONE
                    </h1>
                    <p className="text-sm text-[#000000b3] font-normal leading-[156%]">
                      Men and women gather from all over the world for a great
                      encounter, irrespective of denomination and culture.
                      Believers’ Convention provides a platform for intense
                      fellowship with the Lord and the brethren.
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
              </div>
              <div className="desktopContentSection">
                <div className="flex items-start gap-[1.9375rem]">
                  <p className="bg-[#B88D38] w-[0.5625rem] h-[11.8rem]"></p>
                  <div className="event md:w-[20.125rem]">
                    <h1 className="text-2xl text-[#B88D38] font-extrabold leading-[1.9rem]">
                      BECON FOR TEENS
                    </h1>
                    <p className="text-sm text-[#000000b3] font-normal leading-[156%]">
                      Men and women gather from all over the world for a great
                      encounter, irrespective of denomination and culture.
                      Believers’ Convention provides a platform for intense
                      fellowship with the Lord and the brethren.
                    </p>
                    <br />
                    <span className="block font-normal text-sm sm:text-[15px] md:text-base">
                      BECON FOR EVERYONE TEENS:
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
              </div>
              <div className="desktopContentSection">
                <div className="flex items-start gap-[1.9375rem]">
                  <p className="bg-[#B88D38] w-[0.5625rem] h-[11.8rem]"></p>
                  <div className="event md:w-[20.125rem]">
                    <h1 className="text-2xl text-[#B88D38] font-extrabold leading-[1.9rem]">
                      BECON FOR KIDS
                    </h1>
                    <p className="text-sm text-[#000000b3] font-normal leading-[156%]">
                      Men and women gather from all over the world for a great
                      encounter, irrespective of denomination and culture.
                      Believers’ Convention provides a platform for intense
                      fellowship with the Lord and the brethren.
                    </p>
                    <br />
                    <span className="block font-normal text-sm sm:text-[15px] md:text-base">
                      BECON FOR KIDS HOLDS:
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
              </div>
            </div>
          </div>

          <div className="right">
            <div className="desktopPhotos">
              <div className="desktopPhoto">
                {" "}
                <img src={everyone} alt="" />
              </div>
              <div className="desktopPhoto">
                <img src={teens} alt="" />
              </div>
              <div className="desktopPhoto">
                <img src={kids} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* ABOUT SECTION FOR MOBILE */}
      <div className="px-16 mt-[4.5rem] sm:hidden">
        <div className="flex flex-col items-center justify-center justify-between">
          <h1 className="text-3xl text-center font-extrabold">
            ABOUT{" "}
            <span className="text-[#B88D38]">EGFM BELIEVERS’ CONVENTION</span>
          </h1>
          <p className="text-sm font-normal text-[#46371bb3] mt-8">
            BeCon is a 7-day camp meeting that takes place in August every year.
            In times like this, it remains a spiritual platform for teaching the
            gospel of Christ and the Son of God.
            <br />
            <br />
            Through this platform, seasoned ministers of the New Testament bring
            the gospel of salvation via various ministrations that prepare and
            furnish the hearts of saints to inherit eternal life ultimately.
          </p>

          {/* BECON FOR EVERYONE */}
          <div className="mt-[4.31rem]">
            <div className="max-w-full">
              <img
                src={everyone}
                alt="a group of believers"
                className="w-full h-auto sm:w-[33.6875rem]"
              />
            </div>
            <h2 className="mt-6 text-xl text-center font-extrabold text-[#B88D38] leading-[1.9rem]">
              BECON FOR EVERYONE
            </h2>
            <p className="mt-1 text-sm text-[#000000b3] font-normal leading-[156%]">
              Men and women gather from all over the world for a great
              encounter, irrespective of denomination and culture. Believers’
              Convention provides a platform for intense fellowship with the
              Lord and the brethren.
            </p>
            <br />
            <span className="block font-semibold text-center text-[#333333b3] text-base leading-[135%]">
              BECON FOR EVERYONE HOLDS:
            </span>
            <span className="block font-bold text-center text-lg leading-[135%]">
              AUG 6TH - 12TH, 2023
            </span>
            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center px-6 py-2 gap-2 rounded-3xl bg-[#F5F1E7] mt-4">
                <p className="text-base text-[#B88D38] font-normal leading-[146%]">
                  Add to calendar
                </p>
                <div className="flex items-center justify-center text-[#B88D38]">
                  <ion-icon name="calendar-outline"></ion-icon>
                </div>
              </button>
            </div>
          </div>

          {/* BECON FOR TEENS */}
          <div className="mt-[4.31rem]">
            <div className="max-w-full">
              <img
                src={teens}
                alt="a believer"
                className="w-full h-auto sm:w-[33.6875rem]"
              />
            </div>
            <h2 className="mt-6 text-xl text-center font-extrabold text-[#B88D38] leading-[1.9rem]">
              BECON FOR TEENS
            </h2>
            <p className="mt-1 text-sm text-[#000000b3] font-normal leading-[156%]">
              Men and women gather from all over the world for a great
              encounter, irrespective of denomination and culture. Believers’
              Convention provides a platform for intense fellowship with the
              Lord and the brethren.
            </p>
            <br />
            <span className="block font-semibold text-center text-[#333333b3] text-base leading-[135%]">
              BECON FOR TEENS HOLDS:
            </span>
            <span className="block font-bold text-center text-lg leading-[135%]">
              AUG 6TH - 12TH, 2023
            </span>
            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center px-6 py-2 gap-2 rounded-3xl bg-[#F5F1E7] mt-4">
                <p className="text-base text-[#B88D38] font-normal leading-[146%]">
                  Add to calendar
                </p>
                <div className="flex items-center justify-center text-[#B88D38]">
                  <ion-icon name="calendar-outline"></ion-icon>
                </div>
              </button>
            </div>
          </div>
          {/* BECON FOR KIDS */}
          <div className="mt-[4.31rem]">
            <div className="max-w-full">
              <img
                src={kids}
                alt="a believer"
                className="w-full h-auto sm:w-[33.6875rem]"
              />
            </div>
            <h2 className="mt-6 text-xl text-center font-extrabold text-[#B88D38] leading-[1.9rem]">
              BECON FOR KIDS
            </h2>
            <p className="mt-1 text-sm text-[#000000b3] font-normal leading-[156%]">
              Men and women gather from all over the world for a great
              encounter, irrespective of denomination and culture. Believers’
              Convention provides a platform for intense fellowship with the
              Lord and the brethren.
            </p>
            <br />
            <span className="block font-semibold text-center text-[#333333b3] text-base leading-[135%]">
              BECON FOR KIDS HOLDS:
            </span>
            <span className="block font-bold text-center text-lg leading-[135%]">
              AUG 6TH - 12TH, 2023
            </span>
            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center px-6 py-2 gap-2 rounded-3xl bg-[#F5F1E7] mt-4">
                <p className="text-base text-[#B88D38] font-normal leading-[146%]">
                  Add to calendar
                </p>
                <div className="flex items-center justify-center text-[#B88D38]">
                  <ion-icon name="calendar-outline"></ion-icon>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <div className="mt-[4.94rem] flex flex-col items-center justify-center gap-[4.625rem] md:flex-row">
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
              src={everyone}
              alt="a believer"
              className="w-full h-auto sm:w-[33.6875rem]"
            />
          </div>
        </div> */
}

// useEffect(() => {
//   const details = gsap.utils.toArray(
//     ".desktopContentSection:not(:first-child)"
//   );
//   const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

//   gsap.set(photos, { xPercent: 101 });

//   const allPhotos = gsap.utils.toArray(".desktopPhoto");

//   let mm = gsap.matchMedia();

//   mm.add("(min-width: 640px)", () => {
//     ScrollTrigger.create({
//       trigger: ".about_gallery",
//       start: "top top",
//       end: "bottom bottom",
//       pin: ".right",
//     });

//     details.forEach((detail, index) => {
//       let headline = detail.querySelector("h1");
//       let animation = gsap
//         .timeline()
//         .to(photos[index], { xPercent: 0 })
//         .set(allPhotos[index], { autoAlpha: 0 });

//       ScrollTrigger.create({
//         trigger: headline,
//         start: "top 80%",
//         end: "top 50%",
//         animation: animation,
//         scrub: true,
//         markers: false,
//       });
//     });
//   });
// }, []);

// const imgRef = useRef(null);

//   useEffect(() => {
//     const el = imgRef.current;
//     gsap.fromTo(
//       el,
//       { xPercent: 101 },
//       {
//         xPercent: 0,
//         scrollTrigger: {
//           trigger: ".about_gallery",
//           start: "top top",
//           end: "bottom bottom",
//           pin: ".right",
//         },
//       }
//     );
//   }, []);
