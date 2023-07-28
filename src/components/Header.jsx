import { useState } from "react";
import egfm_logo from "../assets/egfm_logo.png";
import fountainstream_logo from "../assets/fountainstream_logo.png";
import mixlr_logo from "../assets/mixlr_logo.png";
import waystream_logo from "../assets/waystream_logo.png";
// import instagram_logo from "./assets/instagram_logo.png";
import arrow_down from "../assets/arrow_down.png";
import { FaBars } from "react-icons/fa";
import HiddenMenu from "./HiddenMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const clicked = () => {
    setShowMenu(true);
  };

  return (
    <header>
      {" "}
      <div className="relative py-4">
        <nav className="flex items-center justify-center justify-between px-16 md:px-32">
          <div className="flex items-center justify-center gap-4">
            <img
              src={egfm_logo}
              alt="egfm logo"
              className="w-[3.1875rem] h-[3.1875rem]"
            />
            <div className="flex items-center justify-center gap-2">
              <a href="" className="hidden font-normal text-sm md:block">
                About EGFM
              </a>
              <a href="#faq" className="hidden font-normal text-sm md:block">
                FAQ
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="dropdown relative inline-block">
              <button className="flex items-center justify-center gap-4">
                <p className="hidden font-medium text-sm md:block">
                  Follow BECON online
                </p>
                <img
                  src={arrow_down}
                  alt="arrow down"
                  className="hidden w-[0.99rem] h-[0.44363rem] md:block"
                />
              </button>
              <div
                className="dropdown_content hidden absolute z-30 top- right-0 w-[21rem] h-[10.875rem] bg-white rounded-lg"
                style={{
                  boxShadow: "0px 4px 28px 0px rgba(197, 197, 197, 0.30)",
                }}
              >
                <div className="flex items-start justify-between pl-[0.69rem] pr-[2.06rem] py-4">
                  <div className="flex flex-col gap-1 items-center justify-center w-[8.8125rem]">
                    <a
                      href="#"
                      className="flex items-center justify-start pl-4 gap-1 rounded-sm bg-[#FFF4F9] text-[#EA597B] py-1.5 w-full text-sm"
                    >
                      <ion-icon name="logo-instagram"></ion-icon>
                      <p className="">Instagram →</p>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-start pl-4 gap-1 rounded-sm bg-[#F2FAFF] text-[#1DA1F2] py-1.5 w-full text-sm"
                    >
                      <ion-icon name="logo-twitter"></ion-icon>
                      <p className="">Twitter →</p>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-start pl-4 gap-1 rounded-sm bg-[#FFF1F2] text-[#ED1D24] py-1.5 w-full text-sm"
                    >
                      <ion-icon name="logo-youtube"></ion-icon>
                      <p className="">Youtube →</p>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-start pl-4 gap-1 rounded-sm bg-[#EFF6FF] text-[#1877F2] py-1.5 w-full text-sm"
                    >
                      <ion-icon name="logo-facebook"></ion-icon>
                      <p className="">Instagram →</p>
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-3">
                    <div className="flex items-center justify-center gap-1">
                      <img
                        src={fountainstream_logo}
                        alt="fountainstream logo"
                        className="w-[0.6875rem] h-[0.6875rem]"
                      />
                      <p className="text-sm font-normal leading-normal">
                        Fountain stream
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <img
                        src={mixlr_logo}
                        alt="mixlr logo"
                        className="w-[0.70581rem] h-[0.70581rem]"
                      />
                      <p className="text-sm font-normal leading-normal">
                        Mixlr
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <img
                        src={waystream_logo}
                        alt="waystream logo"
                        className="w-[0.6875rem] h-[0.6875rem]"
                      />
                      <p className="text-sm font-normal leading-normal">
                        Waystream
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="register_link hidden bg-black text-white font-normal text-sm px-8 py-3 rounded-lg md:block"
            >
              Register now
            </a>
          </div>

          <button className="block md:hidden" onClick={clicked}>
            <FaBars />
          </button>
        </nav>
        {showMenu && (
          <div className="hidden_menu absolute top-[-46px] w-full">
            <HiddenMenu setShowMenu={setShowMenu} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
