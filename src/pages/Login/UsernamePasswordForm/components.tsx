import { Button, styled, TextField, TextFieldProps, Typography } from '@mui/material'

export const StyledBoldTypography = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.secondary.dark,
  cursor: 'pointer',
  fontWeight: 600,
  '&:active': {
    color: theme.palette.secondary.main,
  },
}))

export const StyledForm = styled('form')(() => ({
  width: '100%',
}))

export const StyledTextField = styled(({ variant, InputProps, ...props }: TextFieldProps) => (
  <TextField variant="filled" InputProps={{ disableUnderline: true, ...InputProps }} {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.secondary.light}`,
  margin: theme.spacing(0, 5, 0.75),
  borderRadius: 4,
  fontSize: 12,
  '.MuiInputBase-root': {
    height: 38,
    backgroundColor: theme.palette.secondary.lighten,
    padding: theme.spacing(0),
    fontSize: 'inherit',
    '&:hover': {
      backgroundColor: theme.palette.secondary.lighten,
    },
  },
  '.MuiInputBase-input': {
    padding: '12px 0px 2px 8px',
  },
  '.MuiInputLabel-root': {
    position: 'absolute',
    right: '0',
    left: '-4px',
    top: '-6px',
    margin: '0 auto',
  },
  '.MuiFormLabel-root': {
    margin: theme.spacing(0),
    fontSize: 'inherit',
  },
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 5),
}))
