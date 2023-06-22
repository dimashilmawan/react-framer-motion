import { useState } from "react";
import { motion } from "framer-motion";

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
			<section className="h-screen w-full bg-emerald-500"></section>
			<section className="h-screen bg-emerald-600 pt-36">
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ amount: 0.8, once: true }}
					transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
					className="mx-auto flex h-96 w-4/5 gap-6"
				>
					{exploreWorlds.map((explore, i) => (
						<motion.div
							className={`cursor-pointer overflow-hidden rounded-xl transition-[flex] duration-300`}
							variants={{
								hidden: {
									x: -300,
									opacity: 0,
								},
								show: {
									x: 0,
									opacity: 1,
									transition: { duration: 0.7 },
								},
							}}
							style={{ flex: active === explore.id ? 4 : 1 }}
							onClick={() => setActive(explore.id)}
							key={explore.id}
						>
							<img
								src={explore.imgUrl}
								className="h-full w-full object-cover"
								alt=""
							/>
						</motion.div>
					))}
				</motion.div>
			</section>
		</div>
	);
};
export default Explore;
