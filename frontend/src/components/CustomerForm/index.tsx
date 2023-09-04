import React, { useState } from 'react';
import { TextField, Button, Grid, ThemeProvider } from '@mui/material';
import { theme, initialValues } from './helper'
import ColorPicker from '../ColorPicker';
import PopUp from '../PopUp';

interface PopUpMessage {
  open: boolean;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

export default function CustomerForm() {
  const [values, setValues] = useState(initialValues);
  const [popUpMessage, setPopUpMessage] = useState<PopUpMessage>({
    open: false,
    message: '',
    type: 'success',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let newValue = value
    if (name == "cpf") newValue = maskCpf(value)
    if (name == "name") newValue = maskName(value)
    setValues({
      ...values,
      [name]: newValue,
    });
  }

  function maskCpf(value: string): string {
    const numericValue = value.replace(/\D/g, '');
    return numericValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  function maskName(value: string): string {
    return value.replace(/[^a-zA-Z\s]/g, '');
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    fetch("http://localhost:3002/customer", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(async (response) => {
        if (response.status === 200) {
          setPopUpMessage({
            open: true,
            type: "success",
            message: "Cliente cadastrado com sucesso!"
          });
          setValues(initialValues);
        } else if (response.status === 400) {
          setPopUpMessage({
            open: true,
            type: "error",
            message: "CPF já cadastrado!"
          });
        } else {
          setPopUpMessage({
            open: true,
            type: "error",
            message: "Erro ao efetuar cadastro!"
          });
        }
      })
      .catch(() => {
        setPopUpMessage({
          open: true,
          type: "error",
          message: "Erro ao efetuar cadastro!"
        });
      });
  };

  const handleClosePopUp = () => {
    setPopUpMessage({
      ...popUpMessage,
      open: false,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2} px={"10%"} pt={"2%"}>
            <Grid item xs={8} sm={8}>
              <TextField
                label="Nome Completo"
                name="name"
                value={values.name}
                onChange={handleChange}
                inputProps={{
                  minLength: 3,
                  maxLength: 50
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <ColorPicker
                label="Cor Favorita"
                name="favColor"
                value={values.favColor}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                label="CPF"
                name="cpf"
                value={values.cpf}
                onChange={handleChange}
                inputProps={{
                  minLength: 11,
                  maxLength: 11
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Observações"
                name="obs"
                value={values.obs}
                onChange={handleChange}
                inputProps={{ maxLength: 300 }}
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </ThemeProvider>
      </form>
      <PopUp
        type={popUpMessage.type}
        open={popUpMessage.open}
        message={popUpMessage.message}
        onClose={handleClosePopUp}
      />
    </>
  );
}