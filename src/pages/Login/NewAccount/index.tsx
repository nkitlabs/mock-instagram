import { Box, Link as MuiLink, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { InstagramLogo, StyledContainer } from 'pages/Login/components'
import { UsernamePasswordForm } from 'pages/Login/UsernamePasswordForm'
import { FacebookButton, StyledCustomDivider } from './components'

export type NewAccountProps = {
  isMobile?: boolean
}
export const NewAccount = ({ isMobile }: NewAccountProps) => {
  const loginCallback = (username: string, password: string) => {
    console.log(username, password)
  }

  return (
    <Stack>
      <Stack gap={1.25}>
        <StyledContainer isMobile={isMobile}>
          <InstagramLogo />
          <Stack justifyContent="center" alignItems="center" width="100%" mb={1.25}>
            <UsernamePasswordForm loginCallback={loginCallback} />
            <StyledCustomDivider text="OR" />
            <FacebookButton />
            <Link href="/test">
              <Box width="100%" sx={{ marginTop: '12px', cursor: 'pointer' }}>
                <Typography color="primary.darken" align="center" variant="caption" display="block">
                  Forgotten your password?
                </Typography>
              </Box>
            </Link>
          </Stack>
        </StyledContainer>
        <StyledContainer isMobile={isMobile} sx={{ marginBottom: '10px' }}>
          <div style={{ margin: '15px' }}>
            <Typography align="center" variant="body2" display="inline">
              Don't have an account?{' '}
            </Typography>
            <MuiLink href="/" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
              <Typography color="primary" align="center" variant="body2" display="inline" fontWeight="bold">
                Sign up
              </Typography>
            </MuiLink>
          </div>
        </StyledContainer>
      </Stack>
      {isMobile ? null : (
        <Stack>
          <Typography align="center" variant="body2" display="inline" mx={2.5} my={1.25}>
            Get the app.
          </Typography>
          <Stack direction="row" my={1.25} justifyContent="center" gap={1}>
            <MuiLink href="/" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
              <img src="/static/login/download-app-store.png" height={40} />
            </MuiLink>
            <MuiLink href="/" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
              <img src="/static/login/download-google-play.png" height={40} />
            </MuiLink>
          </Stack>
        </Stack>
      )}
    </Stack>
  )
}
