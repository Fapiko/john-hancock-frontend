import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CssBaseline, GlobalStyles, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import Login from './components/login';
import {Provider} from 'react-redux';
import store from './store/store';
import Navbar from './components/navbar';
import Signup from './components/signup';

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
                    <CssBaseline/>
                    <Navbar/>

                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="users/login" element={<Login/>}/>
                        <Route path="users/signup" element={<Signup/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
);
