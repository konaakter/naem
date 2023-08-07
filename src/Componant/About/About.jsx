import profile from './../../assets/img/replicate-prediction-7kkn2ycxdnas5dsqvwajyf7pja-01-removebg-preview-removebg-preview.png'
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
    return (
        <div id='about'>
            <div className="grid md:grid-cols-2 gap-12 my-24 items-center justify-center md:justify-start">
                <div className="bg-indigo-600 pt-8 w-2/3 rounded-3xl overflow-hidden hidden md:block">
                    <img className='rounded-2xl' src={profile} alt="" />
                </div>
                <div className="text-slate-200 ">
                    <p>Motivated and dedicated Junior MERN Stack Developer with a medium label
                        foundation in JavaScript, React, CSS3, Tailwind CSS, Bootstrap, HTML5,
                        Express.js, and MongoDB. Experienced in utilizing tools such as Firebase
                        (Authentication), GitHub, Netlify, and Visual Studio Code to build and deploy web
                        applications. Currently pursuing a Diploma in Computer Engineering at Shariatpur
                        Polytechnic Institute. Eager to contribute to the development of innovative web
                        solutions.
                    </p>
                    <div className="flex justify-between my-8">
                        <div className="text-center">
                            <h2 className='text-2xl text-indigo-600 font-bold mb-2'>20+</h2>
                            <p className='font-semibold'>Partunal <br /> Project</p>
                        </div>
                        <div className="text-center">
                            <h2 className='text-2xl text-indigo-600 font-bold mb-2'>01+</h2>
                            <p className='font-semibold'>Group <br /> Project</p>
                        </div>
                        <div className="text-center">
                            <h2 className='text-2xl text-indigo-600 font-bold mb-2'>01+</h2>
                            <p className='font-semibold'>Happy <br />Client</p>
                        </div>

                    </div>
                    <button className='text-white px-4 py-2 rounded-lg bg-indigo-600 font-semibold'>Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default About;