import { useContext } from 'react'
import './App.css'
import { MediaContainer } from './MediaContainer/MediaContainer';
import { GeneralContext } from './Context/General.context';
import { Filters } from './Filters/Filters';
import { Header } from './Header/Header';

function App() {
  
  const { language } = useContext(GeneralContext)
  
  return (
    <>
      <Header/>
      
      <div className='container'>
        <h1 className='heading'>{language === 'en' ? 'Rick and Morty Characters' : 'Rick und Morty Charaktere'}</h1>

        <Filters />
        <MediaContainer />
      </div>
    </>
    
  )
}

export default App
