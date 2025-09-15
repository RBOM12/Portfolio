export type SocialLink = {
  label: string
  url: string
}

export type SiteConfig = {
  name: string
  title: string
  role: string
  location?: string
  email?: string
  socials: {
    linkedin?: string
    github?: string
    twitter?: string
    portfolio?: string
  }
  resumePath: string
  experiences?: Experience[]
}

export type Experience = {
  company: string
  role: string
  location?: string
  startDate: string
  endDate: string | 'Present'
  summary: string
  achievements?: string[]
  skills?: string[]
}

export const siteConfig: SiteConfig = {
  name: 'Romain Brochet',
  title: 'MIAGE Student — Data & IT Consulting',
  role: 'Aspiring Data Analyst & IT Consultant',
  location: 'France',
  email: 'contact@example.com',
  socials: {
    linkedin: 'https://www.linkedin.com/in/your-linkedin',
    github: 'https://github.com/your-github',
  },
  resumePath: '/CV_Romain_Brochet.pdf',
  experiences: [
    {
      company: 'Company A',
      role: 'Data Analyst Intern',
      location: 'Paris, FR',
      startDate: 'Apr 2024',
      endDate: 'Sep 2024',
      summary: 'Built BI dashboards and automated reporting to support sales and operations.',
      achievements: [
        'Delivered 10+ Power BI dashboards with DAX measures and drill-through',
        'Reduced monthly reporting time by 60% via Python automation',
      ],
      skills: ['Power BI', 'DAX', 'SQL', 'Python', 'pandas'],
    },
    {
      company: 'University Projects',
      role: 'Student Consultant',
      location: 'Nantes, FR',
      startDate: 'Sep 2023',
      endDate: 'Jun 2024',
      summary: 'Delivered case studies in analytics and IT consulting as part of MIAGE program.',
      achievements: [
        'Designed a data model and ETL for a retail dataset',
        'Presented findings and recommendations to stakeholders',
      ],
      skills: ['SQL', 'Data Modeling', 'Consulting', 'Presentation'],
    },
  ],
}

