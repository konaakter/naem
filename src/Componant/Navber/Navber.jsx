import React from 'react';
import { FaHome, FaUser, FaLayerGroup, FaDharmachakra, FaComment } from 'react-icons/fa';
import { Link } from 'react-scroll'
const Navber = () => {
    return (
        <div>
            <div className=' fixed z-10  pt-5 flex   gap-x-14 ps-5 lg:ps-10 text-white '>
                <div className=' lg:flex lg:flex-col flex lg:pt-16 lg:space-y-6 space-x-6 lg:space-x-1 '>
                    <div class="tooltip">
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500}> < FaHome className='
            text-5xl shadow-2xl shadow-indigo-600 p-3 text-indigo-600'></ FaHome>
                            <span class="tooltip-text">Home</span></Link>
                    </div>
                    <div class="tooltip">
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500}> < FaUser className='
            text-5xl shadow-2xl shadow-indigo-600 p-3 text-indigo-600'></FaUser>
                            <span class="tooltip-text">About me</span></Link>
                    </div>
                    <div class="tooltip">
                        <Link to="projects" spy={true} smooth={true} offset={50} duration={500}> <FaLayerGroup className=' 
            text-5xl shadow-2xl shadow-indigo-600 p-3 text-indigo-600'></FaLayerGroup>
                            <span class="tooltip-text">Projects</span></Link>
                    </div>
                    <div class="tooltip">
                        <Link to="skill" spy={true} smooth={true} offset={50} duration={500}> <FaDharmachakra className='
            text-5xl shadow-2xl shadow-indigo-600 p-3 text-indigo-600'></FaDharmachakra>

                            <span class="tooltip-text">Skill</span></Link>
                    </div>

                    <div class="tooltip">
                        <Link to="contract" spy={true} smooth={true} offset={50} duration={500}><FaComment className='
            text-5xl shadow-2xl shadow-indigo-600 p-3 text-indigo-600'></FaComment>

                            <span class="tooltip-text">Contract</span></Link>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Navber;