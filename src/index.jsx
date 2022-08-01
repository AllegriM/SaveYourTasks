import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import TaskContextProvider from './context/taskContext'
import { ToDoTheme } from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={ToDoTheme}>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
