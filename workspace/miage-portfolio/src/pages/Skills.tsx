import { Card, CardContent, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/GridLegacy'
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const skills = [
  { name: 'Python', value: 30, color: '#1565c0' },
  { name: 'SQL', value: 25, color: '#2e7d32' },
  { name: 'Data Viz', value: 20, color: '#6a1b9a' },
  { name: 'Consulting', value: 15, color: '#ef6c00' },
  { name: 'Cloud/DevOps', value: 10, color: '#00838f' },
]

export default function Skills() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Skills Distribution</Typography>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={skills} dataKey="value" nameKey="name" label outerRadius={100}>
                    {skills.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <Typography variant="h6">Core Competencies</Typography>
          <Typography color="text.secondary">Data analysis, data modeling, ETL, dashboarding (Power BI/Tableau), Python (pandas, numpy), SQL, API integrations.</Typography>
          <Typography color="text.secondary">Consulting mindset: requirements gathering, stakeholder communication, value-driven delivery.</Typography>
          <Typography color="text.secondary">Complementary: version control (git), basic cloud, CI/CD awareness.</Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

