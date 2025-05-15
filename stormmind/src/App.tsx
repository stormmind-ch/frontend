import { Router } from './Router'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider >
      <Router/>
    </MantineProvider>
  )
}

export default App
