import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import { useState } from "react";

const SpotLight = () => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const mouseMoveHandler = ({ clientX, clientY, currentTarget }) => {
		mouseX.set(clientX - currentTarget.getBoundingClientRect().left);
		mouseY.set(clientY - currentTarget.getBoundingClientRect().top);
	};

	return (
		<div className="h-screen w-full bg-slate-950 pt-40">
			<div
				onMouseMove={mouseMoveHandler}
				className="group relative mx-auto h-96 w-96 rounded-xl bg-slate-900 ring-2 ring-gray-800"
			>
				<motion.div
					className="pointer-events-none absolute -inset-[2px] rounded-xl opacity-0 transition-all group-hover:opacity-100"
					style={{
						background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px ,rgba(129, 140, 248, 0.1)
						, transparent 90%)`,
					}}
				/>
				<div className="h-full w-full p-6">
					<h1 className="text-xl font-semibold text-gray-200">Hello there</h1>
				</div>
			</div>
		</div>
	);
};
export default SpotLight;
