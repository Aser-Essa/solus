import Question from "../components/Question";

export default function Faqs() {
  return (
    <>
      <section className=" xl:mx-22.5 md:mx-10 mx-5 mb-20 md:mb-37.5 min-h-243.75 flex flex-wrap lg:flex-nowrap items-start md:items-end justify-between  md:gap-12.5 ">
        <div className=" space-y-5 md:space-y-10 flex-1">
          <p className=" text-sm font-medium">NEED HELP?</p>
          <p className="font-bold text-[clamp(34px,5vw,52px)] leading-tight">
            Frequently
            <br /> Asked Questions
          </p>
          <p className=" text-[clamp(16px,2.3vw,22px)]">
            Find answers to common questions about <br /> our services, therapy,
            and mental well- <br className=" hidden lg:block" />
            being.
          </p>
          <div className=" hidden lg:flex h-150.5  items-end mt-2.5">
            <div className="  relative bg-[#F9E6D0] h-96.25 w-full min-w-[570px] rounded-[50px] lg:rounded-[60px]">
              <img
                src="/faqs-section-img.svg"
                className="absolute mt-2.5 bottom-0  left-[70px]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-5 w-full">
          <Question
            question={"How do I book a therapy session?"}
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />

          <Question
            question={"Are online sessions available?"}
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />

          <Question
            question={"What’s the difference between therapy and coaching?"}
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />

          <Question
            question={"Do I need a subscription to access services?"}
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />

          <Question
            question={
              "Can I switch therapists if I don’t feel the right connection?"
            }
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />

          <Question
            question={
              "Is my information and session history kept confidential?"
            }
            answer={
              "How do I book a therapy session? How do I book a therapy session? How do I book a therapy session? How do I book a therapy session?"
            }
          />
        </div>
      </section>
    </>
  );
}
