import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Screens
import App from './screens/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/Limon' element={<App />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
