import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-muted-900 lg:mt-20 md:mt-10 mt-5 text-white">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-4 pb-4 gap-8 min-h-[400px] pt-10">
        <div className="flex flex-col gap-4">
          <div className=" text-xxxl font-bold">
            <a href="/">
              <span className="text-green-500 ">Snow</span>veil
              <p className="text-[14px] ">Adventures Kashmir</p>
            </a>
          </div>

          <h2 className="text-xl font-bold mb-4 text-white font-modicaMedium">
            Want to Take Tour Packages?
          </h2>
          <button className="max-w-[150px] bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-md lg:text-md md:text-sm text-xs transition duration-300 font-bold">
            Book A Trip
          </button>
        </div>

        <div className=" ">
          <h3 className="text-[20px] font-semibold ">Quick Links</h3>
          <div className="flex flex-col gap-4 py-4">
            <a href="/about">
              <span className=" transition  duration-300  hover:text-green-500 text-md">
                About
              </span>
            </a>
            <a href="/packages">
              <span className=" transition  duration-300  hover:text-green-500 text-md">
                Packages
              </span>
            </a>
            <a href="/activities">
              <span className=" transition  duration-300  hover:text-green-500 text-md">
                Activities
              </span>
            </a>
            <a href="/contactus">
              <span className=" transition  duration-300  hover:text-green-500 text-md">
                Contact Us
              </span>
            </a>
          </div>
        </div>

        <div className="">
          <h3 className="text-[20px] font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-5 pt-5">
            <div className="flex gap-4 items-center">
              <PhoneCall size={25} className="text-yellow-500" />
              <div>
                <a href="/">
                  <p className="text-md">+916006089901</p>
                </a>
                <a href="/">
                  <p className="text-md">+916005252876</p>
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <MessageCircle size={25} className="text-yellow-500" />
              <div>
                <a href="/">
                  <p className="text-md">+916006089901</p>
                </a>
                <a href="/">
                  <p className="text-md">+916005252876</p>
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Mail size={25} className="text-yellow-500" />
              <div>
                <a href="/">
                  <p className="text-md ">snowveiladventures@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <MapPin size={40} className="text-yellow-500" />
              <div>
                <p className="text-md">
                  Reshi Complex, Nambalnar Tangmarg Baramulla - 193402
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-5 ">
          <h3 className="text-[20px] font-semibold">Follow Us</h3>
          <div className="flex gap-5 cursor-pointer">
            <Instagram className=" transtion  duration-300 hover:-translate-y-1 hover:text-green-500" />
            <Facebook className=" transtion  duration-300 hover:-translate-y-1 hover:text-green-500" />
            <Twitter className=" transtion  duration-300 hover:-translate-y-1 hover:text-green-500" />
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto pb-10">
        <hr className="border-gray" />
        <p className="text-center pt-4 text-md">
          Copyright &copy; <span className="text-green-500 ">Snow</span>Veil
          2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
