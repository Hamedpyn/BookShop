import { useState } from "react";
import ComponentsTitle from "../ComponentsTitle/ComponentsTitle";

export default function BooksPreView() {
    return (
        <div className="mt-20 mb-20">
            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 172">
                <path style={{ fill: "transparent" }} d="M-3,108.5S398.468,0.5,799.951.5C1201.47,0.5,1603,108.5,1603,108.5v203H-3v-203Z"></path>
                <path style={{ fill: "transparent" }} d="M-3,137.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>
                <path style={{ fill: "#f1f2f6" }} d="M-3,164.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>
            </svg>
            <div className="bg-[#F1F2F6] flex items-center flex-col w-full justify-center">

                <div className="text-center">
                    <ComponentsTitle tag={"پر فروش ترین ها"} title={"پر فروش ترین های"} extraText={"امسال"} />
                </div>
                <div className="flex flex-col items-center mb-40 gap-16 flex-wrap md:flex-row justify-center">
            </div>
            <svg className="rotate-180" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1600 172">
                <path style={{ fill: "transparent" }} d="M-3,108.5S398.468,0.5,799.951.5C1201.47,0.5,1603,108.5,1603,108.5v203H-3v-203Z"></path>
                <path style={{ fill: "transparent" }} d="M-3,137.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>
                <path style={{ fill: "#f1f2f6" }} d="M-3,164.5s401.468-108,802.951-108c401.519,0,803.049,108,803.049,108v203H-3v-203Z"></path>
            </svg>
        </div >
    )
}
