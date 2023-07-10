import { useState } from "react";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const data = [
    {
      question: "What is Believers’ Convention?",
      answer:
        "Believers’ Convention is a 7-day camp meeting for every believer longing to be a part of what the Lord is doing in the body of Christ today.",
    },
    {
      question: "Who can attend Egfm Believers’ Convention?",
      answer:
        "Believers’ Convention is a 7-day camp meeting for every believer longing to be a part of what the Lord is doing in the body of Christ today.",
    },
    {
      question: "Is accommodation available?",
      answer:
        "Believers’ Convention is a 7-day camp meeting for every believer longing to be a part of what the Lord is doing in the body of Christ today.",
    },
    {
      question: "Who organises Believers’ Convention?",
      answer:
        "Believers’ Convention is a 7-day camp meeting for every believer longing to be a part of what the Lord is doing in the body of Christ today.",
    },
    {
      question: "Where is the venue for the program?",
      answer:
        "Believers’ Convention is a 7-day camp meeting for every believer longing to be a part of what the Lord is doing in the body of Christ today.",
    },
  ];

  return (
    <div className="flex items-center justify-center mt-8 px-16 min-[576px]:mt-4 md:px-0">
      <div className="w-full sm:w-[68.75rem]">
        {data.map((item, i) => (
          <div className="p-4 bg-[#FAFAFA] rounded-lg mb-4">
            <div className="cursor-pointer w-full" onClick={() => toggle(i)}>
              <h2 className="flex items-center justify-between text-lg font-semibold leading-[146%] sm:text-xl md:text-2xl">
                {item.question}
                <span className="font-normal">
                  {selected === i ? "-" : "+"}
                </span>
              </h2>
            </div>
            {selected === i ? (
              <div className="text-sm text-[#000000b3] font-normal leading-[146%] mt-2 md:text-base">
                {item.answer}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
