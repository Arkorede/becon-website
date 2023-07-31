import question_mark from "../assets/question_mark.png";

const Questions = () => {
  return (
    <section className="flex items-center justify-center mt-[9.31rem] px-16 sm:justify-between md:px-32">
      <div className="flex flex-col items-center justify-center sm:block">
        <h1 className="text-2xl font-extrabold mb-8 w-full min-[576px]:text-3xl md:w-72 md:text-4xl">
          ANY <span className="text-[#B88D38]">QUESTIONS?</span>
        </h1>
        <a
          href="#"
          className="question_link bg-black text-sm px-[2.5rem] py-4 rounded-lg text-white min-[576px]:py-4 min-[576px]:px-[5.5rem] md:text-base"
        >
          Talk to us
        </a>
      </div>
      <div className="">
        <img
          src={question_mark}
          alt="question mark"
          className="hidden w-[11rem] min-[484px]:w-[13rem] min-[576px]:w-[15rem] sm:block sm:w-[16.5rem] md:w-[21.1875rem]"
        />
      </div>
    </section>
  );
};

export default Questions;
