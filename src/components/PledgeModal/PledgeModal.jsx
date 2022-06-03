import styled from 'styled-components';
import Button from '../Button/Button';
import Overlay from '../Overlay/Overlay';

const ModalContainer = styled.div`
	width: 100%;
	z-index: 10;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	position: fixed;

	.modal {
		background-color: #fff;
		margin: 0px 20px;
		padding: 20px;
		border-radius: 10px;
		overflow-y: scroll;
		max-height: 550px;
		width: 100%;
		max-width: 700px;
		&::-webkit-scrollbar {
			display: none;
		}

		.modal-title {
			display: flex;
			justify-content: space-between;
			h1 {
				font-size: 22px;
				padding: 10px 0px;
			}

			.cross-svg {
				svg {
					cursor: pointer;
					fill: #9e9e9e;
					border-radius: 30px;
				}
				svg :hover {
					fill: #000;
				}
			}
		}

		p {
			font-size: 16px;
			line-height: 1.6rem;
			color: #9e9e9e;
		}

		.pledges {
			.pledge-card:nth-child(4) {
				opacity: 0.4;
			}

			.pledge-card {
				border: 1px solid #e4e2e2;
				border-radius: 10px;
				margin: 25px 0px;

				.pledge {
					@media (min-width: 768px) {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						align-items: center;
						padding: 20px 10px;
					}
					.pledge-selection {
						padding: 20px;
						display: flex;
						align-items: center;
						gap: 20px;
						@media (min-width: 768px) {
							order: 1;
						}
						.radio-label {
							display: inline-flex;
							align-items: center;
							margin-right: 10px;
							cursor: pointer;
							.radio-input {
								display: none;
								&:checked + .custom-radio::after {
									transform: scale(1);
								}
							}
							.custom-radio {
								width: 1.25rem;
								height: 1.25rem;
								border: 2px solid #d8e4e2;
								border-radius: 50%;
								margin-right: 10px;
								box-sizing: border-box;
								padding: 2px;
								&:hover {
									border: 2px solid hsl(176, 50%, 47%);
								}
								&::after {
									content: '';
									width: 100%;
									height: 100%;
									display: block;
									border-radius: 50%;
									background-color: hsl(176, 72%, 28%);
									transform: scale(0);
									transition: transform 0.15s;
								}
							}
						}
						.pledge-title {
							h2:hover {
								color: hsl(176, 50%, 47%);
							}
							@media (min-width: 768px) {
								display: flex;
								gap: 15px;
							}
						}
						@media (min-width: 768px) {
							display: flex;
						}

						h2 {
							font-size: 16px;
							padding-bottom: 5px;
						}
						span {
							color: hsl(176, 50%, 47%);
							font-weight: 500;
						}
					}

					.pledge-text {
						p {
							padding: 0px 20px;
							font-size: 16px;
							line-height: 1.6rem;
							color: #9e9e9e;
							margin-bottom: 20px;
						}
						@media (min-width: 768px) {
							order: 3;
							p {
								padding: 0px 20px 0px 50px;
							}
						}
					}
					.pledge-days {
						h1 {
							font-size: 35px;
							padding: 0px 20px 20px;
							span {
								color: #9e9e9e;
								margin-left: 10px;
								font-weight: 500;
								font-size: 18px;
							}
							@media (min-width: 768px) {
								h1 {
									padding: 0px 20px;
								}
							}
						}

						@media (min-width: 768px) {
							order: 2;
							h1 {
								font-size: 20px;
							}
						}
					}
				}
				.enter-pledge {
					text-align: center;
					border-top: 1px solid #e4e2e2;
					padding: 20px;
					@media (min-width: 768px) {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 20px 20px 20px 30px;
					}
					h4 {
						font-size: 16px;
						color: #9e9e9e;
						font-weight: 500;
					}
					.pledge-amount {
						display: flex;
						justify-content: space-around;
						margin-top: 20px;
						gap: 10px;
						@media (min-width: 768px) {
							gap: 20px;
						}

						input[type='text'] {
							width: 100px;
							border-radius: 30px;
							border: 1px solid #e4e2e2;
							text-indent: 5px;
							font-size: 16px;
							font-weight: 700;
							text-align: center;
							&:focus {
								outline: none;
								border: 1px solid hsl(176, 72%, 28%);
							}
						}
					}
				}
			}
			.pledge-active {
				border: 1px solid hsl(176, 72%, 28%);
			}
		}
	}
`;
const PledgeModal = ({
	modalOpen,
	setModalOpen,
	checkedPledge,
	setCheckedPledge,
	pledgeAmt,
	handleChange,
	handleRadioPledge,
	thankyouModal,
	setThankyouModal,
	handleSubmit,
}) => {
	return (
		<>
			<Overlay open={modalOpen} />
			<ModalContainer>
				<div className="modal">
					<div className="modal-title">
						<h1>Back this project</h1>
						<div
							className="cross-svg"
							onClick={() => {
								setCheckedPledge('');
								setModalOpen(!modalOpen);
							}}
						>
							<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
								<g fill="hsl(0, 0%, 48%)" fillRule="evenodd">
									<path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
									<path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
								</g>
							</svg>
						</div>
					</div>
					<p> Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
					<div className="pledges">
						{/* {pledgesModal.map((pledge, idx) => ( */}
						<div className={`${checkedPledge === 'noRewards' ? 'pledge-card pledge-active' : 'pledge-card'}`}>
							<div className="pledge">
								<div className="pledge-selection">
									<label htmlFor="noRewards" className="radio-label">
										<input type="radio" name="pledge" value="noRewards" onChange={handleRadioPledge} id="noRewards" className="radio-input" />
										<div className="custom-radio"></div>
										<div className="pledge-title">
											<h2>Pledge with no reward</h2>
										</div>
									</label>
								</div>
								<div className="pledge-text">
									<p>
										Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product
										updates via email.
									</p>
								</div>
							</div>
							{checkedPledge === 'noRewards' && (
								<div className="enter-pledge">
									<h4>Enter your pledge</h4>
									<div className="pledge-amount">
										<input type="text" name="noRewards" value={pledgeAmt.noRewards} onChange={handleChange} />

										<Button
											onClick={() => {
												handleSubmit(pledgeAmt.noRewards);
												setModalOpen(!modalOpen);
												setCheckedPledge('');
												setThankyouModal(!thankyouModal);
											}}
										>
											Continue
										</Button>
									</div>
								</div>
							)}
						</div>
						<div className={`${checkedPledge === 'bambooStand' ? 'pledge-card pledge-active' : 'pledge-card'}`}>
							<div className="pledge">
								<div className="pledge-selection">
									<label htmlFor="bambooStand" className="radio-label">
										<input
											type="radio"
											name="pledge"
											value="bambooStand"
											onChange={handleRadioPledge}
											checked={checkedPledge === 'bambooStand'}
											id="bambooStand"
											className="radio-input"
										/>
										<div className="custom-radio"></div>

										<div className="pledge-title">
											<h2>Bamboo Stand</h2> <span>Pledge $25 or more</span>
										</div>
									</label>
								</div>
								<div className="pledge-text">
									<p>
										You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a
										special Backer member list
									</p>
								</div>
								<div className="pledge-days">
									<h1>
										101
										<span>left</span>
									</h1>
								</div>
							</div>
							{checkedPledge === 'bambooStand' && (
								<div className="enter-pledge">
									<h4>Enter your pledge</h4>
									<div className="pledge-amount">
										<input type="text" name="bambooStand" value={pledgeAmt.bambooStand} onChange={handleChange} />
										<Button
											onClick={() => {
												handleSubmit(pledgeAmt.bambooStand);
												setModalOpen(!modalOpen);
												setCheckedPledge('');
												setThankyouModal(!thankyouModal);
											}}
										>
											Continue
										</Button>
									</div>
								</div>
							)}
						</div>
						<div className={`${checkedPledge === 'blackEdition' ? 'pledge-card pledge-active' : 'pledge-card'}`}>
							<div className="pledge">
								<div className="pledge-selection">
									<label htmlFor="blackEdition" className="radio-label">
										<input
											type="radio"
											name="pledge"
											value="blackEdition"
											onChange={handleRadioPledge}
											checked={checkedPledge === 'blackEdition'}
											id="blackEdition"
											className="radio-input"
										/>
										<div className="custom-radio"></div>

										<div className="pledge-title">
											<h2>Black Edition Stand</h2>
											<span>Pledge $75 or more</span>
										</div>
									</label>
								</div>
								<div className="pledge-text">
									<p>
										You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is
										included.
									</p>
								</div>
								<div className="pledge-days">
									<h1>
										64
										<span>left</span>
									</h1>
								</div>
							</div>
							{checkedPledge === 'blackEdition' && (
								<div className="enter-pledge">
									<h4>Enter your pledge</h4>
									<div className="pledge-amount">
										<input type="text" name="blackEdition" value={pledgeAmt.blackEdition} onChange={handleChange} />
										<Button
											onClick={() => {
												handleSubmit(pledgeAmt.blackEdition);
												setModalOpen(!modalOpen);
												setCheckedPledge('');
												setThankyouModal(!thankyouModal);
											}}
										>
											Continue
										</Button>
									</div>
								</div>
							)}
						</div>
						<div className="pledge-card">
							<div className="pledge">
								<div className="pledge-selection">
									<label htmlFor="mahoganyEdition" className="radio-label">
										<input type="radio" disabled id="mahoganyEdition" className="radio-input" />
										<div className="custom-radio"></div>

										<div className="pledge-title">
											<h2>Mahogany Special Edition</h2>
											<span>Pledge $200 or mor</span>
										</div>
									</label>
								</div>
								<div className="pledge-text">
									<p>
										You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be addedto our Backer member list.
										Shipping is included.
									</p>
								</div>
								<div className="pledge-days">
									<h1>
										0<span>left</span>
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ModalContainer>
		</>
	);
};

export default PledgeModal;
