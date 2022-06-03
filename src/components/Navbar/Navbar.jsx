import React, { useState } from 'react';
import iconBurger from '../../assets/images/icon-hamburger.svg';
import iconClose from '../../assets/images/icon-close-menu.svg';
import styled from 'styled-components';
import Overlay from '../Overlay/Overlay';

const NavbarSection = styled.section`
	position: absolute;
	z-index: 10;
	width: 100%;
	height: 55px;
	padding: 0 20px;

	.navbar__container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media (min-width: 768px) {
			padding: 0 85px;
		}
		.navbar__logo {
			padding: 15px 0;
			h1 {
				color: #fff;
				font-size: 30px;
			}
		}

		.navbar__menu-mobile {
			display: flex;
			flex-direction: column;
			@media (min-width: 768px) {
				display: none;
				.navbar-icon {
					display: none;
				}
			}
			ul {
				list-style: none;
				flex-flow: column nowrap;
				background: #fff;
				position: absolute;
				top: 70px;
				right: 35px;
				width: 305px;
				border-radius: 10px;
				li {
					color: #000;
					padding: 20px 0px 20px 20px;
					font-weight: 700;
					border-bottom: 1px solid #ccc;
					&:nth-child(3) {
						border-bottom: none;
					}
				}
			}
		}
		@media (min-width: 768px) {
			.navbar-icon {
				display: none;
			}
		}
		.navbar__menu {
			display: none;
			@media (min-width: 768px) {
				display: block;
				ul {
					list-style: none;
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
					justify-content: center;
					li {
						color: #fff;
						padding: 20px 0px 20px 20px;
						font-weight: 400;
						border-bottom: none;
					}
				}
			}
		}
	}
`;

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			{open && <Overlay open></Overlay>}
			<NavbarSection open>
				<div className="navbar__container">
					<div className="navbar__logo">
						<h1>crowdfund</h1>
					</div>

					<div className="navbar__menu-mobile">
						{open && (
							<ul>
								<li>About</li>
								<li>Discover</li>
								<li>Get Started</li>
							</ul>
						)}
					</div>

					<div className="navbar-icon">
						{open ? (
							<img src={iconClose} alt="Burger Icon" width="18px" height="18px" open={open} onClick={() => setOpen(!open)} />
						) : (
							<img src={iconBurger} alt="Burger Icon" width="18px" height="18px" open={open} onClick={() => setOpen(!open)} />
						)}
					</div>
					<div className="navbar__menu">
						<ul>
							<li>About</li>
							<li>Discover</li>
							<li>Get Started</li>
						</ul>
					</div>
				</div>
			</NavbarSection>
		</div>
	);
};

export default Navbar;
