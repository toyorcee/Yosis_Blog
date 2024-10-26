import React from "react";
import { Button } from "flowbite-react";
import { motion } from "framer-motion";

const leftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const rightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <motion.div
        className="flex-1 justify-center flex flex-col"
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }} 
        variants={leftVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with 100 JavaScript Projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 JavaScript Projects
          </a>
        </Button>
      </motion.div>
      <motion.div
        className="p-7 flex-1"
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }} 
        variants={rightVariants}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
          alt="JavaScript Resources"
        />
      </motion.div>
    </div>
  );
}
