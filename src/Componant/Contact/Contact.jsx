import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import bg from "./../../assets/img/pxfuel.svg";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast } from "react-toastify";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g4akcpe', 'template_w694ve6', form.current, 'ks_HvvBgXA2drgOkw')
      .then((result) => {
          console.log(result.text);
          toast("Message send successfully")
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div id="contract" className="ms-0 md:-ms-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div style={{
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: 'no-repeat',
                }} className="w-full">
                    {/* <img className="-ms-12" src={bg} alt="" /> */}
                    <div className="text-gray-200 md:ps-28 ps-12 pb-10">
                        <h2 className="font-semibold text-4xl mb-8">Contact Us</h2>
                        <div className="flex items-center gap-4 font-semibold mb-4">
                            <p className="bg-indigo-600 p-4 rounded-full"><FaLocationArrow></FaLocationArrow></p>
                            <p>Bangladesh, Shariatpur</p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold mb-4">
                            <p className="bg-indigo-600 p-4 rounded-full"><FaPhone></FaPhone></p>
                            <p>+8801310881055</p>
                        </div>
                        <div className="flex items-center gap-4 font-semibold mb-4">
                            <p className="bg-indigo-600 p-4 rounded-full"><FaEnvelope></FaEnvelope></p>
                            <p>mmnayeem408@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="md:ms-12">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="from_name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Youe name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="from_email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="message" id="massage" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                        </div>
                        <input className="text-white bg-indigo-600 py-3 rounded-2xl font-semibold w-full" type="Submit" value='Send Message'/>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;