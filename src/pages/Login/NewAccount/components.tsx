import { Box, Button, Divider, DividerProps, Stack, styled, Typography } from '@mui/material'

type CustomDividerProps = {
  text?: string
} & DividerProps

export const CustomDivider = ({ text, children, ...props }: CustomDividerProps) => {
  if (text || children) {
    return (
      <Box sx={{ width: '100%' }}>
        <Divider flexItem {...props}>
          {text ?? children}
        </Divider>
      </Box>
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Divider {...props} />
    </Box>
  )
}

export const StyledCustomDivider = styled(CustomDivider)(({ theme }) => ({
  margin: theme.spacing(1.25, 5, 2.25),
  alignItems: 'center',
  minHeight: 0,
  fontSize: 13,
  fontFamily: theme.typography.fontFamily,
  lineHeight: '15px',
  color: theme.palette.secondary.main,
  fontWeight: 600,
  '&:before, &:after': {
    height: 2,
  },
  '.MuiDivider-wrapper': {
    margin: theme.spacing(0, 1.25),
    padding: 0,
  },
}))

export const FacebookButton = () => (
  <Stack width="100%">
    <Button
      size="small"
      sx={{
        height: 20,
        textTransform: 'none',
        padding: 0,
        margin: '8px 40px',
        '&:focus, &:active': { color: 'secondary.contrastText' },
      }}
    >
      <Stack direction="row" gap={1} alignItems="center">
        <img width={16} height={16} src="/static/logo/facebook.png" />
        <Typography color="primary.dark" variant="body2" fontWeight="bold">
          Log in with Facebook
        </Typography>
      </Stack>
    </Button>
  </Stack>
)
