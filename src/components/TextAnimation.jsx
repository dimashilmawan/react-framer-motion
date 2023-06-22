import { motion, stagger, useInView } from "framer-motion";
import { useRef } from "react";

const DUMMY_TEXT = "Hello There!";

const TextAnimation = () => {
	return (
		<div className="">
			<section className="h-screen w-full bg-gray-600" />
			<section className="h-screen bg-red-500 pt-44">
				<motion.h1
					whileInView={"show"}
					initial={"hidden"}
					viewport={{ once: true, amount: 0.8 }}
					transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
					className="text-center text-6xl font-semibold text-gray-200"
				>
					{DUMMY_TEXT.split("").map((letter, i) => (
						<motion.span
							className="inline-block"
							variants={{
								hidden: { opacity: 0, y: 0 },
								show: {
									opacity: 1,
									y: [-0, -10, 10, 0],
									transition: {
										duration: 0.7,
									},
								},
							}}
							key={i}
						>
							{letter === " " ? "\u00A0" : letter}
						</motion.span>
					))}
				</motion.h1>
			</section>
		</div>
	);
};
export default TextAnimation;
