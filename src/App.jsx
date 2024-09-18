import React from "react";
import ParallaxHomePage from "./Parallax";
import "./index.css";
import data from "./data.json";
import GameCard from "./components/GameCard";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import ButtonGroup from "./components/ButtonGroup";
import Navbar from "./components/Navbar";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};

function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const cardAnimation = {
    hidden: isSmallScreen
      ? { y: "25%", opacity: 0 }
      : { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.25,
      },
    },
  };
  return (
    <div className="">
      <Navbar />
      <ParallaxHomePage />
      <div className="">
        <div className="flex justify-center ">
          <div className="flex flex-col items-center gap-5 mt-10 md:flex-row lg:gap-10 ">
            {data.gameCard.map((element) => (
              <GameCard key={element.id} data={element} />
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center px-5 ">
          <div className="w-full my-16 text-center lg:w-1/2 md:w-3/4">
            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-xl font-bold"
            >
              About Tripo
            </motion.p>
            <motion.h1
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-3 text-4xl font-bold "
            >
              Your Source for Mobile Entertainment
            </motion.h1>
            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-3 font-paraFont "
            >
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </motion.p>
            <motion.button
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="w-32 mt-4 text-white transition duration-100 ease-in-out bg-orange-700 rounded-md h-14 hover:bg-white hover:text-black hover:border"
            >
              Learn More
            </motion.button>
            <div className="mt-4 overflow-hidden rounded-md ">
              <motion.img
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                src="/images/image4.webp"
                alt=""
                className="z-0 object-cover"
              />
              <motion.img
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                src="/images/image5.webp"
                alt=""
                className="absolute w-40 h-40 bottom-6 lg:left-60 md:left-28 "
              />
            </div>
          </div>
        </div>

        <div className="w-full px-5 text-center lg:my-16 ">
          <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
            <h1 className="text-4xl font-bold ">Our Games</h1>
            <p className="mt-3 font-paraFont">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
          <div
            className="relative overflow-hidden lg:mt-20 "
            id="opacityBackground "
          >
            <img
              src="/images/image9.webp"
              alt=""
              className="md:absolute top-0 left-0 h-full lg:h-[1100px] w-full h-96  z-0 "
            />

            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-5 lg:grid-cols-2"
            >
              <div className="p-4 bg-white border rounded-lg shadow-lg card lg:w-96 md:w-[75%] text-start shadow-slate-300 md:mb-6 z-10 m-auto">
                <div className="flex items-center ">
                  <div className="overflow-hidden rounded-lg h-28 w-28">
                    <img
                      src="/images/image6.jpg"
                      alt=""
                      className="content-center object-cover"
                    />
                  </div>
                  <div className="text-start ms-3">
                    <span className="text-lg font-bold">Kipon</span>
                    <p className="">Casual - Free</p>
                  </div>
                </div>
                <div>
                  <p className="mt-4 font-paraFont">
                    I'm a paragraph. Click here to add your own text and edit
                    me. I’m a great place for you to tell a story and let your
                    users know a little more about you.
                  </p>
                </div>
                <ButtonGroup />
              </div>
              <div className="p-4 bg-white border rounded-lg shadow-lg card lg:w-96 md:w-[75%]   text-start shadow-slate-300 md:mb-6 z-10 m-auto">
                <div className="flex items-center ">
                  <div className="overflow-hidden rounded-lg h-28 w-28">
                    <img
                      src="/images/image7.jpg"
                      alt=""
                      className="content-center object-cover"
                    />
                  </div>
                  <div className="text-start ms-3">
                    <span className="text-lg font-bold">Robotrix</span>
                    <p className="">RPG-Free</p>
                  </div>
                </div>
                <div>
                  <p className="mt-4 font-paraFont">
                    I'm a paragraph. Click here to add your own text and edit
                    me. I’m a great place for you to tell a story and let your
                    users know a little more about you.
                  </p>
                </div>
                <ButtonGroup />
              </div>
            </motion.div>

            <motion.div
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid items-center grid-cols-1 mt-5 mb-5 md:mb-0 lg:grid-cols-2 lg:mt-60"
            >
              <div className="p-4 bg-white border rounded-lg shadow-lg card lg:w-96 md:w-[75%]   text-start shadow-slate-300 md:mb-6 z-10 m-auto">
                <div className="flex items-center ">
                  <div className="overflow-hidden rounded-lg h-28 w-28">
                    <img
                      src="/images/image8.jpg"
                      alt=""
                      className="content-center object-cover"
                    />
                  </div>
                  <div className="text-start ms-3">
                    <span className="text-lg font-bold">Teasure Box</span>
                    <p className="">Adventure-Free</p>
                  </div>
                </div>
                <div>
                  <p className="mt-4 font-paraFont">
                    I'm a paragraph. Click here to add your own text and edit
                    me. I’m a great place for you to tell a story and let your
                    users know a little more about you.
                  </p>
                </div>
                <ButtonGroup />
              </div>
              <div className="relative hidden lg:block">
                <img
                  src="/images/image10.webp"
                  alt=""
                  className="z-10 m-auto h-60"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <section className="relative  text-4xl text-white lg:h-[90vh] md:h-[60vh]  h-screen md:p-10 lg:p-20 ">
          <img
            src="/images/image11.webp"
            alt=""
            className="absolute top-0 left-0 z-0 object-cover w-full h-full "
          />
          <div className="relative w-full text-center md:w-2/3 lg:text-start ">
            <p className="text-lg font-bold ">Join Our Team</p>
            <p className="mt-4 text-3xl font-bold lg:text-5xl">
              It takes the world's best talent to change the game.
            </p>
            <button className="p-3 mt-6 text-lg text-black transition duration-100 ease-in-out bg-yellow-300 rounded-md hover:bg-white hover:border">
              Explore Careers
            </button>
          </div>
          <motion.img
            src="/images/image12.webp"
            alt=""
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute bottom-0 h-40 lg:h-80 right-10 "
          />
        </section>
        <section className="py-3">
          <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden mt-4">
            <div className="absolute w-20 h-20 bg-blue-400 rounded-full -bottom-6 -left-6"></div>
            <div className="absolute w-20 h-20 bg-blue-400 rounded-full -top-6 -right-6"></div>

            <div className="grid gap-8 px-6 py-8 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="https://readymadeui.com/signin-image.webp"
                  className="w-5/6 shrink-0"
                />
              </div>

              <form className="rounded-tl-3xl rounded-bl-3xl">
                <h2 className="mb-6 text-2xl font-bold text-center text-blue-600">
                  Contact us
                </h2>
                <div className="relative max-w-md mx-auto space-y-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md outline-blue-600 focus-within:bg-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md outline-blue-600 focus-within:bg-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Phone No."
                    className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md outline-blue-600 focus-within:bg-transparent"
                  />
                  <textarea
                    placeholder="Message"
                    rows="6"
                    className="w-full px-4 pt-3 text-sm bg-gray-100 rounded-md outline-blue-600 focus-within:bg-transparent"
                  ></textarea>

                  <button
                    type="button"
                    className="text-white w-full relative bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-6 py-3 !mt-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="#fff"
                      className="inline mr-2"
                      viewBox="0 0 548.244 548.244"
                    >
                      <path
                        fillRule="evenodd"
                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
