import Certificat from "../ui/Certificat";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Home() {
    const cetRef = useRef(null);


        useGSAP(() => {
            gsap.to(cetRef.current, {
                x: -420,
                duration: 1
            })
        })


    // useGSAP(() => {
    //     gsap.to(cetRef.current, {
    //         x: -420,
    //         duration: 1
    //     })
    // })


    return (
        <div className="w-full h-screen flex flex-col items-center p-1 overflow-hidden">
            <h1 className="text-5xl font-bold text-gray-700 mt-16">Make your dream career a reality</h1>
            <h3 className="text-3xl font-bold text-gray-700 mt-16">Trending on Internshala</h3>
            <div className="flex items-center relative w-[83%] overflow-hidden h-72 mt-10">
                <div className="flex items-center" ref={cetRef}>
                <div className="flex items-center">
                <Certificat image={"https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png"} />
                <Certificat image={"https://internshala-uploads.internshala.com/banner-images/home_new/stt_trainings_feb25-student.png.webp"} />
                <Certificat image={"https://internshala-uploads.internshala.com/banner-images/home_new/part_time_pocket_money_feb25-student.png.webp"} />
                </div>
                <div className="flex items-center">
                <Certificat image={"https://internshala-uploads.internshala.com/banner-images/home_new/internshala_jobs-student.png.webp"} />
                </div>
                </div>
            </div>
            <div className="text-5xl font-thin flex items-center mt-16">
            <i className="ri-arrow-left-circle-line"></i>
            <div className="w-32 bg-gray-200 rounded-md h-1">
                <div className="w-[70%] bg-blue-400 h-full rounded-md"></div>
            </div>
            <i className="ri-arrow-right-circle-line text-gray-400"></i>
            </div>
        </div>
    )
}