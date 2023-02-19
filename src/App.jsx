import Header from './components/Header';
import Shop from './components/Shop';
import { ItemContextProvider } from './context/ItemContext';

function App() {
	return (
		<div className='max-w-[1920px] mx-auto'>
			<Header />
			<ItemContextProvider>
				<Shop />
			</ItemContextProvider>
		</div>
	);
}

export default App;
