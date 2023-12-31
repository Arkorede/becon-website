import egfm_logo from "../assets/egfm_logo.png";
import fountainstream_logo from "../assets/fountainstream_logo.png";
import mixlr_logo from "../assets/mixlr_logo.png";
import waystream_logo from "../assets/waystream_logo.png";
import instagram_logo from "../assets/instagram_logo.png";

const HiddenMenu = ({ setShowMenu }) => {
  const handleCancelClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="">
      <div className="bg-white h-auto mt-[3.62rem] px-4 py-3.5">
        <div className="flex justify-center items-center justify-between">
          <a href="">
            <img
              src={egfm_logo}
              alt=" egfm logo"
              className="w-[3.1875rem] h-[3.1875rem]"
            />
          </a>
          <button className="text-5xl" onClick={handleCancelClick}>
            ×
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 mt-10 px-[3.69rem]">
          <a
            href="#"
            className="text-xl text-center font-medium leading-normal sm:text-2xl"
          >
            About EGFM
          </a>
          <a
            href="#"
            className="text-xl text-center font-medium leading-normal sm:text-2xl"
          >
            FAQ
          </a>
          <a
            href="#"
            className="register_link bg-black text-white font-normal text-sm px-[4.2rem] py-4 rounded-lg sm:text-sm sm:px-[5.5rem]"
          >
            Register now
          </a>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-start justify-start gap-4 mt-[2.82rem] px-[10.4rem]">
            <a
              href="#"
              className="flex items-center justify-start gap-4 text-[15px] text-[#EA597B] font-medium leading-normal rounded-[0.17731rem] bg-[#FFF4F9] pl-3.5 pr-7 py-2 w-full min-[546px]:pl-4 min-[546px]:pr-10 min-[546px]:text-[17px] sm:pl-8 sm:pr-[63px] sm:py-2.5 sm:text-xl"
            >
              <img
                src={instagram_logo}
                alt="instagram logo"
                className="w-[0.97506rem] h-[0.97506rem]"
              />
              <p className="">Instagram →</p>
            </a>
            <a
              href="#"
              className="flex items-center justify-start gap-4 text-[15px] text-[#1D9BF0] font-medium leading-normal rounded-[0.17731rem] bg-[#F2FAFF] pl-3.5 pr-7 py-2 w-full min-[546px]:pl-4 min-[546px]:pr-10 min-[546px]:text-[17px] sm:pl-8 sm:pr-[63px] sm:py-2.5 sm:text-xl"
            >
              <ion-icon name="logo-twitter"></ion-icon>
              <p className="">Twitter →</p>
            </a>
            <a
              href="#"
              className="flex items-center justify-start gap-4 text-[15px] text-[#ED1D24] font-medium leading-normal rounded-[0.17731rem] bg-[#FFF1F2] pl-3.5 pr-7 py-2 w-full min-[546px]:pl-4 min-[546px]:pr-10 min-[546px]:text-[17px] sm:pl-8 sm:pr-[63px] sm:py-2.5 sm:text-xl"
            >
              <ion-icon name="logo-youtube"></ion-icon>
              <p className="">YouTube →</p>
            </a>
            <a
              href="#"
              className="flex items-center justify-start gap-4 text-[15px] text-[#1877F2] font-medium leading-normal rounded-[0.17731rem] bg-[#EFF6FF] pl-3.5 pr-12 py-2 w-[172px] min-[546px]:w-full min-[546px]:pl-4 min-[546px]:pr-10 min-[546px]:text-[17px] sm:pl-8 sm:pr-[63px] sm:py-2.5 sm:text-xl"
            >
              <ion-icon name="logo-facebook"></ion-icon>
              <p className="">Facebook →</p>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-[2.23rem] mb-[3.24rem] mr-1.5 gap-8">
          <div className="flex items-center justify-center gap-1.5">
            <img
              src={fountainstream_logo}
              alt="fountainstream logo"
              className="w-[0.94238rem] h-[0.94238rem]"
            />
            <p className="text-base font-normal leading-normal">
              Fountain stream
            </p>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <img
              src={mixlr_logo}
              alt="mixlr logo"
              className="w-[0.94238rem] h-[0.94238rem]"
            />
            <p className="text-base font-normal leading-normal">Mixlr</p>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <img
              src={waystream_logo}
              alt="waystream logo"
              className="w-[16px] h-[23px]"
            />
            <p className="text-base font-normal leading-normal">Waystream</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenMenu;
