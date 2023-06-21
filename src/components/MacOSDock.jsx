import { useMotionValue, motion, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const AppIcon = ({ mouseX }) => {
	const ref = useRef(null);

	// const distance = useTransform(mouseX, val => {
	// 	const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

	// 	return val - bounds?.x - bounds?.width / 2;
	// });

	const distance = useTransform(mouseX, val => {
		const bounds = ref.current?.getBoundingClientRect();
		const boundsX = bounds?.x || 0;
		const boundsWidth = bounds?.width || 0;

		return val - boundsX - boundsWidth / 2;
	});

	const widthSync = useTransform(distance, [-150, 0, 150], [40, 70, 40]);
	const width = useSpring(widthSync, {
		mass: 0.5,
		stiffness: 150,
		damping: 12,
	});
	// const width = useSpring(widthSync);

	return (
		<motion.div
			ref={ref}
			style={{ width }}
			className="aspect-square w-12 cursor-pointer rounded-full bg-yellow-400/90"
		/>
	);
};

const Dock = () => {
	const mouseX = useMotionValue(Infinity);
	return (
		<motion.div
			onMouseMove={e => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
			className="mx-auto flex h-16 items-end gap-4 rounded-lg bg-slate-900 p-4 pb-3"
		>
			{[...Array(8).keys()].map(i => (
				<AppIcon mouseX={mouseX} key={i} />
			))}
		</motion.div>
	);
};

const MacOSDock = () => {
	return (
		<div className="flex h-screen w-full flex-col justify-end bg-slate-950 pb-24">
			<Dock />
		</div>
	);
};
export default MacOSDock;
