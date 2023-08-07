import htmllogo from "./../../assets/logo/html.png";
import jslogo from "./../../assets/logo/js.png";
import csslogo from "./../../assets/logo/css.png";
import bustatraplogo from "./../../assets/logo/bustatrap.png";
import expressjs from "./../../assets/logo/expressjs.png";
import nextjs from "./../../assets/logo/nextjs.png";
import reactlogo from "./../../assets/logo/react-js-icon.png";
import tailwindlogo from "./../../assets/logo/tailwind-css-icon.png";
import nodejs from "./../../assets/logo/node.png";
import mongodblogo from "./../../assets/logo/mongodb.png";

const Skill = () => {
    return (
        <div id="skill" className="">
            <h2 className="text-gray-200 text-4xl mb-12 font-semibold">Skill</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
                <div className="bg-gradient-to-t from-[#15161A] to-[#1a1b20] shadow-black shadow-md rounded-full flex gap-2 p-1 items-center">
                    <div className="h-14 w-14 bg-white rounded-full">
                        <img className="w-2/3 m-auto my-2" src={htmllogo} alt="" />
                    </div>
                    <div className="">
                        <h5 className="font-semibold text-lg text-white">
                            HTML
                        </h5>
                        <p className="text-slate-200">Expert</p>
                    </div>
                </div>
                <div className="bg-gradient-to-t from-indigo-600 to-indigo-500 shadow-black shadow-md rounded-full flex gap-2 p-1 items-center">
                    <div className="h-14 w-14 bg-white rounded-full boder">
                        <img className="w-2/3 m-auto my-2" src={jslogo} alt="" />
                    </div>
                    <div className="">
                        <h5 className="font-semibold text-lg text-white">
                            JavaScript
                        </h5>
                        <p className="text-slate-200">Expert</p>
                    </div>
                </div>
                <div className="bg-gradient-to-t from-[#15161A] to-[#1a1b20] shadow-black shadow-md rounded-full flex gap-2 p-1 items-center">
                    <div className="h-14 w-14 bg-white rounded-full">
                        <img className="w-2/3 m-auto my-2" src={csslogo} alt="" />
                    </div>
                    <div className="">
                        <h5 className="font-semibold text-lg text-white">
                            CSS
                        </h5>
                        <p className="text-slate-200">Expert</p>
                    </div>
                </div>
                <div className="bg-gradient-to-t from-indigo-600 to-indigo-500 shadow-black shadow-md rounded-full flex gap-2 p-1 items-center">
                    <div className="h-14 w-14 bg-white rounded-full">
                        <img className="w-2/3 m-auto my-2" src={bustatraplogo} alt="" />
                    </div>
                    <div className="">
                        <h5 className="font-semibold text-lg text-white">
                        Bustatrap
                        </h5>
                        <p className="text-slate-200">Expert</p>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:w-3/4 mx-auto mt-8">
                <div className=" bg-gradient-to-t from-[#15161A] to-[#1a1b20] shadow-black shadow-md rounded-full flex gap-2 p-1 items-center">
                    <div className="h-14 w-14 bg-white rounded-full">
                        <img className="w-2/3 m-auto my-2" src={reactlogo} alt="" />
                    </div>
                    <div className="">
                        <h5 className="font-semibold text-lg text-white">
                            React Js
                        </h5>
                        <p className="text-slate-200">Expert</p>
                    </div>
                </div>
                <div className="bg-gradient-to-t from-indigo-600 to-indigo-500 shadow-black shadow-md rounded-full flex gap-2 p-1 items-center">
                    <div className="h-14 w-14 bg-white rounded-full">
                        <img className="w-2/3 m-auto my-4" src={tailwindlogo} alt="" />
                    </div>
                    <div className="">
                        <h5 className="font-semibold text-lg text-white">
                        Tailwind Css
                        </h5>
                        <p className="text-slate-200">Expert</p>
                    </div>
                </div>
                <div className="bg-gradient-to-t from-[#15161A] to-[#1a1b20] shadow-black shadow-md rounded-full flex gap-2 p-1 items-center">
                    <div className="h-14 w-14 bg-white rounded-full">
                        <img className="w-2/3 m-auto my-2" src={expressjs} alt="" />
                    </div>
                    <div className="">
                        <h5 className="font-semibold text-lg text-white">
                            Expressjs
                        </h5>
                        <p className="text-slate-200">Expert</p>
                    </div>
                </div>
                <div className="bg-gradient-to-t from-indigo-600 to-indigo-500 shadow-black shadow-md rounded-full flex gap-2 p-1 items-center md:hidden">
                    <div className="h-14 w-14 bg-white rounded-full">
                        <img className="w-2/3 m-auto my-2" src={mongodblogo} alt="" />
                    </div>
                    <div className="">
                        <h5 className="font-semibold text-lg text-white">
                            MongoDB
                        </h5>
                        <p className="text-slate-200">Expert</p>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-8 md:w-2/4 mx-auto mt-8">
                <div className="bg-gradient-to-t from-[#15161A] to-[#1a1b20] shadow-black shadow-md rounded-full flex  gap-2 p-1 items-center">
                    <div className="h-14 w-14 bg-white rounded-full">
                        <img className="w-2/3 m-auto my-3" src={nodejs} alt="" />
                    </div>
                    <div className="">
                        <h5 className="font-semibold text-lg text-white">
                           Node js
                        </h5>
                        <p className="text-slate-200">Expert</p>
                    </div>
                </div>
                <div className="bg-gradient-to-t from-indigo-600 to-indigo-500 shadow-black shadow-md rounded-full flex gap-2 p-1 items-center">
                    <div className="h-14 w-14 bg-white rounded-full">
                        <img className="w-2/3 m-auto my-2" src={nextjs} alt="" />
                    </div>
                    <div className="">
                        <h5 className="font-semibold text-lg text-white">
                            Next Js
                        </h5>
                        <p className="text-slate-200">Expert</p>
                    </div>
                </div>
            </div>
            <div className="grid gap-x-4 gap-y-8 md:w-1/4 mx-auto mt-8 sm:hidden md:block">
                <div className="bg-gradient-to-t from-[#15161A] to-[#1a1b20] shadow-black shadow-md rounded-full flex gap-2 p-1 items-center">
                    <div className="h-14 w-14 bg-white rounded-full">
                        <img className="w-2/3 m-auto my-2" src={mongodblogo} alt="" />
                    </div>
                    <div className="">
                        <h5 className="font-semibold text-lg text-white">
                            MongoDb
                        </h5>
                        <p className="text-slate-200">Expert</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Skill;