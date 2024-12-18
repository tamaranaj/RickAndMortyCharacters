import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext } from 'react';
import { GeneralContext } from '../Context/General.context';
import Button from '@mui/material/Button';
import './Filters.css'

export const Filters = () => {
  const { status, species, language, updateStatus, updateSpecies, characters, updateCharacters, updatePage } = useContext(GeneralContext)
  const statuses = ['Alive', 'Dead', 'Unknown']
  const statusesDe = ['Lebendig','Tot','Unbekannt']
  const handleChangeStatus = (event: SelectChangeEvent) => {
    updateCharacters([])
    updatePage(1)
    updateStatus(event.target.value)
  }
  const handleChangeSpecies = (event: SelectChangeEvent) => {
    updateCharacters([])
    updatePage(1)
    updateSpecies(event.target.value)
  }


  const toggleSortingName = () => {
    const sortedData = [...characters];
    sortedData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    updateCharacters(sortedData)
  };
  const toggleSortingOrigin = () => {
    const sortedData = [...characters];
    sortedData.sort((a, b) => {
      return a.origin.name.localeCompare(b.origin.name);
    });
    updateCharacters(sortedData)
  };
  return (
    <div className='container'>
      <div className='inputsCont'>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-standard-label">{language == 'en' ? 'Select by species' : 'Nach Art auswählen'}</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={status}
            onChange={handleChangeStatus}
            label="status"
          >
            <MenuItem value="">
              <em>{language==='en' ? 'None' : 'Keiner'}</em>
            </MenuItem>
            {language == 'en' ? statuses.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>): statusesDe.map((item,index) => <MenuItem key={item} value={statuses[index]}>{item}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-standard-label">{language == 'en' ? 'Select by status' : 'Nach Status auswählen'}</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={species}
            onChange={handleChangeSpecies}
            label="species"
          >
            <MenuItem value="">
            <em>{language==='en' ? 'None' : 'Keiner'}</em>
            </MenuItem>
            <MenuItem value={'Human'}>{language==='en' ? 'Human': 'Menschlich'}</MenuItem>
            <MenuItem value={'Alien'}>{language==='en' ? 'Alien': 'Ausländerin/Ausländer'}</MenuItem>
            <MenuItem value={'Humanoid'}>Humanoid</MenuItem>
          </Select>
        </FormControl>
      </div>


      <div className='buttonsCont'>
        <Button variant="contained" onClick={toggleSortingName}>{language == 'en' ? 'Sort by name' : 'Nach Namen sortieren'}</Button>
        <Button variant="contained" onClick={toggleSortingOrigin}>{language == 'en' ? 'Sort by origin name' : 'Sortieren nach Herkunftsname'}</Button>
      </div>

    </div>
  )
}
