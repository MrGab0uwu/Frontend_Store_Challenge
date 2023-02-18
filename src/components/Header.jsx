import React, { useState } from 'react';
import houseIcon from '../assets/cil_house.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Header() {
	const [nav, setNav] = useState(false);

	const handleNav = () => setNav(!nav);

	return (
		<header>
			<nav className='flex justify-between lg:justify-evenly items-center h-20 md:h-28 px-4 text-white bg-orange-500'>
				<a href='/'>
					<img src={houseIcon} alt='Store logo' className='w-12 m-4' />
				</a>
				<ul className='hidden md:flex'>
					<li className='p-4'>How We Work</li>
					<li className='p-4'>Services</li>
					<li className='p-4'>Free Quote</li>
					<li className='p-4'>Contact</li>
				</ul>
				<div onClick={handleNav} className='md:hidden '>
					{!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</div>
				<div
					className={`${
						!nav
							? 'fixed left-0 top-0 w-[60%] h-full bg-orange-600 shadow-xl ease-in-out duration-500'
							: 'fixed left-[-100%] '
					} md:hidden`}
				>
					<a href='/'>
						<img src={houseIcon} alt='Store logo' className='w-12 m-4' />
					</a>
					<ul className='pt-4'>
						<li className='p-3 hover:bg-orange-700 border-b border-b-gray-300'>
							How We Work
						</li>
						<li className='p-3 hover:bg-orange-700 border-b border-b-gray-300'>
							Services
						</li>
						<li className='p-3 hover:bg-orange-700 border-b border-b-gray-300'>
							Free Quote
						</li>
						<li className='p-3 hover:bg-orange-700'>Contact</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
