import { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(0);
	const [size, setSize] = useState(0);
	const [subtotal, setSubtotal] = useState(0);
	const [tax, setTax] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const [duePrice, setDuePrice] = useState(0);

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
		const newSize = getCubicSize(items);
		setSize(newSize);
		const newSubtotal = 200 * newSize;
		setSubtotal(newSubtotal);
		const newTax = newSubtotal * 0.16;
		setTax(newTax);
		const newTotal = newSubtotal + newTax;
		setTotalPrice(newTotal);
		setDuePrice(newTotal / 2);
	};

	const clear = () => {
		setItems(0);
		setTotal(0);
		setSize(0);
		setSubtotal(0);
		setTax(0);
		setTotalPrice(0);
		setDuePrice(0);
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
				tax,
				totalPrice,
				duePrice,
				calculate,
				clear,
			}}
		>
			{children}
		</ItemContext.Provider>
	);
};
