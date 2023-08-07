import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Wave from "react-wavify";


const Footer = () => {
    return (
        <footer>
            <Wave fill='#4f46e5'
                paused={false}
                options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3
                }}
            >
                <div className="text-gray-200">
                <div className="flex gap-4 my-4 text-2xl ">
                    <a href="https://github.com/naem0"><FaGithub></FaGithub></a>
                    <a href="https://www.linkedin.com/in/md-naem/"><FaLinkedin></FaLinkedin></a>
                    <a href="mmnayeem408@gmail.com"><FaEnvelope></FaEnvelope></a>
                </div>
                <p>Copy rigst naem 2023</p>
                </div>
                
            </Wave>
        </footer>
    );
};

export default Footer;