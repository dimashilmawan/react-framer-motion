import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const imageURL =
	"https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80";

const Parallax = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
	const backdropFilter = useTransform(
		scrollYProgress,
		[0, 1],
		["blur(0px)", "blur(10px)"]
	);

	return (
		<div>
			<section
				ref={ref}
				className="relative flex h-screen w-full items-center justify-center overflow-hidden"
			>
				<motion.div
					style={{ y }}
					className={`bg-[url('${imageURL}')] absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat`}
				/>
				<motion.div
					style={{ backdropFilter }}
					className={`absolute inset-0 -z-10 bg-black/40 `}
				/>
				<div>
					<h1 className="text-5xl font-bold uppercase text-gray-100">
						Nature make us Think Clear
					</h1>
				</div>
			</section>
			<section className="h-screen space-y-4 bg-green-900 p-8">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
					voluptas rem est reprehenderit provident autem, placeat fugiat error
					et suscipit vitae optio vel impedit obcaecati. Nesciunt veniam totam
					reprehenderit voluptatum?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
					voluptas rem est reprehenderit provident autem, placeat fugiat error
					et suscipit vitae optio vel impedit obcaecati. Nesciunt veniam totam
					reprehenderit voluptatum?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
					voluptas rem est reprehenderit provident autem, placeat fugiat error
					et suscipit vitae optio vel impedit obcaecati. Nesciunt veniam totam
					reprehenderit voluptatum?
				</p>
			</section>
		</div>
	);
};
export default Parallax;
