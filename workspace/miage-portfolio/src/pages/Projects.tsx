import { Card, CardActions, CardContent, CardHeader, Chip, Button, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import { useMemo, useState } from 'react'
import ProjectFilters from '../components/ProjectFilters'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

type Project = {
  title: string
  description: string
  tags: string[]
  sourceUrl?: string
  demoUrl?: string
}

const projects: Project[] = [
  {
    title: 'Sales Dashboard',
    description: 'Built interactive BI dashboards to analyze sales, margins, and forecasts.',
    tags: ['Power BI', 'DAX', 'SQL'],
    demoUrl: 'https://example.com/sales-dashboard',
  },
  {
    title: 'Customer Churn Analysis',
    description: 'Explored churn drivers and built a simple predictive model.',
    tags: ['Python', 'pandas', 'scikit-learn'],
    sourceUrl: 'https://github.com/your-github/churn-analysis',
  },
  {
    title: 'Process Automation',
    description: 'Automated data extraction and reporting with Python scripts.',
    tags: ['Python', 'APIs', 'Scheduling'],
    sourceUrl: 'https://github.com/your-github/process-automation',
  },
]

export default function Projects() {
  const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags))), [])
  const [activeTags, setActiveTags] = useState<string[]>([])
  const filtered = useMemo(() => (activeTags.length ? projects.filter((p) => activeTags.every((t) => p.tags.includes(t))) : projects), [activeTags])

  return (
    <Stack spacing={2}>
      <Typography variant="h4" fontWeight={700}>Projects</Typography>
      <ProjectFilters tags={allTags} onChange={setActiveTags} />
      <Grid container spacing={3}>
        {filtered.map((p) => (
          <Grid key={p.title} item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader title={p.title} />
              <CardContent>
                <Typography color="text.secondary">{p.description}</Typography>
                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                  {p.tags.map((t) => (
                    <Chip key={t} label={t} size="small" />
                  ))}
                </Stack>
              </CardContent>
              <CardActions>
                {p.demoUrl && (
                  <Button size="small" endIcon={<LaunchIcon />} href={p.demoUrl} target="_blank" rel="noopener">Demo</Button>
                )}
                {p.sourceUrl && (
                  <Button size="small" variant="outlined" endIcon={<GitHubIcon />} href={p.sourceUrl} target="_blank" rel="noopener">Source</Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

