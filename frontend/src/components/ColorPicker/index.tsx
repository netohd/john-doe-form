import React from 'react';
import { TextField, MenuItem } from '@mui/material';

interface ColorPickerProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth: boolean;
  required: boolean;
}

export default function ColorPicker({
  label,
  name,
  value,
  onChange,
  fullWidth,
  required,
}: ColorPickerProps) {
  const options = ['Amarelo', 'Anil', 'Azul', 'Laranja', 'Vermelho', 'Verde', 'Violeta'];

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      required={required}
      select
    >
      {options.map((color) => (
        <MenuItem key={color} value={color}>
          {color}
        </MenuItem>
      ))}
    </TextField>
  )
}
