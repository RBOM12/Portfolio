import { Alert, Button, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import type { FormEvent } from 'react'

export default function Contact() {
  const [open, setOpen] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setOpen(true)
  }

  return (
    <Stack spacing={2} component="form" onSubmit={onSubmit}>
      <Typography variant="h4" fontWeight={700}>Contact</Typography>
      <TextField required label="Name" name="name" />
      <TextField required type="email" label="Email" name="email" />
      <TextField required label="Message" name="message" multiline minRows={4} />
      <Button type="submit">Send</Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert severity="success" onClose={() => setOpen(false)}>Message sent! I will get back to you soon.</Alert>
      </Snackbar>
    </Stack>
  )
}

