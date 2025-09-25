import Button from "../components/Button";

export default function Footer() {
  return (
    <>
      <footer className="xl:mx-22.5 lg:mx-10 mx-5 flex items-center justify-between gap-12.5 flex-col lg:flex-row ">
        <div className="relative min-h-[460px] w-full rounded-[40px] lg:rounded-[50px]  bg-white space-y-14">
          <div className=" px-8 py-12 md:px-10 md:pt-10 md:pb-16">
            <p className=" text-[40px] font-bold mb-10">Solus</p>

            <div className=" flex justify-between flex-wrap gap-12 text-nowrap text-lg leading-tight mb-14">
              <ul className=" space-y-5">
                <li>
                  <a href="#">About</a>
                </li>

                <li>
                  <a href="#">Services</a>
                </li>

                <li>
                  <a href="#">Therapists</a>
                </li>

                <li>
                  <a href="#">Resources</a>
                </li>

                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>

              <ul className=" space-y-5">
                <li>
                  <a href="#">Instagram</a>
                </li>

                <li>
                  <a href="#">Facebook</a>
                </li>

                <li>
                  <a href="#">YouTube</a>
                </li>

                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>

              <ul className=" space-y-5">
                <li>
                  <a href="#">Terms of use</a>
                </li>

                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <p className=" text-[#B8B8B8] text-lg">
              © [2035] Solus. All rights reserved.
            </p>
          </div>
        </div>

        <div className="relative  min-h-[460px] w-full rounded-[40px] lg:rounded-[50px]   bg-dark-green text-white font-bold text-[44px] overflow-hidden">
          <div className="  px-8 py-12 md:px-10 md:pt-15 md:pb-16">
            <img
              src="/footer-section-img.svg"
              className=" absolute right-[-1px] top-9 w-[36%] "
            />

            <p className=" leading-tight mb-12.5">
              Find <br /> Support, <br />
              Guidance,
              <br /> and Balance.
            </p>

            <Button className=" relative z-[1] text-dark-green  bg-white w-full p-0 h-13.5 ">
              Find Support now
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}
