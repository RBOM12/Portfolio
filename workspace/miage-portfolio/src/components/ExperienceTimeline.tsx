import { Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import { motion } from 'framer-motion'
import type { Experience } from '../config'

type ExperienceTimelineProps = {
  items: Experience[]
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <Stack spacing={3}>
      {items.map((exp, index) => (
        <Grid
          key={`${exp.company}-${exp.role}-${index}`}
          container
          spacing={2}
          component={motion.div}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <Grid item xs={12} md={3}>
            <Stack>
              <Typography variant="subtitle2" color="text.secondary">
                {exp.startDate} — {exp.endDate}
              </Typography>
              <Typography variant="h6">{exp.company}</Typography>
              {exp.location && (
                <Typography variant="body2" color="text.secondary">{exp.location}</Typography>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} md={9}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>{exp.role}</Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>{exp.summary}</Typography>
                {exp.achievements && exp.achievements.length > 0 && (
                  <Stack component="ul" sx={{ pl: 2, mt: 1 }}>
                    {exp.achievements.map((a, i) => (
                      <Typography key={i} component="li" variant="body2" color="text.secondary">{a}</Typography>
                    ))}
                  </Stack>
                )}
                {exp.skills && exp.skills.length > 0 && (
                  <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                    {exp.skills.map((s) => (
                      <Chip key={s} label={s} size="small" />
                    ))}
                  </Stack>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </Stack>
  )
}

