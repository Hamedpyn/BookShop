import { useState } from "react";
import ComponentsTitle from "../ComponentsTitle/ComponentsTitle";
import { authorsDetails } from "../datas/Datas";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function AuthorsInfos() {
  const [authors,] = useState(authorsDetails)
  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="">
        <ComponentsTitle tag={"نویسندگان"} title={"محبوب ترین نویسندگان"} />
      </div>
      <div className="flex flex-col-reverse max-w-[1300px] md:flex-row-reverse justify-center items-center gap-10">
        {authors.map(author => (
          <div key={author.id} className="group flex flex-col items-center gap-14">
            <div className="relative flex justify-center flex-col items-center">
              <img src={author.img} className="group-hover:opacity-50 transition-all rounded-full z-0" alt={author.img} />
              <div className="flex gap-2 absolute bottom-[-30px] z-50">
                {author.id == 1 && (
                  <>
                    <button style={{ boxShadow: "0px 16px 26px 0px rgba(0,0,0,0.1)" }} className="hover:scale-110 p-6 rounded-full bg-white transition-all">
                      <FaSkype className="text-[#00AFF0] text-2xl z-50" />
                    </button>
                    <button style={{ boxShadow: "0px 16px 26px 0px rgba(0,0,0,0.1)" }} className="hover:scale-110 p-6 rounded-full bg-white transition-all">
                      <IoLogoInstagram className="text-[#C13B96] text-2xl z-50" />
                    </button>
                  </>
                )}
                {author.id == 2 && (
                  <>
                    <button style={{ boxShadow: "0px 16px 26px 0px rgba(0,0,0,0.1)" }} className="hover:scale-110 p-6 rounded-full bg-white transition-all">
                      <IoLogoInstagram className="text-[#C13B96] text-2xl bg-white z-50" />
                    </button>
                  </>
                )}
                {author.id == 3 && (
                  <>
                    <button style={{ boxShadow: "0px 16px 26px 0px rgba(0,0,0,0.1)" }} className="hover:scale-110 p-6 rounded-full bg-white transition-all">
                      <IoLogoInstagram className="text-[#C13B96] text-2xl bg-white z-50" />
                    </button>
                    <button style={{ boxShadow: "0px 16px 26px 0px rgba(0,0,0,0.1)" }} className="hover:scale-110 p-6 rounded-full bg-white transition-all">
                      <FaFacebook className="text-[#3B5998] text-2xl bg-white z-50" />
                    </button>
                  </>
                )}
                {author.id == 4 && (
                  <>
                    <button style={{ boxShadow: "0px 16px 26px 0px rgba(0,0,0,0.1)" }} className="hover:scale-110 p-6 rounded-full bg-white transition-all">
                      <FaXTwitter className="text-black text-2xl bg-white z-50" />
                    </button>
                    <button style={{ boxShadow: "0px 16px 26px 0px rgba(0,0,0,0.1)" }} className="hover:scale-110 p-6 rounded-full bg-white transition-all">
                      <FaFacebook className="text-[#3B5998] text-2xl bg-white z-50" />
                    </button>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <span className="text-black kalameh text-3xl">{author.title}</span>
              <span className="text-[#B5B5B5]">{author.job}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
