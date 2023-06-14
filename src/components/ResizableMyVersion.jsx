import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
////////////////////////////////////////////////////////////
// RESIZABLE PANEL WITH LAYOUT AND ANIMATEPRESENCE
// ///////////////////////////////////////////////////
const ResizableMyVersion = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="min-h-screen w-full bg-orange-900 pt-44 text-gray-800">
			<motion.div
				onClick={() => setIsOpen(!isOpen)}
				layout
				transition={{
					layout: {
						duration: 0.6,
						type: "spring",
					},
				}}
				className="relative mx-auto w-80 overflow-hidden  bg-gray-200/70 p-6 backdrop-blur-sm"
				// use style prop to style border radiud and box shadow if animating layout
				style={{ borderRadius: 10 }}
			>
				<motion.h2
					layout
					className="rounded-fulltext-xl relative z-10 font-semibold uppercase text-gray-900"
				>
					Hello There !
				</motion.h2>
				{/* ======================================================================= */}
				{/* animatepresence MODE "poplayout" is the best for animating with layout */}
				{/* It's OKAY if we toggle to fast and there is exit animation*/}
				{/* as long AnimarePresence in short circuit like bellow (not TERNARY)*/}
				{/* ======================================================================= */}
				<AnimatePresence mode="popLayout">
					{isOpen && (
						<motion.div
							layout
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: { delay: 0.1 },
							}}
							exit={{ opacity: 0 }}
							className="mt-4 space-y-3"
						>
							<p className="text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
								assumenda iste, quia pariatur ducimus, modi ipsam sint accusamus
								asperiores fugiat officia sequi necessitatibus voluptatibus
							</p>
							<p>Lorem ipsum dolor sit amet consectetur.</p>
						</motion.div>
					)}
				</AnimatePresence>
				{/* ======================================================================= */}
				{/* animatepresence MODE "poplayout" is the best for animating with layout */}
				{/* if we toggle to fast and there is exit animation, it make a BUG*/}
				{/* Dont use exit animation in AnimarePresence TERNARY like bellow*/}
				{/* ======================================================================= */}
				{/* <AnimatePresence mode="popLayout" initial={false}>
					<motion.p
						key={isOpen}
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
							transition: { delay: 0.2 },
						}}
						// exit make BUG with double children if we toggle to fast
						// exit={{ x: -150, opacity: 0 }}
						// transition={{ duration: 1 }}
						// layout="size"
						// layout="position"
						layout
						className="mt-4 space-y-3"
					>
						{isOpen
							? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
							: "	Something Stupid like i love you"}
					</motion.p>
				</AnimatePresence> */}
				{/* ===================================================================== */}
			</motion.div>
		</div>
	);
};
export default ResizableMyVersion;
