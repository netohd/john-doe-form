import { Stack } from '@mui/material'
import CustomerForm from './components/CustomerForm'
import Header from './components/Header'

function App() {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Header />
        <CustomerForm />
      </Stack>
    </>
  )
}

export default App
