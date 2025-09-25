import Button from "../components/Button";

export default function Services() {
  return (
    <>
      <section className="xl:px-22.5 lg:px-10 px-5 mb-20 md:mb-37.5 ">
        <div className=" space-y-3 md:space-y-5 text-center mb-12 md:mb-20">
          <p className=" text-sm font-medium">SERVICES</p>
          <p className="font-bold text-[clamp(34px,5vw,52px)] leading-tight">
            Your Path to
            <br /> Well-being
          </p>
          <p className=" text-[clamp(16px,2.3vw,22px)]">
            Discover expert guidance for a healthier
            <br /> mind and balanced life.
          </p>
        </div>

        <div className=" flex items-center flex-wrap gap-10">
          <div className=" relative bg-[#F9E6D0]  flex-1 min-w-[250px] md:h-[455px] rounded-[50px] lg:rounded-[60px] px-8 md:px-15 py-11.75 md:pt-[75px] space-y-6 md:space-y-[35px]">
            <img
              src="/hearts.svg"
              className=" absolute top-[59px] right-[52.8px] hidden lg:block"
            />
            <p className=" font-semibold  text-[clamp(28px,4vw,40px)] leading-tight">
              Mindfulness & <br />
              Meditation
            </p>
            <p className="  text-[clamp(18px,3vw,20px)]">
              Guided meditation sessions
              <br className=" hidden md:flex" /> and stress management <br />
              techniques.
            </p>
            <Button className=" text-dark-green border border-dark-green h-13.5 py-0">
              Learn more
            </Button>
          </div>

          <div className=" bg-white flex-1 min-w-[250px] md:h-[455px] rounded-[50px] lg:rounded-[60px] px-8 md:px-15 py-11.75 md:pt-[75px] space-y-6 md:space-y-[35px]">
            <p className=" font-semibold text-[clamp(28px,4vw,40px)] leading-tight">
              One-on-One
              <br /> Therapy
            </p>
            <p className="  text-[clamp(18px,3vw,20px)]">
              Virtual and in-person therapy
              <br className=" hidden md:flex" /> sessions with licensed <br />
              professionals.
            </p>
            <Button className=" text-dark-green border border-dark-green h-13.5 py-0">
              Learn more
            </Button>
          </div>
        </div>

        <div className="relative bg-white w-full md:h-[455px] overflow-hidden rounded-[50px] lg:rounded-[60px] px-8 md:px-15 py-11.75 md:pt-[75px] space-y-6 md:space-y-[35px] mt-10">
          <img
            src="/mirror.svg"
            className=" absolute right-0 bottom-0 !m-0 w-[38%] hidden md:block "
          />
          <p className=" font-semibold text-[clamp(28px,4vw,40px)] leading-tight">
            Wellness Coaching
          </p>
          <p className=" text-[clamp(18px,3vw,20px)]">
            Personalized guidance to help you build healthier habits,
            <br /> manage stress, and achieve balance in all areas of your life.
            <br />
            <br />
            Our wellness coaches support you in creating sustainable
            <br /> routines for mental, emotional, and physical well-being.
          </p>
          <Button className=" bg-dark-green  h-13.5 py-0">Learn more</Button>
        </div>
      </section>
    </>
  );
}
