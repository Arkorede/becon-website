import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Try = () => {
  const dRef = useRef(null);

  useEffect(() => {
    const el = dRef.current;

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "20px 80%",
        end: "bottom top",
        toggleActions: "restart pause reverse pause",
        markers: true,
        pin: ".ghost",
        scrub: 1,
      },
      x: 400,
      rotation: 360,
      duration: 3,
    });
  }, []);

  // console.log("my target", document.querySelectorAll(".d"));

  return (
    <div className="flex flex-col gap-64 items-center justify-center h-[3000px] bg-">
      <div className="a bg-[red] h-8 w-8 p-20 text-xl">A</div>
      <div className="b bg-[blue] h-8 w-8 p-20 text-xl">B</div>
      <div className="c bg-[green] h-8 w-8 p-20 text-xl">C</div>
      <div className="d bg-[orange] h-8 w-8 p-20 text-xl" ref={dRef}>
        D
      </div>
    </div>
  );
};

export default Try;

// useLayoutEffect(() => {
//   let ctx = gsap.context(() => {
//     let details = gsap.utils.toArray(".desktopContentSection");

//     details.forEach((detail) => {
//       let headline = detail.querySelec;
//       gsap.to(detail, {
//         yPercent: 100 * (details.length - 1),
//         scrollTrigger: {
//           trigger: left.current,
//           scrub: true,
//           start: "top top",
//           end: () => "+=" + left.current.offsetWidth,
//         },
//       });
//     });

//     let photos = gsap.utils.toArray(".desktopPhoto");
//     gsap.set(photos, { xPercent: 100 });

//     ScrollTrigger.create({
//       trigger: right.current,
//       pin: desktopPhotos.current,
//       pinSpacing: false,
//       start: "top top",
//       end: "bottom top",
//       scrub: true,
//     });
//   }, []);

//   return () => ctx.revert();
// });