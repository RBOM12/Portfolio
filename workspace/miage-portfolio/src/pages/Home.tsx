import { Box, Button, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Stack spacing={2} component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="overline" color="text.secondary">MIAGE Student</Typography>
          <Typography variant="h3" fontWeight={700}>
            Aspiring Data Analyst & IT Consultant
          </Typography>
          <Typography color="text.secondary">
            I am a MIAGE student passionate about data, analytics, and technology consulting. I like turning data into decisions and building reliable systems.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component={RouterLink} to="/projects">View Projects</Button>
            <Button component={RouterLink} to="/contact" color="secondary" variant="outlined">Contact Me</Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box component={motion.div} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} sx={{ height: 300, borderRadius: 3, bgcolor: 'action.hover' }} />
      </Grid>
    </Grid>
  )
}

