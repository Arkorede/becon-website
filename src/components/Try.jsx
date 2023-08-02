import { useState } from "react";
import TabView from "../tabview/TabView2";
import testimony_img from "../assets/testimony_img.png";
import everyone from "../assets/everyone.png";
import teens from "../assets/teens.png";
import kids from "../assets/kids.png";
// import useImageSwitcher from "../hooks/useImageSwitcher";

const Try = () => {
  const imageList = [
    "First Image",
    "Second Image",
    "Third Image",
    "Fourth Image",
  ];
  const [page, setPage] = useState(0);
  const imageLength = imageList.length;

  const handleNext = () => {
    setPage((prevPage) => (prevPage + 1) % imageLength);
  };

  const handleImage = () => {
    switch (page) {
      case 0: {
        return <img src={testimony_img} alt="" className="w-full h-auto" />;
      }
      case 1: {
        return <img src={everyone} alt="" className="w-full h-auto" />;
      }
      case 2: {
        return <img src={teens} alt="" className="w-full h-auto" />;
      }
      case 3: {
        return <img src={kids} alt="" className="w-full h-auto" />;
      }
      default:
        setPage(0);
    }
  };

  const tabsData = [
    {
      name: "Great",
      heading: "Pst. Emeka Egwuchukwu's Testimony",
      content: (
        <p>
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
          <br />
          <br className="" />
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
          <br />
          <br />
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
        </p>
      ),
    },
    {
      name: "Wani",
      heading: " Pst. Thompson Ehima's Testimony",
      content: (
        <p>
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
          <br />
          <br className="" />
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
          <br />
          <br />
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
        </p>
      ),
    },
    {
      name: "Ugo",
      heading: "Pst. Moses Omokhafe's Testimony",
      content: (
        <p>
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
          <br />
          <br className="" />
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
          <br />
          <br />
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
        </p>
      ),
    },
    {
      name: "Bola",
      heading: "Pst. Tayo Fasan's Testimony",
      content: (
        <p>
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
          <br />
          <br className="" />
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
          <br />
          <br />
          Men and women gather from all over the world for a great encounter,
          irrespective of denomination and culture. Believers’ Convention
          provides a platform for intense fellowship with the Lord and the
          brethren.
        </p>
      ),
    },
  ];
  return (
    <div className=" flex flex-col-reverse items-start justify-center gap-12 min-[1114px]:gap-10 min-[768px]:flex-row mt-[3.75rem]">
      <div className="">
        <TabView tabs={tabsData} />
      </div>

      <div className="testimony_img_container max-w-full px-12 pt-4 min-[768px]:p-0">
        {/* <img src={testimony_img} alt="" className="w-full h-auto" /> */}
        {handleImage()}
      </div>
      <button className="text-white" onClick={handleNext}>
        Glory
      </button>
    </div>
  );
};

export default Try;
