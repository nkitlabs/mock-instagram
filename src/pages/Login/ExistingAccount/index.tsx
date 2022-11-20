import { Stack } from '@mui/system'
import { InstagramLogo, StyledContainer } from 'pages/Login/components'
import { ImgProfile, LoginButton, SwitchAccountText } from './components'

export type ExistingAccountProps = {
  accountName: string
  accountImg: string
  onSwitchAccount: () => void
  onLogin: () => void
  isMobile?: boolean
}

export const ExistingAccount = ({
  accountName,
  accountImg,
  onSwitchAccount,
  onLogin,
  isMobile,
}: ExistingAccountProps) => {
  return (
    <StyledContainer isMobile={isMobile}>
      <InstagramLogo />
      <Stack alignItems="center" justifyContent="center">
        <ImgProfile src={accountImg} onClick={onLogin} />
        <LoginButton variant="contained" onClick={onLogin}>
          Continue as {accountName}
        </LoginButton>
        <SwitchAccountText accountName={accountName} onSwitchAccount={onSwitchAccount} />
      </Stack>
    </StyledContainer>
  )
}
