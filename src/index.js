import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from '@/App';
import store from '@/store'
import './assets/css/index.less'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Suspense fallback='loading…… '>
            <HashRouter>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </HashRouter>
        </Suspense>
    </Provider>
);
