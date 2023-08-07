import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
const Veiwsdetails = ({ uapdateInfo, isOpen, closeModal, refetch }) => {
    return (
        <div>
            <div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as='div' className='relative z-10' onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <div className='fixed inset-0 bg-black bg-opacity-25' />
                        </Transition.Child>

                        <div className='fixed inset-0 h-5/6 my-auto  overflow-y-auto'>
                            <div className='flex min-h-full items-center justify-center  text-center'>
                                <Transition.Child
                                    as={Fragment}
                                    enter='ease-out duration-300'
                                    enterFrom='opacity-0 scale-95'
                                    enterTo='opacity-100 scale-100'
                                    leave='ease-in duration-200'
                                    leaveFrom='opacity-100 scale-100'
                                    leaveTo='opacity-0 scale-95'
                                >
                                    <Dialog.Panel className='class="bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg  text-white w-full  max-w-md transform overflow-hidden border-2 
                                    border-white rounded-2xl  p-3 text-left align-middle shadow-xl transition-all'>
                                        <Dialog.Title
                                            as='h3'
                                            className='text-2xl mb-4 font-medium text-center leading-6 text-White uppercase'
                                        >
                                            {uapdateInfo.name}
                                        </Dialog.Title>
                                        <div className=' space-y-5'>
                                            <figure><img src={uapdateInfo?.photo} alt="Shoes" /></figure>


                                            <h2>{uapdateInfo.header}</h2>
                                            <p><span className=' font-bold'>Details:</span>{uapdateInfo.details}</p>
                                            <div className=' flex gap-4'>
                                                <a href={uapdateInfo.live}><button className="text-white px-4 py-2 rounded-lg bg-indigo-600 font-semibold">Live link</button></a>
                                                <a href={uapdateInfo.clint}><button className="text-white px-4 py-2 rounded-lg bg-indigo-600 font-semibold">Client code</button></a>
                                                <a href={uapdateInfo.server}><button className="text-white px-4 py-2 rounded-lg bg-indigo-600 font-semibold">Server code</button></a>
                                            </div>
                                            <p><span className=' text-white font-bold'>Technology:</span> {uapdateInfo.technology}</p>
                                        </div>









                                        <hr className='mt-8 ' />

                                        <div className='flex mt-2 justify-around'>
                                            <button
                                                type='submit'
                                                className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                                onClick={closeModal}
                                            >
                                                Cancel
                                            </button>




                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div >
    );
};

export default Veiwsdetails;