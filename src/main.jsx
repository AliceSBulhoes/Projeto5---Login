import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Importando telas
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Cadastrar from './routes/Cadastrar.jsx'
// Importando estilos
import { GlobalStyle } from './styles/GlobalStyle.jsx'
import Produtos from './routes/Produtos.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <Error/>,

  children: [
    {path:'/', element: <Home/>},
    {path: '/login', element: <Login/>},
    {path: '/cadastro', element: <Cadastrar/>},
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/produtos', element: <Produtos/>}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle/>
  </StrictMode>
)
