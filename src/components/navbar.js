"use client";
import Image from "next/image";
import Hamburger from "hamburger-react";
export default function Navbar() {
    return (
        <div className="bg-white shadow-sm flex h-[78px] items-center justify-between px-5 md:px-[60px] md:py-[4]">
            <div className="">
                <Image src="/logo.svg" height={24} width={96} alt="logo.svg" />
            </div>
            <div className="md:flex hidden gap-5 items-center text-[#0F1629] font-semibold">
                <h1 className="text-[16px]">Crypto Taxes</h1>
                <h1 className="font-[16px]">Free Tools</h1>
                <h1 className="font-[16px]">Resource Center</h1>
                <button className="bg-gradient-to-tr ml-3 from-[#2870EA] py-[8px] px-[20px] rounded-[8px] to-[#1B4AEF] text-white">
                    Get Started
                </button>
            </div>
            <div className="flex md:hidden">
                <Hamburger size={20} />
            </div>
        </div>
    );
}
