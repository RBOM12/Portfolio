import { Stack, Typography } from '@mui/material'
import ExperienceTimeline from '../components/ExperienceTimeline'
import { siteConfig } from '../config'

export default function Experience() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" fontWeight={700}>Experience</Typography>
      <Typography color="text.secondary">
        Selected roles and projects demonstrating impact, responsibility, and skills.
      </Typography>
      {siteConfig.experiences && <ExperienceTimeline items={siteConfig.experiences} />}
    </Stack>
  )
}

