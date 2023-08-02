import { useState } from 'react';

const useImageSwitcher = () => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const switchImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  };

  const currentImage = images[currentImageIndex];

  return { currentImage, switchImage };
}

export default useImageSwitcher;

// import { useState } from "react";
// import TabView from "../tabview/TabView2";
// import testimony_img from "../assets/testimony_img.png";
// import everyone from "../assets/everyone.png";
// import teens from "../assets/teens.png";
// import kids from "../assets/kids.png";
// import useImageSwitcher from "../hooks/useImageSwitcher";

// const Try = () => {
//   const { currentImage, switchImage } = useImageSwitcher();

//   const tabsData = [
//     {
//       name: "Great",
//       heading: "Pst. Emeka Egwuchukwu's Testimony",
//       content: (
//         <p>
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//           <br />
//           <br className="" />
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//           <br />
//           <br />
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//         </p>
//       ),
//     },
//     {
//       name: "Wani",
//       heading: " Pst. Thompson Ehima's Testimony",
//       content: (
//         <p>
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//           <br />
//           <br className="" />
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//           <br />
//           <br />
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//         </p>
//       ),
//     },
//     {
//       name: "Ugo",
//       heading: "Pst. Moses Omokhafe's Testimony",
//       content: (
//         <p>
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//           <br />
//           <br className="" />
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//           <br />
//           <br />
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//         </p>
//       ),
//     },
//     {
//       name: "Bola",
//       heading: "Pst. Tayo Fasan's Testimony",
//       content: (
//         <p>
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//           <br />
//           <br className="" />
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//           <br />
//           <br />
//           Men and women gather from all over the world for a great encounter,
//           irrespective of denomination and culture. Believers’ Convention
//           provides a platform for intense fellowship with the Lord and the
//           brethren.
//         </p>
//       ),
//     },
//   ];
//   return (
//     <div className=" flex flex-col-reverse items-start justify-center gap-12 min-[1114px]:gap-10 min-[768px]:flex-row mt-[3.75rem]">
//       <div className="">
//         <TabView tabs={tabsData} />
//       </div>

//       <div className="testimony_img_container max-w-full px-12 pt-4 min-[768px]:p-0">
//         <img
//           src={
//             currentImage === "image1.png"
//               ? testimony_img
//               : currentImage === "image2.png"
//               ? everyone
//               : currentImage === "image3.png"
//               ? teens
//               : kids
//           }
//           alt=""
//           className="w-full h-auto"
//         />
//       </div>
//       <button className="text-white" onClick={switchImage}>glory</button>
//     </div>
//   );
// };

// export default Try;
