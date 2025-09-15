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
}

