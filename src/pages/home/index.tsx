import { useContext, useEffect, useState } from 'react';
import { Container, Title, GenerateQuote, Quote } from './styles';
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
         <Title>Gerador de Citações</Title>
         <GenerateQuote onClick={() => handleQuote()}>Gerar Citação</GenerateQuote>
         <Quote>{quoteFrase? quoteFrase: ''}</Quote>
         <Quote>{author? author: ''}</Quote>
      </Container>
   );
}

export default Home;