import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/

// use this function if using children for key in motion component
// const ignoreCircularReferences = () => {
// 	const seen = new WeakSet();
// 	return (key, value) => {
// 		if (key.startsWith("_")) return; // Don't compare React's internal props.
// 		if (typeof value === "object" && value !== null) {
// 			if (seen.has(value)) return;
// 			seen.add(value);
// 		}
// 		return value;
// 	};
// };

const duration = 0.4;
// ///////////////////////////////////////////////////////////////
// VERSION 1 useMeasure HEIGHT WITH AnimatePresence MODE WAIT with OPACITY EFFECT
// Work best with mode WAIT in animatepresence
// There is a bug using ANIMATEPRESENCE MODE WAIT whene toggle to fast.
// fix with duration on exit with 0.1 s / dont use exit animation
////////////////////////////////////////////////////////////////////////
// const ResizeablePanel = ({ children, id }) => {
// 	const [ref, { height }] = useMeasure();
// 	return (
// 		<motion.div
// 			animate={{ height: height || "auto" }}
// 			className="mt-6 overflow-hidden"
// 		>
// 			<AnimatePresence mode="wait" initial={false}>
// 				<motion.div
// 					// key={JSON.stringify(children, ignoreCircularReferences())}
// 					key={id}
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1, transition: { delay: duration / 5 } }}
// 					// exit={{
// 					// 	opacity: 0,
// 					// 	// transition: { duration: duration / 4 },
// 					// }}
// 					ref={ref}
// 					// className="p-4"
// 				>
// 					{children}
// 				</motion.div>
// 			</AnimatePresence>
// 		</motion.div>
// 	);
// };

// /////////////////////////////////////////////////////////////////////////
// VERSION 1 useMeasure HEIGHT WITH AnimatePresence MODE WAIT with CAROUSEL EFFECT
// Work best with mode WAIT in animatepresence
// There is a bug using ANIMATEPRESENCE MODE WAIT whene toggle to fast.
// fix with duration on exit with 0.1 s / dont use exit animation
////////////////////////////////////////////////////////////////////////
// const ResizeablePanel = ({ children, id }) => {
// 	const [ref, { height }] = useMeasure();
// 	return (
// 		<motion.div
// 			animate={{ height: height || "auto" }}
// 			className="mt-6 overflow-hidden"
// 		>
// 			<AnimatePresence mode="wait" initial={false}>
// 				<motion.div
// 					// key={JSON.stringify(children, ignoreCircularReferences())}
// 					key={id}
// 					initial={{ x: "100%" }}
// 					animate={{ x: 0, transition: { delay: duration / 5 } }}
// 					// exit={{
// 					// 	x: "-100%",
// 					// 	// transition: { duration: duration / 4 },
// 					// }}
// 					ref={ref}
// 					// className="p-4"
// 				>
// 					{children}
// 				</motion.div>
// 			</AnimatePresence>
// 		</motion.div>
// 	);
// };

// ///////////////////////////////////////////////////////////////////////
// VERSION 2 useMeasure HEIGHT WITH ABSOLUTE | OPACITY EFFECT & BEST VERSION without BUG
// animatepresence mode sync is the best for absolute version,
// if mode wait and there is exit animate, it make a bug if we toggle to fast
////////////////////////////////////////////////////////////////////////
// const ResizeablePanel = ({ children, id }) => {
// 	const [ref, { height }] = useMeasure();
// 	return (
// 		<motion.div
// 			// initial={{ height: 100 }}
// 			animate={{ height: height || "auto" }}
// 			className="relative mt-6 overflow-hidden "
// 		>
// 			<AnimatePresence mode="sync" initial={false}>
// 				<motion.div
// 					// key={JSON.stringify(children, ignoreCircularReferences())}
// 					key={id}
// 					initial={{ opacity: 0 }}
// 					animate={{
// 						opacity: 1,
// 						transition: { delay: duration / 2 },
// 					}}
// 					exit={{
// 						opacity: 0,
// 					}}
// 					ref={ref}
// 					className={`${height ? "absolute" : "relative"} w-full`}
// 				>
// 					{children}
// 				</motion.div>
// 			</AnimatePresence>
// 		</motion.div>
// 	);
// };

// ////////////////////////////////////////////////////////////////////
// VERSION 2 useMeasure HEIGHT WITH ABSOLUTE | Carousel EFFECT with x
// animatepresence mode sync is the best for absolute version,
// if mode wait and there is exit animate, it make a bug if we toggle to fast
////////////////////////////////////////////////////////////////////////
// const ResizeablePanel = ({ children, id }) => {
// 	const [ref, { height }] = useMeasure();
// 	return (
// 		<motion.div
// 			animate={{ height: height || "auto" }}
// 			className="relative mt-6 overflow-hidden"
// 		>
// 			<AnimatePresence initial={false}>
// 				<motion.div
// 					// key={JSON.stringify(children, ignoreCircularReferences())}
// 					key={id}
// 					initial={{ x: "100%", opacity: 0 }}
// 					animate={{
// 						x: 0,
// 						opacity: 1,
// 						transition: { duration: duration / 2, delay: duration / 2.5 },
// 					}}
// 					exit={{
// 						x: "-100%",
// 						opacity: 0,
// 						transition: { duration: duration / 2 },
// 					}}
// 					ref={ref}
// 					className={`${height ? "absolute" : "relative"} w-full `}
// 				>
// 					{children}
// 				</motion.div>
// 			</AnimatePresence>
// 		</motion.div>
// 	);
// };

const Resizable = () => {
	const [foo, setFoo] = useState(false);
	const [expanded, setExpanded] = useState(false);

	return (
		<MotionConfig transition={{ duration: duration }}>
			<div className=" min-h-screen w-full bg-emerald-900 pt-28 text-gray-100">
				<div className="mx-auto w-80 overflow-hidden rounded-xl p-6 ring-2 ring-emerald-500">
					<h1 className="text-xl font-bold">Hello There</h1>
					<div className="mt-8  flex items-center justify-between">
						<button
							className="rounded-md px-4 py-2 font-semibold uppercase ring-1 ring-emerald-500"
							onClick={() => setExpanded(prev => !prev)}
						>
							Toggle
						</button>
						<button
							className="rounded-md px-4 py-2 font-semibold uppercase ring-1 ring-emerald-500"
							onClick={() => setFoo(prev => !prev)}
						>
							Rerender {foo ? "Y" : "N"}
						</button>
					</div>
					<ResizeablePanel id={expanded}>
						{expanded ? (
							//<p className="bg-yellow-400">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
								adipisci. Lorem ipsum dolor sit amet.
							</p>
						) : (
							// <p className="bg-yellow-400">Something Short!</p>
							<p>Something Stupid Like i Love you!</p>
						)}
					</ResizeablePanel>
				</div>
			</div>
		</MotionConfig>
	);
};
export default Resizable;

// //////////////////////////////////////////////////////////////////////////////////
// const Resizable = () => {
// 	const [foo, setFoo] = useState(false);
// 	const [expanded, setExpanded] = useState(false);
// 	console.log(expanded);

// 	return (
// 		<MotionConfig transition={{ duration: 0.4 }}>
// 			<div className="min-h-screen w-full bg-emerald-900 pt-40 text-gray-100">
// 				<div className="mx-auto w-80 overflow-hidden rounded-xl p-6 ring-2 ring-emerald-500">
// 					<h1 className="text-xl font-bold">Hello There</h1>
// 					<div className="mt-8  flex items-center justify-between">
// 						<button
// 							className="rounded-md px-4 py-2 font-semibold uppercase ring-1 ring-emerald-500"
// 							onClick={() => setExpanded(prev => !prev)}
// 						>
// 							Toggle
// 						</button>
// 						<button
// 							className="rounded-md px-4 py-2 font-semibold uppercase ring-1 ring-emerald-500"
// 							onClick={() => setFoo(prev => !prev)}
// 						>
// 							Rerender {foo ? "Y" : "N"}
// 						</button>
// 					</div>
// 					{/* <AnimatePresence mode="wait" initial={false}>
// 						<motion.div
// 							key={expanded}
// 							initial={{ opacity: 0 }}
// 							animate={{ opacity: 1 }}
// 							exit={{ opacity: 0 }}
// 							className="mt-6"
// 						>
// 							{expanded ? (
// 								<p>
// 									Lorem ipsum dolor sit amet consectetur adipisicing elit.
// 									Velit, adipisci.
// 								</p>
// 							) : (
// 								<p>Something Short!</p>
// 							)}
// 						</motion.div>
// 					</AnimatePresence> */}
// 					{/* ---------------------------------------------------------------- */}
// 					{/* <AnimatePresence initial={false} mode="wait">
// 						{expanded ? (
// 							<motion.div
// 								key="first"
// 								initial={{ opacity: 0 }}
// 								animate={{ opacity: 1 }}
// 								exit={{ opacity: 0 }}
// 								className="mt-6"
// 							>
// 								<p>
// 									Lorem ipsum dolor sit amet consectetur adipisicing elit.
// 									Velit, adipisci.
// 								</p>
// 							</motion.div>
// 						) : (
// 							<motion.div
// 								key="second"
// 								initial={{ opacity: 0 }}
// 								animate={{ opacity: 1 }}
// 								exit={{ opacity: 0 }}
// 								className="mt-6"
// 							>
// 								<p>Something Short!</p>
// 							</motion.div>
// 						)}
// 					</AnimatePresence> */}
// 					{/* ---------------------------------------------------- */}
// 					{/* <AnimatePresence initial={false}>
// 						{expanded && (
// 							<motion.div
// 								initial={{ opacity: 0 }}
// 								animate={{ opacity: 1 }}
// 								exit={{ opacity: 0 }}
// 								className="mt-6"
// 							>
// 								<p>
// 									Lorem ipsum dolor sit amet consectetur adipisicing elit.
// 									Velit, adipisci.
// 								</p>
// 							</motion.div>
// 						)}
// 					</AnimatePresence> */}
// 				</div>
// 			</div>
// 		</MotionConfig>
// 	);
// };
// export default Resizable;
