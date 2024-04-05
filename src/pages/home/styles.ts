import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20vh;
    gap: 2rem;
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
`;

export const Title = styled.span`
    font-size: 3em;
    font-weight: 600;
`;

export const GenerateQuote = styled.button`
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
	text-align: center;
	transition: 0.5s;
	background-size: 200% auto;
	color: black;            
	box-shadow: 0 0 2px #000;
	border-radius: 10px;
    border: none;
	font-size: 1em;
	font-weight: bold;
    padding: 1rem 3rem;

	&:hover {
		background-position: right center; 
		color: #fff;
	} 
`;

export const QuoteContainer = styled.div`
    max-width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
`;

export const Quote = styled.span`
    font-size: 1.3em;
	font-weight: 500;
`;
