"use client"

import { useForm } from 'react-hook-form';
import { BsTelephone, BsWechat } from "react-icons/bs";
import { FaSpinner } from 'react-icons/fa';
import useFormSpree from "../hooks/useFormSpree";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUs = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const { state, handleSubmit: handleFormSpreeSubmit, resetSpreeState } = useFormSpree('mwkdakqy');

  const handleSendMessage = async (data: FormValues) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    const success = await handleFormSpreeSubmit(formData);
    if (success) reset();
  }

  return (
    <div className="bg-gray-300 min-h-screen w-full h-full">
      <div className="max-w-[1440px] mx-auto w-full mt-[78px] min-h-screen">
        <div className="relative  bg-contact-bg-pattern bg-cover h-96 w-full flex items-center justify-center ">
          <div className=" w-full flex items-center justify-center">
            <div className="bg-black/50 absolute h-full top-0 inset-x-0  py-[40px] flex flex-col max-w-full  items-center justify-center ">
              <h1 className="text-center test-white font-[700] text-white text-[30px]">
              Contact Us – Undugu Mentorship Program
              </h1>
              <p className="text-[19px] font-[500px] text-white brightness-150 w-full md:w-[500px] max-w-96 text-center">
              Are you interested in joining the Undugu Mentorship Program as a mentee, mentor or a donar? Our team is here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-50 w-full h-auto  items-center justify-start">
          <div className="flex flex-col xl:flex-row gap-6 w-full lg:w-[65vw] -mt-[60px] z-[999] h-auto bg-white rounded-md p-[20px]">
            <div className="flex flex-col md:flex-row xl:flex-col w-full xl:w-96 gap-5 ">
              <div className=" bg-white w-full xl:min-w-64 flex gap-6 items-start px-[30px] py-5 cursor-pointer rounded-md shadow-md  ">
                <span className="h-12 w-12 flex items-center justify-center rounded-full border border-text">
                  <BsTelephone className="h-7 w-7 text-text" />
                </span>
                <div className="flex-1 flex flex-col  items-start">
                  <p className="text-[16px] text-gray-500 leading-4">
                    Call us directly at:
                  </p>
                  <p className="text-[18px] text-[#ffa500] mt-1 font-[600]">
                    +254 70399875673
                  </p>
                  <span className="text-sm text-text leading-2 pt-0 mt-0 text-center ml-10 mb-0">
                    Or
                  </span>
                  <p className="text-[18px] text-[#ffa500] font-[600]">
                    +254 70399875673
                  </p>
                </div>
              </div>
              <div className=" bg-white w-full xl:min-w-64 flex gap-6 items-start px-[30px] py-8 cursor-pointer rounded-md shadow-md  ">
                <span className="h-12 w-12 flex items-center justify-center rounded-full border border-text">
                  <BsWechat className="h-7 w-7 text-text" />
                </span>
                <div className="flex-1 flex flex-col  items-start mt-2">
                  <p className="text-[16px] text-gray-500 leading-4">
                    Chat with our team lead
                  </p>
                  <button className="mt-3 bg-[#ffa500] py-[8px] px-[20px] text-white rounded-md cursor-pointer">
                    <a target="_blank" href="https://wa.me/254704093039?text=hi,there">
                      Chat with us
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col w-full items-center bg-white rounded-md shadow-md">
              <div className="flex flex-col w-full items-start justify-start px-[10px] ">
                <h2 className="text-center text-[24px] py-1 font-[700px] capitalize text-[#ffa500] mx-auto">
                  Send Us A Message
                </h2>
                <div className="flex flex-col">
                  <p className="text-start text-[16px] text-gray-500">
                    We would love to respond to your queries or just hear from
                    you.
                  </p>
                  <p className="text-start text-[16px] text-gray-500">
                    Feel free to get in touch with us.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(handleSendMessage)}
                  autoComplete="off"
                  className=' w-full'
                >
                  {state?.message && state.errored && (
                    <div className="my-4 bg-red-300 py-2 text-center text-red-700">
                      <p>{state?.message}</p>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 my-[30px] w-full ">
                    <div className="flex flex-col ">
                      <label className="text-[#ffa500]">Name</label>
                      <input
                        type="text"
                        className={`mt-1 rounded-md outline-none border  focus:outline-none focus:border-0 focus:ring-[#ffa500] ${errors?.name ? "border-red-400" : "border-[#ffa500]"}`}
                        placeholder="Enter your Name"
                        {...register('name', {
                          required: {
                            value: true,
                            message: 'Name is required',
                          },
                        })}
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label className="text-[#ffa500]">Email</label>
                      <input
                        type="text"
                        className={`mt-1 rounded-md outline-none border focus:outline-none focus:border-0 focus:ring-[#ffa500] ${errors?.email ? "border-red-400" : "border-[#ffa500]"}`}
                        placeholder="Enter your Email"
                        {...register('email', {
                          required: {
                            value: true,
                            message: 'Email is required',
                          },
                        })}
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label className="text-[#ffa500]">Subject</label>
                      <input
                        type="text"
                        className={`mt-1 rounded-md outline-none border focus:outline-none focus:border-0 focus:ring-[#ffa500] ${errors?.subject ? "border-red-400" : "border-[#ffa500]"}`}
                        placeholder="Enter the subject"
                        {...register('subject', {
                          required: {
                            value: true,
                            message: 'Subject is required',
                          },
                        })}
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label className="text-[#ffa500]">Message</label>
                      <textarea
                        className={`mt-1 rounded-md outline-none border focus:outline-none focus:border-0 focus:ring-[#ffa500] ${errors?.message ? "border-red-400" : "border-[#ffa500]"}`}
                        rows={3}
                        {...register('message', {
                          required: {
                            value: true,
                            message: 'Message is required',
                          },
                        })}
                      ></textarea>
                    </div>
                  </div>
                  {(state.message && state.succeeded) ? (
                    <div className="my-4 bg-green-200 py-6 text-center rounded-md text-green-700">
                      <p>{state.message}</p>

                      <button
                        onClick={resetSpreeState}
                        type='submit'
                        className="mt-3 rounded-lg bg-[#ffa500] px-4 py-2 text-sm text-white"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <div className="my-5 flex justify-center">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="cursor-pointer border-0 bg-[#ffa500] px-10 py-2 rounded-full text-white outline-none ring-1 ring-accent focus:border-0 focus:outline-none disabled:cursor-not-allowed disabled:bg-opacity-75"
                      >
                        {state.submitting ? (
                          <FaSpinner className="animate-spin" />
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
