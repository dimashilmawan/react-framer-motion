import { stagger, useAnimate } from "framer-motion";
import { useState } from "react";
import { LuListChecks } from "react-icons/lu";

const DUMMY_ITEMS = [
	{ id: "a1", text: "One", checked: true },
	{ id: "a2", text: "Two", checked: false },
	{ id: "a3", text: "Three", checked: true },
	{ id: "a4", text: "Four", checked: false },
	{ id: "a5", text: "Five", checked: true },
	{ id: "a6", text: "Six", checked: true },
	{ id: "a7", text: "Seven", checked: true },
];

const CheckList = () => {
	const [items, setItems] = useState(DUMMY_ITEMS);

	const [ref, animate] = useAnimate();

	const inputCheckedHandler = id => {
		const newItems = items.map(item => ({
			...item,
			checked: item.id === id ? !item.checked : item.checked,
		}));

		setItems(newItems);

		if (newItems.every(item => item.checked)) {
			const lastCompletedItemIndex = items.findIndex(item => !item.checked);
			const random = Math.random();

			if (random < 1 / 3) {
				// Shimmy
				animate(
					"input",
					{ x: [0, -3, 3, 0] },
					{
						duration: 0.3,
						delay: stagger(0.075, { from: lastCompletedItemIndex }),
					}
				);
			} else if (random < 2 / 3) {
				// Bounce
				animate(
					"input",
					{ scale: [1, 1.3, 1] },
					{
						duration: 0.3,
						delay: stagger(0.075, { from: lastCompletedItemIndex }),
					}
				);
			} else {
				// Shake
				animate(
					"input",
					{ rotate: [0, 10, -10, 0] },
					{
						duration: 0.3,
						delay: stagger(0.075, { from: lastCompletedItemIndex }),
					}
				);
			}
		}
	};

	return (
		<div className="h-screen w-full bg-emerald-800 pt-32">
			<div className="mx-auto w-96 rounded-lg bg-gray-100 p-6">
				<div className="flex items-center gap-3">
					<LuListChecks className="text-2xl text-gray-700" />
					<h1 className="-mt-[2px] text-xl font-semibold text-gray-700">
						Checklist
					</h1>
				</div>
				<form ref={ref} className="mt-6 flex flex-col gap-3">
					{items.map(item => (
						<label className="flex w-fit items-center gap-3" key={item.id}>
							<input
								className="h-4 w-4 accent-emerald-600 hover:accent-emerald-700"
								type="checkbox"
								checked={item.checked}
								onChange={() => inputCheckedHandler(item.id)}
							/>
							<span
								className={`${
									item.checked ? "text-gray-400 line-through" : ""
								} -mt-[1.5px] font-normal text-gray-800 transition-all duration-300`}
							>
								{item.text}
							</span>
						</label>
					))}
				</form>
			</div>
		</div>
	);
};
export default CheckList;
