import Button from "../components/Button";

export default function Explore() {
  return (
    <>
      <section className="xl:mx-22.5 md:mx-10 mx-5 mb-22 md:mb-35 ">
        <div className=" space-y-5 text-center mb-12 md:mb-20">
          <p className=" text-sm font-medium">EXPLORE & LEARN</p>
          <p className="font-bold text-[clamp(34px,5vw,52px)] leading-tight">
            Resources for <br /> Your Well-being
          </p>
          <p className=" text-[clamp(16px,2.3vw,22px)]">
            Explore expert insights, self-care guides,
            <br /> and tools to support your mental health.
          </p>
        </div>

        <div className=" flex flex-wrap items-center justify-between gap-10">
          <div className=" w-full flex-1 max-md:space-y-10 md:h-[404px] bg-white rounded-[50px] lg:rounded-[60px] px-8 py-12 md:pt-15 md:pb-18.75 md:px-17.5  text-center flex flex-col justify-between items-center">
            <div>
              <p className=" text-[30px] font-semibold text-dark-green mb-5 leading-[36px]">
                Articles &<br /> Guides
              </p>
              <p>
                Practical tips on stress <br />
                management, mindfulness, and <br />
                emotional resilience.
              </p>
            </div>
            <Button className=" bg-[#EFC01D] h-[54px] w-[155px] p-0">
              Explore
            </Button>
          </div>

          <div className=" w-full flex-1 max-md:space-y-10 md:h-[404px] bg-white rounded-[50px] lg:rounded-[60px] px-8 py-12 md:pt-15 md:pb-18.75 md:px-17.5 text-center flex flex-col justify-between items-center">
            <div>
              <p className=" text-[30px] font-semibold text-dark-green mb-5 leading-[36px]">
                Meditation &<br /> Relaxation
              </p>
              <p>
                Audio sessions for guided
                <br /> meditation and deep breathing
                <br />
                exercises.
              </p>
            </div>
            <Button className=" bg-[#4CCBBB] h-[54px] w-[155px] p-0">
              Explore
            </Button>
          </div>

          <div className=" w-full flex-1 max-md:space-y-10 md:h-[404px] bg-white rounded-[50px] lg:rounded-[60px] px-8 py-12 md:pt-15 md:pb-18.75 md:px-17.5 text-center flex flex-col justify-between items-center">
            <div>
              <p className=" text-[30px] font-semibold text-dark-green mb-5 leading-[36px]">
                Webinars &<br /> Workshops
              </p>
              <p>
                Live and recorded sessions with
                <br /> mental health professionals.
              </p>
            </div>
            <Button className=" bg-[#F39CAC] h-[54px] w-[155px] p-0">
              Explore
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
