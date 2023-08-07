// import { Tab } from "@headlessui/react";

import { useEffect, useState } from "react";
import Projectcaed from "./Projectcaed";


const Project = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setdata(data);
                ;
            });
    }, [])
    return (
        <div id="projects" className="my-20">
            <h2 className="text-gray-200 text-4xl mb-12 font-semibold">Project</h2>
            {/* <Tab.Group>
                <Tab.List className="justify-center mx-auto gap-4 flex mb-8 md:w-1/2 sm:w-2/3 lg:w-1/3 space-x-1 rounded-xl p-1">
                    <Tab className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 bg-gradient-to-t hover:from-[#15161A] hover:to-[#1a1b20] duration-5000 from-indigo-600 to-indigo-500 shadow-black shadow-md' >MERN Stack</Tab>
                    <Tab className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 bg-gradient-to-t hover:from-[#15161A] hover:to-[#1a1b20] duration-5000 from-indigo-600 to-indigo-500 shadow-black shadow-md' >Full Stact</Tab>
                    <Tab className='w-full rounded-lg py-2.5 text-sm font-medium leading-5 bg-gradient-to-t hover:from-[#15161A] hover:to-[#1a1b20] duration-5000 from-indigo-600 to-indigo-500 shadow-black shadow-md' >Front-End</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel> */}
            <div className=" gap-x-4 gap-y-6 grid  lg:grid-cols-2">

                {
                    data.map(data =>
                        <Projectcaed

                            data={data}

                        ></Projectcaed>
                    )
                }
            </div>
            {/* </Tab.Panel>
                    <Tab.Panel><p className="text-slate-200 text-2xl">No Data</p></Tab.Panel>
                    <Tab.Panel><p className="text-slate-200 text-2xl">No Data</p></Tab.Panel>
                </Tab.Panels>
            </Tab.Group> */}

        </div>

    );
};

export default Project;