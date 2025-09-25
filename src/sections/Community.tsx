import Button from "../components/Button";

export default function Community() {
  return (
    <section className=" xl:mx-22.5 md:mx-10 mx-5 mb-22 md:mb-37.5 ">
      <div className=" relative bg-white w-full md:h-[578px] rounded-[50px] lg:rounded-[60px] px-8 py-12 md:px-15 md:pt-[70px] space-y-5 md:space-y-10">
        <img
          src="/community-section-img.svg"
          className="absolute right-0 bottom-0 !m-0 w-[53%] hidden md:block"
        />
        <p className=" text-sm font-medium">COMMUNITY</p>
        <p className=" font-semibold text-[clamp(34px,5vw,52px)]">
          You’re Not Alone
          <br /> on This Journey
        </p>
        <p className=" text-[clamp(16px,2.3vw,22px)]">
          Connect with others, share experiences,
          <br /> and find encouragement in a safe,
          <br /> supportive space.
        </p>
        <Button className="  bg-dark-green  h-13.5 w-[281px] py-0 mt-2.5">
          Join the Community
        </Button>
      </div>
    </section>
  );
}
