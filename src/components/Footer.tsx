import React from "react";
import { Kanit } from 'next/font/google'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import styles from '../styles/footer.module.css'
import { Divider } from "@nextui-org/react";
import Image from "next/image";

const kanit = Kanit({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700','800','900','100', '200', '300'],
    display: 'swap',
})

// <input type="text"  placeholder="Name" className="py-3 pl-2 font-semibold border-2 border-amber-900 rounded-xl"/>
const Footer: React.FC = () => {
    return (
       <footer className= {`w-full ${styles.footer_bg} ${styles.textcolor} ${kanit.className} py-14`}>
            <div className="w-7/12 m-auto flex justify-between items-center flex-wrap">
                <div className="flex gap-x-2 ml-10">
                    <a href="https://x.com/?lang=vi" title="x"><FaTwitter className="text-white bg-black p-2 rounded-full w-10 h-10 "/></a>
                    <a href="https://www.facebook.com/" title="fb"><FaFacebookF className="text-white bg-black p-2 rounded-full w-10 h-10"/></a>
                    <a href="https://www.instagram.com/" title="ins"><FaInstagram className="text-white bg-black p-2 rounded-full w-10 h-10"/></a>
                </div>
                <div>
                    <Image width={180} height={100} src="/img/footer/logo.png" alt="" className="ml-10"/>
                </div>
                <div className="relative h-36">
                    <p className="text-lg font-light">SIGN UP FOR OUR EMAIL NEWSLETTER</p>
                    <form action="">
                        <input type="text"  placeholder="Name" className={`w-36 placeholder-gray-800 py-3 px-2 font-semibold  border-amber-900  ${styles.input_bg_img}  ${styles.inputph}`}/>
                        <input type="text"  placeholder="Email Address" className={`w-36 placeholder-gray-800 py-3 px-2 font-semibold  border-amber-900 ${styles.input_bg_img} ${styles.inputph}`}/>
                        <button type="submit" className={`border py-1 px-4 ${styles.border_color} absolute bottom-3 right-4 hover:bg-amber-50 hover:border-2`}>GO</button>
                    </form>
                </div>
            </div>
            <div className= {`w-8/12 m-auto border mt-10 ${styles.border_color} py-8 `}>
                <div className="flex h-5 items-center space-x-8 text-xl justify-center">
                    <div>Vietnam</div>
                    <Divider orientation="vertical" className="bg-amber-950"/>
                    <div>Ha Noi</div>
                    <Divider orientation="vertical" className="bg-amber-950"/>
                    <div>dreamlabour@dreamlabour.com</div>
                    <Divider orientation="vertical" className="bg-amber-950"/>
                    <div>+84 948196260</div>
                </div>
            </div>
       </footer>
    )
}

export default Footer;
