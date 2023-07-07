import { useState } from 'react';
import '../App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'



function ToggleDarkMode() {
	const [theme, settheme] = useState(false);
	const darkTheme = createTheme({
		palette: {
			mode: theme ? 'dark' : 'light',
		},
	});
	const handleChange = (event) => {
		settheme(event.target.checked);
	}
	return (
		<div className="App">
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<label>Dark Mode</label>
				<Switch
					checked={theme}
					color='success'
					onChange={handleChange} />
			</ThemeProvider>

		</div>
	);
}

export default ToggleDarkMode
