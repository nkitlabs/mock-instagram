import { Box, InputAdornment, Stack } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { StyledBoldTypography, StyledButton, StyledForm, StyledTextField } from './components'

type UsernamePasswordFormProps = {
  loginCallback: (username: string, password: string) => void
}

type ToggleViewButtonProps = {
  isShowPassword: boolean
  toggleButtonCallback: (flag: boolean) => void
}

const ToggleViewButton = ({ isShowPassword, toggleButtonCallback }: ToggleViewButtonProps) => {
  return (
    <InputAdornment position="end">
      <Box onClick={() => toggleButtonCallback(!isShowPassword)} pr={1}>
        {isShowPassword ? (
          <StyledBoldTypography>Show</StyledBoldTypography>
        ) : (
          <StyledBoldTypography>Hide</StyledBoldTypography>
        )}
      </Box>
    </InputAdornment>
  )
}

export const UsernamePasswordForm = ({ loginCallback }: UsernamePasswordFormProps) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values)
      loginCallback(values.username, values.password)
    },
  })
  const [isShowPassword, setIsShowPassword] = useState(false)

  const toggleButtonCallback = (flag: boolean) => {
    setIsShowPassword(flag)
  }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Stack width="100%">
        <StyledTextField
          id="username"
          label="Phone number, username or email address"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <StyledTextField
          id="password"
          label="Password"
          type={isShowPassword ? 'text' : 'password'}
          onChange={formik.handleChange}
          value={formik.values.password}
          InputProps={{
            endAdornment: formik.values.password ? (
              <ToggleViewButton isShowPassword={isShowPassword} toggleButtonCallback={toggleButtonCallback} />
            ) : null,
          }}
        />
        <StyledButton type="submit" variant="contained">
          Log In
        </StyledButton>
      </Stack>
    </StyledForm>
  )
}
