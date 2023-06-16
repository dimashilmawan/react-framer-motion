import { motion } from "framer-motion";

import image1 from "../assets/images/image-1.jpg";
import image2 from "../assets/images/image-2.jpg";
import image3 from "../assets/images/image-3.jpg";
import image4 from "../assets/images/image-4.jpg";
import image5 from "../assets/images/image-5.jpg";
import image6 from "../assets/images/image-6.jpg";
import image7 from "../assets/images/image-7.jpg";
import imageCover from "../assets/images/image-cover.jpg";
import { useEffect, useRef, useState } from "react";

const images = [image1, image2, image3, image4, image5, image6, image7];

const Slider = () => {
	const carouselRef = useRef(null);
	const [innerCarouselWidth, setInnerCarouselWidth] = useState(null);
	console.log(imageCover);
	console.log(image1);
	useEffect(() => {
		setInnerCarouselWidth(
			carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
		);
	}, []);

	return (
		<div className={`h-screen w-full bg-[url('${imageCover}')] bg-cover pt-12`}>
			<div ref={carouselRef} className="w-screen overflow-hidden rounded-xl">
				<motion.div
					drag="x"
					dragConstraints={{
						right: 0,
						left: -innerCarouselWidth,
					}}
					// dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
					className="flex cursor-grab gap-4 "
				>
					{images.map(image => (
						<div
							className="aspect[10/16] w-64 shrink-0 overflow-hidden rounded-lg "
							key={image}
						>
							<img
								className="pointer-events-none h-full w-full object-cover"
								src={image}
								alt=""
							/>
						</div>
					))}
					<div className="mr-4 h-64 w-[0.01px]">&nbsp;</div>
				</motion.div>
			</div>
		</div>
	);
};
export default Slider;

// const Slider = () => {
// 	const ref = useRef(null);
// 	return (
// 		<div className="h-screen w-full bg-orange-950 pt-44">
// 			<div ref={ref} className="mx-auto aspect-video w-96 bg-yellow-500">
// 				<div className="h-32 w-[500px] bg-orange-500"></div>
// 			</div>
// 			<button
// 				className="mx-auto mt-24 block bg-blue-900 px-4 py-2 text-gray-100"
// 				onClick={() => {
// 					console.log("Scroll Width " + ref.current.scrollWidth);
// 					console.log("Offset Width " + ref.current.offsetWidth);
// 				}}
// 			>
// 				Click
// 			</button>
// 		</div>
// 	);
// };
// export default Slider;
