import { Stack, Typography } from '@mui/material'
import { siteConfig } from '../config'
import Grid from '@mui/material/GridLegacy'

export default function About() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <Stack spacing={2}>
          <Typography variant="h4" fontWeight={700}>About Me</Typography>
          <Typography color="text.secondary">
            I am a MIAGE student seeking an internship or junior role in data analytics or IT consulting. My training combines computer science, applied mathematics, and business management.
          </Typography>
          <Typography color="text.secondary">
            Interests: data visualization, BI, process optimization, and delivering value through technology for clients.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack>
          <Typography variant="h6">Education</Typography>
          <Typography color="text.secondary">MIAGE - Methods of Applied Computer Science to Business Management</Typography>
          <Typography variant="h6" sx={{ mt: 3 }}>Recent Experience</Typography>
          {siteConfig.experiences?.slice(0, 2).map((e) => (
            <Stack key={`${e.company}-${e.role}`} sx={{ mt: 1 }}>
              <Typography variant="subtitle2">{e.role} — {e.company}</Typography>
              <Typography variant="caption" color="text.secondary">{e.startDate} — {e.endDate}</Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Grid>
  )
}

