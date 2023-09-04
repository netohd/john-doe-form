import { Alert, AlertColor, Snackbar } from "@mui/material";

interface PopUpProps {
  type: AlertColor
  open: boolean
  onClose: () => void
  message: string
}

export default function PopUp({
  type,
  open,
  onClose,
  message
}: PopUpProps) {

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  )
}