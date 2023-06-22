import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { v4 as uuid } from "uuid";

const DUMMY_TODOS = [
	{
		id: "a1",
		value: "Do homework",
	},
	{
		id: "a2",
		value: "Exercise",
	},
	{
		id: "a3",
		value: "Buy food",
	},
	{
		id: "a4",
		value: "Coding",
	},
	{
		id: "a5",
		value: "Read Novel",
	},
];

const Todos = () => {
	const [todos, setTodos] = useState(DUMMY_TODOS);
	const [input, setInput] = useState("");

	const [ref, { height }] = useMeasure();

	const inputChangeHandler = e => {
		setInput(e.target.value);
	};

	const addTodoHandler = e => {
		e.preventDefault();
		if (input === "") return;
		const todo = {
			id: uuid(),
			value: input,
		};
		setTodos(prev => [...prev, todo]);
		setInput("");
	};

	const removeTodoHandler = id => {
		setTodos(prev => prev.filter(todo => todo.id !== id));
	};

	return (
		<MotionConfig transition={{ type: "spring" }}>
			<div className="h-screen w-full bg-sky-900 pt-24">
				<div className="mx-auto h-96 w-96 overflow-y-auto rounded-lg bg-gray-300/90 p-6 backdrop-blur-md transition-all">
					{/* <div className="mx-auto w-96 rounded-lg bg-gray-300/90 p-6 backdrop-blur-md transition-all"> */}
					<form onSubmit={addTodoHandler} className="flex items-center gap-2 ">
						<input
							className="flex-1 rounded-md bg-gray-200 px-3 py-2 outline-none"
							value={input}
							onChange={inputChangeHandler}
						/>
						<button className="-mt-1 text-3xl font-bold text-gray-700">
							+
						</button>
					</form>

					{todos.length === 0 && (
						<p className="p-4 text-center text-lg">No Todo List Yet!</p>
					)}

					{/* USE THIS if want animate height and if card div not fixed height */}
					{/* <motion.div
						animate={{ height: height || "auto" }}
						className={`overflow-hidden ${todos.length !== 0 && "mt-6 "}`}
					> */}
					<motion.ul ref={ref} className={`mt-6 flex w-full flex-col gap-3`}>
						<AnimatePresence mode="popLayout" initial={false}>
							{todos.map(todo => (
								<motion.li
									key={todo.id}
									layout
									initial={{
										y: -50,
										scale: 0.1,
										opacity: 0,
									}}
									animate={{
										y: 0,
										scale: 1,
										opacity: 1,
									}}
									exit={{
										y: -50,
										scale: 0.1,
										opacity: 0,
									}}
									transition={{
										duration: 0.3,
										type: "tween",
										layout: { duration: 0.4 },
									}}
									onClick={() => removeTodoHandler(todo.id)}
									className="flex items-center gap-3 rounded-lg bg-sky-500 p-3 font-semibold text-gray-200"
								>
									<span className="flex-1">{todo.value}</span>
									<span className="-mt-1 text-xl font-bold">x</span>
								</motion.li>
							))}
						</AnimatePresence>
					</motion.ul>
					{/* </motion.div> */}
				</div>
			</div>
		</MotionConfig>
	);
};
export default Todos;
