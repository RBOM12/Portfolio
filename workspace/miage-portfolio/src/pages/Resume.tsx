import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { siteConfig } from '../config'

export default function Resume() {
  const resumeUrl = siteConfig.resumePath
  return (
    <Stack spacing={2}>
      <Typography variant="h4" fontWeight={700}>Resume</Typography>
      <Typography color="text.secondary">Download my resume or view key highlights below.</Typography>
      <Button variant="contained" color="secondary" href={resumeUrl} target="_blank" rel="noopener">Download PDF</Button>
      <Divider />
      <Box sx={{ borderRadius: 2, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
        <iframe title="Resume PDF" src={resumeUrl} style={{ width: '100%', height: 720, border: 0 }} />
      </Box>
      <Stack spacing={1}>
        <Typography variant="h6">Highlights</Typography>
        <Typography color="text.secondary">MIAGE coursework: databases, algorithms, business management, statistics.</Typography>
        <Typography color="text.secondary">Projects: BI dashboards, data pipelines, consulting case studies.</Typography>
        <Typography color="text.secondary">Languages: French (native), English (professional).</Typography>
      </Stack>
    </Stack>
  )
}

