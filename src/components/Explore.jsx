import { useState } from "react";
import { motion } from "framer-motion";
import { CgScrollV } from "react-icons/cg";

const exploreWorlds = [
	{
		id: "world-1",
		imgUrl: "/assets/images/world-1.webp",
		title: "The Hogwarts",
	},
	{
		id: "world-2",
		imgUrl: "/assets/images/world-2.webp",
		title: "The Upside Down",
	},
	{
		id: "world-3",
		imgUrl: "/assets/images/world-3.webp",
		title: "Kadirojo Permai",
	},
	{
		id: "world-4",
		imgUrl: "/assets/images/world-4.webp",
		title: "Paradise Island",
	},
	{
		id: "world-5",
		imgUrl: "/assets/images/world-5.webp",
		title: "Hawkins Labs",
	},
];

const Explore = () => {
	const [active, setActive] = useState("world-3");
	return (
		<div className="">
			<section className="flex h-screen w-full flex-col justify-center bg-gradient-to-r from-emerald-900/90 to-green-900/80">
				<h1 className="flex items-center justify-center gap-3 text-center text-5xl font-semibold text-gray-100">
					<span className="-mt-[6px]">Scroll Down</span>
					<motion.span
						animate={{ y: [-20, 20] }}
						transition={{
							repeat: Infinity,
							duration: 0.6,
							repeatType: "mirror",
						}}
					>
						<CgScrollV />
					</motion.span>
				</h1>
			</section>
			<section className="h-screen bg-gradient-to-r from-emerald-950/90 to-gray-950/80 pt-36">
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ amount: 0.5, once: true }}
					transition={{ staggerChildren: 0.3, delayChildren: 0.1 }}
					className="mx-auto flex h-96 w-4/5 gap-5"
				>
					{exploreWorlds.map((explore, i) => (
						<motion.div
							className={`relative cursor-pointer overflow-hidden rounded-xl transition-[flex] duration-300`}
							variants={{
								hidden: {
									scaleX: 0,
									opacity: 0,
								},
								show: {
									scaleX: 1,
									opacity: 1,
									transition: { duration: 0.5 },
								},
							}}
							style={{ flex: active === explore.id ? 5 : 1, originX: 0 }}
							onClick={() => setActive(explore.id)}
							key={explore.id}
						>
							<img
								src={explore.imgUrl}
								className="h-full w-full object-cover"
								alt=""
							/>
							<motion.div
								animate={{
									opacity: active === explore.id ? 1 : 0,
									y: active === explore.id ? 0 : 200,
								}}
								className="absolute -bottom-24 left-0 h-1/2 w-full bg-gray-950/50 p-6 backdrop-blur-sm"
							>
								<h3 className="text-center text-3xl font-semibold text-gray-200">
									{explore.title}
								</h3>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</section>
		</div>
	);
};
export default Explore;
