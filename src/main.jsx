import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme';
import { Home } from './pages/Home';
import { SingIn } from './pages/SignIn';
import { SingUp } from './pages/SignUp';
import { Profile } from './pages/Profile';
import { AuthProvider } from './hooks/auth';
import { Routes } from './routes';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
      < Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
