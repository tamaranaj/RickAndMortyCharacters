import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import './index.css'
import App from './App.tsx'
import { client } from './apoloClient.ts';
import { GeneralContextProvider } from './Context/General.context.tsx';

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <GeneralContextProvider><App /></GeneralContextProvider>  
  </ApolloProvider>
)
