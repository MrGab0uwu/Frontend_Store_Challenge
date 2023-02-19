import React from 'react';
import {
	house,
	whastappIcon,
	facebookIcon,
	twitterIcon,
	instragramIcon,
} from '../assets';

const Footer = () => {
	return (
		<footer className='mt-24 bg-orange-500 w-full lg:h-[600px]'>
			<div className='w-[90%] lg:w-[1200px] h-full mx-auto py-16 grid items-center lg:grid-cols-4 text-white'>
				<div>
					<img src={house} alt='store' />
					<p className='py-4 leading-7'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page whenters.
					</p>
					<div className='mt-4 flex gap-3 w-full'>
						<div className='icon'>
							<img src={twitterIcon} alt='Twitter' />
						</div>
						<div className='icon'>
							<img src={facebookIcon} alt='Facebook' />
						</div>
						<div className='icon'>
							<img src={instragramIcon} alt='Instagram' />
						</div>
					</div>
				</div>
				<div className='lg:col-span-3 flex flex-wrap justify-between md:justify-evenly mt-5'>
					<div>
						<h6 className='md:text-2xl'>About Us</h6>
						<ul className='md:mt-12 flex flex-col h-full gap-2'>
							<li className='footer-link'>About</li>
							<li className='footer-link'>Privancy & Policy</li>
							<li className='footer-link'>Terms & Conditions</li>
							<li className='footer-link'>Faq</li>
						</ul>
					</div>
					<div>
						<h6 className='md:text-2xl'>Navigate</h6>
						<ul className='md:mt-12 flex flex-col h-full gap-2'>
							<li className='footer-link'>How We Work</li>
							<li className='footer-link'>Services</li>
							<li className='footer-link'>Faq</li>
							<li className='footer-link'>Contact</li>
							<li className='footer-link'>Free Quote</li>
						</ul>
					</div>
					<div>
						<h6 className='md:text-2xl'>Contact Us</h6>
						<ul className='md:mt-12 flex flex-col h-full gap-2'>
							<li className='py-2 text-sm'>Ricardo Margain 444</li>
							<li className='py-2 text-sm'>Call: +52 81 1234 5678</li>
							<li className='py-2 text-sm'>Email: info@challenge.com</li>
							<li className='footer-link w-6/12 md:w-auto'>
								<img src={whastappIcon} alt='WhatsApp' />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
