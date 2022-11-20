import { Box, Link as MuiLink, Stack, styled } from '@mui/material'

export const StyledContainer = styled(Stack, {
  shouldForwardProp: (props: string) => !['isMobile'].includes(props),
})<{ isMobile?: boolean }>(({ isMobile, theme }) => {
  if (isMobile) {
    return {
      margin: theme.spacing(0),
      width: 320,
      padding: theme.spacing(1.25, 0),
      alignItems: 'center',
    }
  }
  return {
    border: `1px solid ${theme.palette.secondary.light}`,
    margin: theme.spacing(0),
    width: 348,
    padding: theme.spacing(1.25, 0),
    alignItems: 'center',
    background: theme.palette.primary.contrastText,
  }
})

export const InstagramLogo = () => (
  <Box mt={4.5} mb={1.5} display="flex" alignItems="center" justifyContent="center" height="55px">
    <MuiLink href="/" sx={{ cursor: 'pointer', display: 'contents', color: 'unset' }}>
      <img src="/static/logo/ig_full.png" width="175px" />
    </MuiLink>
  </Box>
)
