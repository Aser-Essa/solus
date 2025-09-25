import Button from "../components/Button";

export default function HowItWorks() {
  return (
    <>
      <section className="xl:px-22.5 lg:px-10 px-5 mb-22 md:mb-37.5 flex flex-col-reverse md:flex-row gap-12 items-center justify-between ">
        <div className=" md:max-w-[470px] space-y-5 md:space-y-9">
          <p className=" text-sm font-medium">HOW IT WORKS</p>
          <p className=" font-bold  text-[clamp(34px,5vw,52px)] leading-tight">
            We Help You Prioritize Your Mental Health
          </p>
          <p className="text-[clamp(16px,2.3vw,22px)]">
            Browse therapists, book a session, and
            <br className=" hidden lg:block" /> start your healing journey with
            trusted
            <br className=" hidden lg:block" /> professionals.
          </p>
          <Button className="bg-dark-green">Find a Therapist</Button>
        </div>

        <div className=" relative w-full md:max-w-[550px] aspect-square  bg-dark-green rounded-[50px] lg:rounded-[60px]">
          <img
            src="/HowItWorks-section-img.svg"
            className=" absolute bottom-0 left-1/2  -translate-x-1/2 w-[75%]"
          />
        </div>
      </section>
    </>
  );
}
