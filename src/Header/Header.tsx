import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { SelectChangeEvent, FormControl, Select, MenuItem } from '@mui/material';
import { GeneralContext } from '../Context/General.context';
import './Header.css'


export const Header = () => {
    const { language, updateLanguage } = React.useContext(GeneralContext)
    const handleLanguageChange = (event: SelectChangeEvent) => {
        updateLanguage(event.target.value);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='header'>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 20 }} className="language">

                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={language}
                            onChange={handleLanguageChange}
                            label="language"
                        >

                            <MenuItem value={'en'}>English</MenuItem>
                            <MenuItem value={'de'}>German</MenuItem>

                        </Select>
                    </FormControl>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
