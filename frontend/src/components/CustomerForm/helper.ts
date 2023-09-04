import { createTheme } from '@mui/material/styles';
import { z } from "zod";

const formSchema = z
  .object({
    name: z.string().min(3).max(50),
    cpf: z.string().min(11).max(11),
    email: z.string().email(),
    obs: z.string().max(10),
  })

const initialValues = {
  name: '',
  cpf: '',
  email: '',
  favColor: '',
  obs: '',
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#56d3a9',
    },
    secondary: {
      main: '#e1646a',
    }
  }
})

export { theme, initialValues, formSchema };