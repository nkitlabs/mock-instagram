import { Fade, Stack } from '@mui/material'
import { useEffect, useState } from 'react'

const EXAMPLE_IMAGES = [
  '/static/login/ig-example-1.png',
  '/static/login/ig-example-2.png',
  '/static/login/ig-example-3.png',
  '/static/login/ig-example-4.png',
]

export const ExampleImages = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => (count + 1) % EXAMPLE_IMAGES.length)
    }, 5000)

    return () => clearInterval(timerId)
  }, [])
  return (
    <Stack
      width="380.32px"
      display="block"
      alignSelf="center"
      height="582px"
      mr="32px"
      mb="12px"
      sx={{
        backgroundSize: '468.32px 634.15px',
        backgroundImage: 'url(/static/login/phone-ig-background.png)',
        backgroundPositionX: '-46px',
      }}
    >
      {EXAMPLE_IMAGES.map((path, idx) => (
        <Fade in={count === idx} timeout={2000} key={`fade-${path}`}>
          <img
            src={path}
            style={{ position: 'absolute', width: '252px', margin: '26px 0 0 111.5px', height: '540.3px' }}
          />
        </Fade>
      ))}
    </Stack>
  )
}
