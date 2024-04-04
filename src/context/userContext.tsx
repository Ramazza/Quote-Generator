import { createContext, useState } from 'react';
import api from '../api';

export const UserContext = createContext({  } as any);

export const UserStorage = ({ children }: any) => {

    const [quoteData, setQuoteData] = useState('');

    const getQuote = () => {
        api.get('/v1/quotes').then(response => {
            setQuoteData(response.data);
        }).catch(error => {
            console.error('Error fetching data: ', error);
        });
    }

	return(
		<UserContext.Provider value={{ getQuote, quoteData }}>
			{children}
		</UserContext.Provider>
	)

}