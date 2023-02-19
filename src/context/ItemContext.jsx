import { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [size, setSize] = useState(0);
	const [total, setTotal] = useState(0);
	const [subtotal, setSubtotal] = useState(0);

	const saveItems = (item) => {
		const newItem = [...items, item];
		setItems(newItem);
		console.log(newItem);
	};

	const deleteItems = (id) => {
		const itemIndex = items.findIndex((item) => item.id === id);
		const newItems = [...items];
		newItems.splice(itemIndex, 1);
		setItems(newItems);
		console.log(newItems);
	};

	const calculate = () => {
		setTotal(items.length);
		setSize(getCubicSize(items));
		setSubtotal(200 * size);
	};

	const getCubicSize = (items) => {
		let sum = 0;
		for (const item of items) sum += item.size;
		return sum;
	};

	return (
		<ItemContext.Provider
			value={{
				items,
				saveItems,
				deleteItems,
				total,
				size,
				subtotal,
				calculate,
			}}
		>
			{children}
		</ItemContext.Provider>
	);
};
