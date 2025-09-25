import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Button from "../components/Button";

export default function ContactUs() {
  return (
    <>
      <section className="xl:xl:px-22.5 lg:px-10 px-5 mb-20 md:mb-30 ">
        <div className="space-y-5 text-center mb-20">
          <p className=" text-sm font-medium">Get in Touch</p>
          <p className="font-bold  text-[clamp(34px,5vw,52px)] leading-tight">
            We’re Here to <br /> Support You
          </p>
          <p className="text-[clamp(16px,2.3vw,22px)]">
            Whether you have questions, need help getting{" "}
            <br className=" hidden md:flex" /> started, or want to learn more —
            reach out anytime.
          </p>
        </div>

        <div className=" bg-white rounded-[50px] lg:rounded-[60px] px-8 py-12 md:p-17.5 min-h-156.75 flex flex-wrap flex-col md:flex-row justify-between gap-15 md:gap-19.5">
          <div className=" flex-1 flex flex-col gap-12 md:gap-14 justify-between">
            <div>
              <p className=" text-[30px] font-semibold mb-8 md:mb-11.5">
                Contact Details:
              </p>
              <div className=" space-y-3.75 mb-6 md:mb-10">
                <p>
                  <span className=" font-bold">Email:</span> support@solus.com
                </p>

                <p>
                  <span className=" font-bold">Phone:</span> +1 (123) 456-7890
                </p>

                <p>
                  <span className=" font-bold">Address:</span> 123 Wellness Way,
                  Calm City, CA 90210
                </p>
              </div>

              <div className=" flex items-center gap-5">
                <FaLinkedin className=" text-[28px]" />
                <FaFacebook className=" text-[28px]" />
                <FaInstagram className=" text-[28px]" />
                <FaWhatsapp className=" text-[28px]" />
              </div>
            </div>
            <p className=" text-xl">We typically respond within 12 hours.</p>
          </div>

          <div className=" flex-1 min-w-auto sm:min-w-[350px]">
            <p className=" text-[30px] font-semibold mb-9 md:mb-12.5">
              Send Us a Message
            </p>
            <form className=" bg-[#FDF7F1] rounded-[40px] md:rounded-[50px] w-full min-h-100 px-8 py-12 md:px-12.5 md:pt-11.25 md:pb-15 space-y-13.5">
              <div className="flex flex-col gap-1.25 ">
                <label className="text-xl">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className=" placeholder:text-xl placeholder:text-[#00373e33] border-b border-dark-green pb-1.25 w-full outline-none "
                />
              </div>

              <div className="flex flex-col gap-1.25 ">
                <label className="text-xl">Message</label>
                <input
                  type="text"
                  placeholder="Message"
                  className=" placeholder:text-xl placeholder:text-[#00373e33] border-b border-dark-green pb-1.25 w-full outline-none "
                />
              </div>

              <Button className=" bg-dark-green w-full h-13.5 p-0">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
