import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Screens
import New from './screens/New'
import New2 from './screens/New2'
import App from './screens/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/WebDance' element={<App />} />
          <Route path='/WebDance/new' element={<New />} />
          <Route path='/WebDance/new2' element={<New2 />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
