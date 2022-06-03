import React, { useState } from 'react';
import mastercraftLogo from '../../assets/images/logo-mastercraft.svg';
import { HomeContainer, MastercraftCard, MastercraftLogo, MastercraftBtn, MastercraftData, About } from './home.styles.js';
import Button from '../Button/Button';
import Pledge from '../Pledge/Pledge';
import { pledges } from '../../pledgeData';
import Footer from '../Footer/Footer';

const Home = ({ progress, modalOpen, setModalOpen, handleRadioPledge, setCheckedPledge, currentBacked }) => {
	const [bookmark, setBookmark] = useState(false);
	const handleBookmark = () => {
		setBookmark(!bookmark);
	};
	return (
		<HomeContainer>
			<MastercraftCard>
				<MastercraftLogo>
					<img src={mastercraftLogo} alt="Mastercraft Logo" />
				</MastercraftLogo>
				<h1>Mastercraft Bamboo Monitor Riser</h1>
				<p> A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
				<MastercraftBtn>
					<Button
						onClick={() => {
							setModalOpen(!modalOpen);
						}}
					>
						Back this project
					</Button>
					<div className="bookmark" onClick={handleBookmark}>
						<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
							<g fill="#000" fillRule="evenodd">
								<circle fill={`${bookmark ? 'hsl(176, 50%, 47%)' : '2F2F2F'}`} cx="28" cy="28" r="28" />
								<path fill={`${bookmark ? '#fff' : 'hsl(0, 0%, 48%)'}`} d="M23 19v18l5-5.058L33 37V19z" />
							</g>
						</svg>
						<button className={`bookmark-btn ${bookmark ? 'active' : ''}`}>{bookmark ? 'Bookmarked' : 'Bookmark'}</button>
					</div>
				</MastercraftBtn>
			</MastercraftCard>

			<MastercraftData progress={progress}>
				<div className="backed-data">
					<div className="backed">
						<h1>${currentBacked.currentBackedAmt}</h1>
						<span>of $100,000 backed</span>
					</div>
					<div className="divider"></div>
					<div className="total-backers">
						<h1>{currentBacked.backers}</h1>
						<span>total backers</span>
					</div>
					<div className="divider"></div>
					<div className="days-left">
						<h1>56 </h1>
						<span>days left</span>
					</div>
				</div>
				<div className="progress-bar">
					<div className="progress"></div>
				</div>
			</MastercraftData>

			<About>
				<h1>About this project</h1>
				<p>
					The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height.
					Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay
					focused on the task at hand.
				</p>
				<p>
					Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB
					sticks to be stored under the stand.
				</p>
				{pledges.map((pledge, idx) => (
					<Pledge
						key={idx}
						{...pledge}
						setModalOpen={setModalOpen}
						modalOpen={modalOpen}
						handleRadioPledge={handleRadioPledge}
						setCheckedPledge={setCheckedPledge}
					/>
				))}
			</About>

			<br />
			<Footer />
		</HomeContainer>
	);
};

export default Home;
