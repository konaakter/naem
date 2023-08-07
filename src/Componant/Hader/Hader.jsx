
import { FaArrowDown, FaDownload, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiMouseLine } from 'react-icons/ri';
import profile from './../../assets/img/replicate-prediction-7kkn2ycxdnas5dsqvwajyf7pja-01-removebg-preview-removebg-preview.png'
import resume from "./../../assets/img/naem.pdf";

const Hader = () => {
    return (
        <div id='home' className="grid md:grid-cols-2 gap-12 my-24 align-center">
            <div className="text-slate-300">
                <h1 className="text-4xl font-bold">Hi, I'm MD Naem</h1>
                <p className="text-lg font-semibold my-2">MERN Stack Developer</p>
                <div className="flex gap-4 my-4 text-2xl text-indigo-600">
                    <a href="https://github.com/naem0"><FaGithub></FaGithub></a>
                    <a href="https://www.linkedin.com/in/md-naem/"><FaLinkedin></FaLinkedin></a>
                    <a href="mmnayeem408@gmail.com"><FaEnvelope></FaEnvelope></a>
                </div>
                <button className="text-white px-4 py-2 rounded-lg bg-indigo-600 font-semibold">Contact Me</button>
                <a href={resume} download='Resume' className="text-white px-4 py-2 rounded-lg bg-indigo-600 font-semibold ms-8 inline-flex gap-2"><samp>Resume</samp> <FaDownload></FaDownload></a>
                <div className="flex align-center gap-1 mt-20 ">
                    <p className="my-auto text-indigo-600 text-lg font-bold"><RiMouseLine></RiMouseLine></p>
                    <p className="font-semibold">Scroll down </p>
                    <p className="my-auto text-indigo-600 font-light"><FaArrowDown></FaArrowDown> </p>
                </div>
            </div>
            <div className="mx-auto w-60 h-64 box overflow-hidden ">
            <img className='' src={profile} alt="" />
        </div>
        </div >
    );
};

export default Hader;