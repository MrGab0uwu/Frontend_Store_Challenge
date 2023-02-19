import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const useItems = () => {
	const context = useContext(ItemContext);
	if (!context) throw new Error('contexto debe ser usado con un provider');
	return context;
};

export default useItems;
