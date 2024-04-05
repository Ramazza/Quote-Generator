import { useContext, useEffect, useState } from 'react';
import { Container, Title, GenerateQuote, Quote, QuoteContainer } from './styles';
import { UserContext } from '../../context/userContext';

function Home() {

   const { getQuote, quoteData } = useContext(UserContext);
   const [quoteFrase, setQuoteFrase] = useState('');
   const [author, setAuthor] = useState('');

   const handleQuote = () => {
      getQuote();
   }

   useEffect(() => {
      if (quoteData && quoteData.length > 0) {
         setQuoteFrase(quoteData[0].quote);
         setAuthor(quoteData[0].author);
      }
   }, [quoteData]);
   

   return(
      <Container>
         <Title>Quote Generator</Title>
         <GenerateQuote onClick={() => handleQuote()}>{quoteFrase? 'Generate another quote' : 'Generate quote'}</GenerateQuote>
         <QuoteContainer>
            <Quote>{quoteFrase? `"${quoteFrase}"`: ''}</Quote>
            <Quote>{author? author: ''}</Quote>
         </QuoteContainer>
      </Container>
   );
}

export default Home;