import Button from "../components/Button";

export default function HeroSection() {
  return (
    <section className="xl:px-22.5 lg:px-10 px-5 mb-18 md:mb-25 text-center">
      <div className=" bg-light-yellow relative rounded-[50px] lg:rounded-[70px]  w-full md:aspect-video py-10 px-5 overflow-hidden flex flex-col items-center justify-center">
        <img
          src="/herosection1.svg"
          className=" absolute -left-11.75 bottom-0 w-[28%] hidden md:block"
        />
        <img
          src="/herosection2.svg"
          className=" absolute right-0 bottom-0  w-[30%] hidden md:block"
        />

        <p className=" text-[clamp(36px,5.5vw,70px)] font-bold  leading-tight mb-3.75">
          Support for Your
          <br /> Mental Well-being
        </p>
        <p className=" text-[clamp(18px,2.5vw,24px)] mb-11.25 leading-7.25">
          Connect with licensed therapists, counselors,
          <br className=" hidden md:block" /> and wellness coaches to support
          your journey.
        </p>
        <Button className="bg-dark-green">Get Started</Button>
      </div>
    </section>
  );
}
