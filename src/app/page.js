"use client";
import Chart from "@/components/chart";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [time, setTime] = useState("W");
    return (
        <main className="flex px-14 flex-col">
            <h1 className="flex gap-1 text-[#334155] text-sm my-4">
                Cryptocurriencies
                <Image src="/icon.svg" width={12} height={12} alt="arrow" />
                <span className="text-black font-medium">Bitcoin</span>
            </h1>

            {/* Main Section */}
            <section className="flex flex-row gap-5">
                {/* Section 1 - Chart */}
                <div className="bg-white md:w-9/12 w-full rounded-lg p-5">
                    <div className="flex items-center gap-2">
                        <Image src="/bit.svg" height={36} width={36} alt="" />
                        <h1 className="text-2xl font-semibold">Bitcoin</h1>
                        <h1 className="text-base text-[#5D667B] font-semibold">
                            BTC
                        </h1>
                        <h1 className="bg-[#808A9D] ml-10 flex w-20 h-10 font-medium text-base text-white text-center justify-center rounded-lg items-center">
                            Rank #1
                        </h1>
                    </div>
                    <div className="chart mt-10">
                        <div className="flex">
                            <div className="flex flex-col">
                                <h1 className="text-3xl">49,999</h1>
                                <h1 className="text-base">3,11,999</h1>
                            </div>
                            <div className="flex"></div>
                        </div>
                        <hr className="my-6"></hr>
                        <div className="flex justify-between mb-2">
                            <h1 className="font-semibold text-base text-[#0B1426]">
                                Bitcoin Price Chart (USD)
                            </h1>
                            <div className="flex flex-row text-sm font-medium text-[#5D667B] items-center">
                                <h1 className="bg-white hover:bg-[#e2ecfe] rounded-full px-2">
                                    1H
                                </h1>
                                <h1 className="bg-white hover:bg-[#e2ecfe] rounded-full px-2">
                                    24H
                                </h1>
                                <h1 className="bg-[#e2ecfe] hover:bg-[#e2ecfe] rounded-full px-2">
                                    7D
                                </h1>
                                <h1 className="bg-white hover:bg-[#e2ecfe] rounded-full px-2">
                                    1M
                                </h1>
                                <h1 className="bg-white hover:bg-[#e2ecfe] rounded-full px-2">
                                    3M
                                </h1>
                                <h1 className="bg-white hover:bg-[#e2ecfe] rounded-full px-2">
                                    6M
                                </h1>
                                <h1 className="bg-white hover:bg-[#e2ecfe] rounded-full px-2">
                                    ALL
                                </h1>
                            </div>
                        </div>
                        <div className="h-[400px] mt-10 mb-5">
                            <Chart />
                        </div>
                    </div>
                </div>
                <div className="md:w-4/12 h-min md:flex hidden">
                    <div className="bg-[#0052FE] gap-[19px] rounded-2xl px-4 py-8 text-white flex flex-col items-center text-center">
                        <h1 className="font-bold text-2xl leading-10 w-[268px]">
                            Get Started with KoinX for FREE
                        </h1>
                        <p className="text-sm mx-10 font-medium leading-6">
                            With our range of features that you can equip for
                            free, KoinX allows you to be more educated and aware
                            of your tax reports.
                        </p>
                        <Image
                            className=""
                            src="/frame1.svg"
                            height={200}
                            width={200}
                            alt=""
                        />
                        <button className="flex py-2 mb-2 px-6 text-black rounded-lg bg-white items-center font-semibold text-base gap-1">
                            Get Started for FREE
                            <Image
                                src="/Arrow - Right.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                    </div>
                    <div className=""></div>
                </div>
            </section>
        </main>
    );
}
