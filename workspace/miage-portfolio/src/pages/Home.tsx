import { Avatar, Box, Button, Chip, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteConfig } from '../config'

export default function Home() {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Stack spacing={2} component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="overline" color="text.secondary">{siteConfig.title}</Typography>
          <Typography variant="h3" fontWeight={700}>{siteConfig.name}</Typography>
          <Typography variant="h5" color="text.secondary">{siteConfig.role}</Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="Data" />
            <Chip label="Analytics" />
            <Chip label="Consulting" />
          </Stack>
          <Typography color="text.secondary">
            I turn data into decisions and deliver pragmatic tech solutions. Explore selected projects and my background below.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component={RouterLink} to="/projects">View Projects</Button>
            <Button component={RouterLink} to="/resume" color="secondary" variant="outlined">View Resume</Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack alignItems="center" component={motion.div} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <Avatar sx={{ width: 160, height: 160, mb: 2 }}>{siteConfig.name[0]}</Avatar>
          <Box sx={{ height: 260, width: '100%', borderRadius: 3, bgcolor: 'action.hover' }} />
        </Stack>
      </Grid>
    </Grid>
  )
}

