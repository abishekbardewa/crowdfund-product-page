import styled from 'styled-components';

export const HomeContainer = styled.div`
	width: 100%;
	padding: 10px 20px;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: #fafafa;
`;
export const MastercraftCard = styled.div`
	padding: 20px;
	/* position: absolute; */
	margin-top: -130px;
	border: 1px solid #e4e2e2b8;
	border-radius: 10px;
	background: #fff;
	width: 100%;
	max-width: 700px;

	h1 {
		font-size: 22px;
		margin: 30px 0px;
		text-align: center;
	}
	p {
		color: #9e9e9e;
		font-size: 14px;
		text-align: center;
		margin: 30px 0px;
	}
`;
export const MastercraftLogo = styled.div`
	/* margin: 0 auto; */
	/* width: 100%; */
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	img {
		position: absolute;
		top: -50px;
	}
`;

export const MastercraftBtn = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	.bookmark {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
		cursor: pointer;
		background: hsl(192deg 29% 97%);
		border-radius: 30px;

		.bookmark-btn {
			color: hsl(0, 0%, 48%);
			display: none;
			font-weight: 700;
			font-size: 14px;
			border: none;
			background: none;
			padding-right: 30px;
		}
		.active {
			color: hsl(176, 50%, 47%);
		}
		@media (min-width: 768px) {
			.bookmark-btn {
				display: block;
			}
		}
	}
`;

export const MastercraftData = styled.div`
	padding: 0px 30px;
	margin: 20px 20px;
	border: 1px solid #e4e2e2b8;
	border-radius: 10px;
	background: #fff;
	width: 100%;
	max-width: 700px;
	text-align: center;

	.backed-data {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		@media (min-width: 768px) {
			flex-direction: row;
			justify-content: space-between;
		}
		.divider {
			margin: 10px 0px;
			width: 90px;
			background: #e4e2e2;
			height: 2px;
			@media (min-width: 768px) {
				margin: 60px 0px;
				height: 90px;
				background: #e4e2e2;
				width: 2px;
			}
		}
		.backed,
		.total-backers,
		.days-left {
			padding: 10px 0px;
		}
		.backed h1,
		.total-backers h1,
		.days-left h1 {
			padding: 20px 0px;
		}
		.backed span,
		.total-backers span {
			color: #9e9e9e;
			/* border-bottom: 2px solid #e4e2e2; */
			padding: 20px 0px;
			/* @media (min-width: 768px) {
				border: none;
			} */
		}
		.days-left span {
			color: #9e9e9e;
		}
	}
	.progress-bar {
		margin: 20px 0px;
		width: 100%;
		height: 10px;
		border-radius: 30px;
		background-color: #f4f4f4;
	}

	.progress {
		width: ${({ progress }) => `${progress}%`};
		height: 10px;
		border-radius: 30px;
		background-color: hsl(176, 50%, 47%);
	}
`;

export const About = styled.div`
	padding: 0px 20px;
	/* margin: 60px 20px; */
	border: 1px solid #e4e2e2b8;
	border-radius: 10px;
	background: #fff;
	width: 100%;
	max-width: 700px;

	h1 {
		font-size: 20px;
		margin: 25px 0px;
	}
	p {
		font-size: 15px;
		margin: 25px 0px;
		line-height: 1.6rem;
		color: #9e9e9e;
	}
`;
