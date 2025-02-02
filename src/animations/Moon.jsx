import React from "react";
import { motion } from "framer-motion";

const Moon = () => {
    return (
        <motion.svg
            width="50px"
            height="50px"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            initial={{ scale: 0.5,  opacity: 0 }}
            animate={{ scale: 1,  opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <motion.circle
                cx="100"
                cy="100"
                r="94.147"
                fill="#e4e2dc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1 }}
            />

            <clipPath id="a">
                <circle cx="100" cy="100" r="94.147" />
            </clipPath>

            <g clipPath="url(#a)">
                <motion.path
                    d="M173.111-46.282l59.723 39.66 25.005 67.189-19.264 69.056-56.174 44.544-71.628 3.018-59.723-39.66-25.005-67.189L45.308 1.28l56.174-44.544 71.629-3.018z"
                    fill="#f6f4ef"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </g>

            <motion.path
                d="M158.551 135.006l-4.072 2.503 6.822 5.83 1.8-4.404-4.55-3.929zM116.907 69.037l-6.653 4.089 11.145 9.525 2.941-7.195-7.433-6.419zM67.138 119.523l-4.542 2.791 7.61 6.503 2.007-4.912-5.075-4.382zM80.286 37.068l4.825-3.028-8.193-6.873-2.097 5.268 5.465 4.633zM143.466 148.273l5.198-3.261-8.826-7.403-2.259 5.674 5.887 4.99z"
                fill="#e4e2dc"
                fillRule="nonzero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.path
                d="M163.108 73.155l2.628 13.525-12.051 6.679-10.076-9.398 5.824-12.486 13.675 1.68zM83.672 53.684l-7.194 20.408-21.332-.919-5.99-20.976 17.63-12.045 16.886 13.532zM91.359 125.589l-5.626-25.934 22.927-13.364 19.794 17.674-10.692 24.288-26.403-2.664zM35.02 112.946l-3.955-14.875 12.902-8.012 11.929 9.923-5.53 14.145-15.346-1.181zM104.602 180.886l-15.004-13.214 8.155-17.962 20.044 2.111 4.233 19.268-17.428 9.797z"
                fill="#e4e2dc"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, }}
            />
        </motion.svg>
    );
};

export default Moon;
