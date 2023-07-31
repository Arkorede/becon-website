import mixlr_logo from "../assets/mixlr_logo.png";
import youtube_logo from "../assets/youtube_logo.png";

const Stream = () => {
  return (
    <section className="grid grid-cols-1 mt-[8.62rem] pb-[9.62rem] md:px-[126px] md:grid-cols-2">
      <div className="text-2xl text-center font-extrabold min-[510px]:text-3xl sm:text-4xl min-[730px]:text-5xl md:w-[22.5rem] md:text-left md:leading-[3.4rem] min-[1062px]:text-[3.5rem]">
        <p className="text-white">
          STREAM <span className="text-[#F4DBA8]">BECON 23 NOW</span>
        </p>
      </div>
      <div className="flex items-center flex-col justify-center gap-[1.38rem] mt-8 min-[658px]:flex-row md:mt-0">
        <div className="flex flex-col justify-start justify-between pl-6 pt-10 pb-8 pr-[2.12rem] rounded-lg bg-[#292929] w-[21rem] min-[658px]:w-[16.125rem] h-[16.75rem]">
          <img
            src={mixlr_logo}
            alt="mixlr logo"
            className="w-[2.375rem] h-[2.375rem]"
          />
          <p className="text-white text-2xl font-extrabold leading-[1.9rem] min-[658px]:text-xl md:text-base min-[1008px]:text-lg min-[1064px]:text-xl min-[1170px]:text-2xl">
            STREAM ON MIXLR
          </p>
          <a
            href=""
            className="bg-[#ED1C24] text-white text-[13px] px-4 py-2 rounded-lg text-xl  min-[658px]:py-3 min-[658px]:text-[10px] min-[1190px]:px-8 min-[1190px]:text-xs min-[1224px]:text-[13px] min-[1256px]:text-sm"
          >
            USE MIXLR →
          </a>
        </div>
        <div className="flex flex-col justify-start justify-between pl-6 pt-10 pb-8 pr-[2.12rem] rounded-lg bg-[#292929] w-[21rem] min-[658px]:w-[16.125rem] h-[16.75rem]">
          <img
            src={youtube_logo}
            alt="mixlr logo"
            className="w-[2.375rem] h-[2.375rem]"
          />
          <p className="text-white text-2xl font-extrabold leading-[1.9rem] min-[658px]:text-xl md:text-base min-[1008px]:text-lg min-[1064px]:text-xl min-[1170px]:text-2xl">
            STREAM ON YOUTUBE
          </p>
          <a
            href=""
            className="bg-[#ED1C24] text-white text-[13px] px-4 py-2 rounded-lg text-xl  min-[658px]:py-3 min-[658px]:text-[10px] min-[1190px]:px-8 min-[1190px]:text-xs min-[1224px]:text-[13px] min-[1256px]:text-sm"
          >
            USE YOUTUBE →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stream;
