import gallery from "../assets/gallery.png";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";

const Gallery = () => {
  return (
    <section className="">
      <div className="grid grid-cols-2 gap-2 mt-[4.5rem] min-[480px]:grid-cols-3 sm:hidden">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={gallery1} alt="believers" />
          <img src={gallery2} alt="believers" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={gallery3} alt="believers" />
          <img src={gallery4} alt="believers" />
        </div>
        <div className="hidden flex flex-col items-center justify-center gap-2 min-[480px]:block">
          <img src={gallery5} alt="believers" />
          <img src={gallery6} alt="believers" />
        </div>
      </div>

      <div className="hidden gallery_img_grid sm:block">
        <figure className="">
          <div className="slide">
            <img
              src={gallery}
              alt="gathering of believers"
              className="gallery_img"
            />
          </div>
          <div className="slide">
            <img
              src={gallery}
              alt="gathering of believers"
              className="gallery_img"
            />
          </div>
          <div className="slide">
            <img
              src={gallery}
              alt="gathering of believers"
              className="gallery_img"
            />
          </div>
          <div className="slide">
            <img
              src={gallery}
              alt="gathering of believers"
              className="gallery_img"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Gallery;
