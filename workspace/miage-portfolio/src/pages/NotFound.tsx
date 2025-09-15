import { Button, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <Stack spacing={2} alignItems="start">
      <Typography variant="h4" fontWeight={700}>Page not found</Typography>
      <Typography color="text.secondary">The page you are looking for does not exist.</Typography>
      <Button component={RouterLink} to="/">Go Home</Button>
    </Stack>
  )
}

