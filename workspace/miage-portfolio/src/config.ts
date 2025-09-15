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
      company: 'ETIC Consulting & DEV',
      role: 'Consultant / Attaché d’étude (Stage/Alternance)',
      location: 'France',
      startDate: '2024',
      endDate: '2026',
      summary: 'Recherche TEM et évaluation de la faisabilité d’un logiciel de gestion des dépenses Télécoms. Production de reportings et participation aux instances de pilotage.',
      achievements: [
        'Recherche TEM : évaluation des possibilités de développement d’un logiciel de gestion des dépenses Télécoms',
        'Création de rapports Power BI pour le suivi des dépenses et indicateurs clés',
        'Participation à des COPIL pour le suivi projet et la prise de décision',
        'Création d’une base de données pour centraliser et structurer la donnée Télécom',
      ],
      skills: ['Power BI', 'DAX', 'SQL', 'Conception Base de Données', 'TEM', 'Pilotage', 'Stakeholder Management'],
    },
    {
      company: 'UPSILON (Junior-Entreprise)',
      role: 'Vice-Président / Directeur Opérationnel',
      location: 'France',
      startDate: '2024',
      endDate: 'Present',
      summary: 'Direction opérationnelle d’une Junior-Entreprise avec pilotage d’équipe, prospection et delivery des études.',
      achievements: [
        'Management d’une équipe pluridisciplinaire',
        'Prospection et suivi d’études pour des clients',
        'Organisation d’événements internes et externes',
      ],
      skills: ['Leadership', 'Gestion de Projet', 'Relation Client', 'Organisation Événementielle'],
    },
    {
      company: 'ATEM',
      role: 'Trésorier',
      location: 'France',
      startDate: '2024',
      endDate: 'Present',
      summary: 'Gestion financière et comptable de l’association.',
      achievements: [
        'Gestion des comptes et de la trésorerie',
      ],
      skills: ['Comptabilité', 'Gestion Financière', 'Trésorerie'],
    },
    {
      company: 'H3P-Orcom',
      role: 'Consultant Auditeur (Stage)',
      location: 'France',
      startDate: 'Jun 2022',
      endDate: 'Jul 2022',
      summary: 'Audit comptable et contrôle de la qualité des données financières pour assurer intégrité et conformité.',
      achievements: [
        'Audit comptable d’entreprise : intégrité et conformité des procédures financières',
        'Vérification qualité comptable : précision et fiabilité des données financières',
        'Supervision des rapports rendus : conseils et gestion des problématiques liées à l’audit',
        'Extraction et gestion de la donnée pour la prise de décision',
      ],
      skills: ['Audit', 'Contrôle Interne', 'Excel', 'Analyse de Données', 'Reporting', 'Compliance'],
    },
    {
      company: 'Keolis',
      role: 'Comptable (Stage)',
      location: 'France',
      startDate: '2021',
      endDate: '2021',
      summary: 'Saisie et contrôle des écritures comptables et support à la fiabilité des données.',
      achievements: [
        'Écriture comptable : saisie des transactions financières',
        'Vérification qualité comptable',
      ],
      skills: ['Comptabilité', 'Saisie', 'ERP', 'Contrôle Qualité'],
    },
  ],
}

