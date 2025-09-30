import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { cn } from "../lib/utils";

type QuestionProps = {
  question: string;
  answer: string;
};

export default function Question({ question, answer }: QuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <div className="question w-full min-h-[92px] bg-white rounded-[30px] flex items-center justify-between py-5 md:py-7.25 px-6 md:pl-12.5 md:pr-10 gap-10  ">
        <div>
          <p
            className={cn(
              " text-[15px] md:text-xl font-medium",
              isOpen && "mb-3"
            )}
          >
            {question}
          </p>
          <div
            className={cn(
              " overflow-hidden transition-all max-h-30 ",
              !isOpen && "max-h-0"
            )}
          >
            <p className=" text-[13px] md:text-sm">{answer}</p>
          </div>
        </div>
        <div
          className="w-10.5 h-10.5 aspect-square bg-[#F7F6F4] rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
    </>
  );
}
