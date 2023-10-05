import React from "react";
import styles from "../style";
import { BsFillCheckSquareFill } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className="font-sans bg-white mb-10">
      <div className="min-h-screen flex justify-center items-center">
        <div className="">
          <div className="text-center font-semibold">
            <h2
              className={`${styles.heading2} text-center text-black text-[30px] xs:text-[38px]`}
            >
              Flexible Plans
            </h2>
            <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
              Choose a plan that works best for you and your team.
            </p>
          </div>
          <div className="pt-24 flex flex-row">
            {/* Basic Card */}
            <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">Basic</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">10</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">✅</span>
                  <span className="pl-2">
                    Essential Survey{" "}
                    <span className="text-black">Features</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">✅</span>
                  <span className="pl-2">
                    Cost-Effective <span className="text-black">Solution</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">✅</span>
                  <span className="pl-2">
                    <span className="text-black">Basic Reporting</span>{" "}
                    Capabilities
                  </span>
                </p>
                <a href="#" className="">
                  <p className="w-full py-4 bg-emerald-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">
                      ➜
                    </span>
                  </p>
                </a>
              </div>
            </div>
            {/* StartUp Card */}
            <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
              <h1 className="text-white font-semibold text-2xl">Startup</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">24</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1 border-gray-600" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">✅</span>
                  <span className="pl-2">
                    All features in <span className="text-white">Basic</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">✅</span>
                  <span className="pl-2">
                    Advanced{" "}
                    <span className="text-white">Survey Customization</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">✅</span>
                  <span className="pl-2">
                    <span className="text-white">Flexible Scaling </span> for
                    Growth
                  </span>
                </p>
                <a href="#" className="">
                  <p className="w-full py-4 bg-emerald-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">
                      ➜
                    </span>
                  </p>
                </a>
              </div>
              <div className="absolute top-4 right-4">
                <p className="bg-emerald-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                  Popular
                </p>
              </div>
            </div>
            {/* Enterprise Card */}
            <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">Enterprise</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">35</span>
                <span className="text-gray-400 font-medium">/ user</span>
              </p>
              <hr className="mt-4 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">✅</span>
                  <span className="pl-2">
                    All features in <span className="text-black">Startup</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">✅</span>
                  <span className="pl-2">
                    Tailored{" "}
                    <span className="text-black">Surveys and Solutions</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">✅</span>
                  <span className="pl-2">
                    <span className="text-black">Priority </span> Support &
                    Consultation
                  </span>
                </p>
                <a href="#" className="">
                  <p className="w-full py-4 bg-emerald-600 mt-8 rounded-xl text-white">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">
                      ➜
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
