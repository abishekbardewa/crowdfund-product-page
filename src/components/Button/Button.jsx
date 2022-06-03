import styled from 'styled-components';

const Button = styled.button`
	cursor: pointer;
	background: hsl(176, 50%, 47%);
	color: #fff;
	font-weight: 700;
	font-size: 14px;
	letter-spacing: 0.7px;
	border: none;
	border-radius: 30px;
	padding: 20px 35px;
	&:hover {
		background: hsl(176, 72%, 28%);
	}
	&:disabled {
		background: hsl(0deg 0% 80%);
	}
`;

export default Button;
