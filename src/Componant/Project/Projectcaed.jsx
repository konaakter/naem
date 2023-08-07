import React, { useState } from 'react';
import Veiwsdetails from './Veiwsdetails';

const Projectcaed = ({data}) => {
    const [uapdateInfo, setuapdateInfo] = useState({
        name: data.name,
        photo: data.photo,
        header: data.header,
        technology: data.technology,
        details: data.details,
        clint: data.clint,
        server: data.server,
        live: data.live
    })

    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <div>
            <div onClick={() => setIsOpen(true)} className="bg-gradient-to-t from-[#15161A] to-[#26272e] shadow-black shadow-md  p-2 rounded-3xl">
                <div className="">
                    <img className="rounded-2xl w-full" src={data.photo} alt="" />

                </div>
                <div className="text-slate-300 p-4 pb-2">
                    <h5 className="font-semibold text-lg">{data.name}</h5>
                    <p className="text-sm">MERN Stack Project</p>
                </div>
            </div>
            <Veiwsdetails

                uapdateInfo={uapdateInfo}
                isOpen={isOpen}
                closeModal={closeModal}

            ></Veiwsdetails>
        </div>
    );
};

export default Projectcaed;