import { Stack } from '@mui/material'
import { useBreakpoints } from 'hooks/useBreakpoints'
import { ExampleImages } from 'pages/Login//ExampleImages'
import { ExistingAccount } from 'pages/Login//ExistingAccount'
import { NewAccount } from 'pages/Login//NewAccount'
import { useState } from 'react'

export const LoginPage = () => {
  const [showExistingUserLogin, setShowExistingUserLogin] = useState(true)

  const { downMd: isMobile } = useBreakpoints()

  const accountImgSrc = '/static/login/default_profile_pic.png'
  const accountName = 'default_username'
  return (
    <Stack height="100vh" justifyContent="center" alignItems="center" direction="row">
      {isMobile ? null : <ExampleImages />}
      {showExistingUserLogin ? (
        <ExistingAccount
          accountName={accountName}
          accountImg={accountImgSrc}
          onSwitchAccount={() => {
            setShowExistingUserLogin(false)
          }}
          onLogin={() => {}}
          isMobile={isMobile}
        />
      ) : (
        <NewAccount isMobile={isMobile} />
      )}
    </Stack>
  )
}
