import { Button, styled, Typography } from '@mui/material'

export const ImgProfile = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  margin: theme.spacing(1.25, 0),
  maxWidth: 100,
  maxHeight: 100,
  objectFit: 'cover',
  border: `1px solid ${theme.palette.primary.contrastText}`,
  cursor: 'pointer',
}))

export const LoginButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}))

export type SwitchAccountTextProps = {
  accountName: string
  onSwitchAccount: () => void
}
export const SwitchAccountText = ({ accountName, onSwitchAccount }: SwitchAccountTextProps) => (
  <div style={{ marginTop: '15px', marginBottom: '15px' }}>
    <Typography variant="body2" display="inline" my={1.875}>
      Not {accountName}?
    </Typography>
    <Typography
      variant="body2"
      display="inline"
      fontWeight="bold"
      color="primary"
      onClick={onSwitchAccount}
      sx={{ cursor: 'pointer' }}
    >
      {' '}
      Switch accounts
    </Typography>
  </div>
)
