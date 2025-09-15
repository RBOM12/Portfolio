import { useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { AppBar, Box, Container, Divider, Drawer, IconButton, Link, List, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import BarChartIcon from '@mui/icons-material/BarChart'
import WorkIcon from '@mui/icons-material/Work'
import DescriptionIcon from '@mui/icons-material/Description'
import EmailIcon from '@mui/icons-material/Email'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from '../theme/ColorModeContext'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { siteConfig } from '../config'

type MainLayoutProps = {
  children: ReactNode
}

const navItems = [
  { label: 'Home', to: '/', icon: <HomeIcon /> },
  { label: 'About', to: '/about', icon: <PersonIcon /> },
  { label: 'Skills', to: '/skills', icon: <BarChartIcon /> },
  { label: 'Projects', to: '/projects', icon: <WorkIcon /> },
  { label: 'Experience', to: '/experience', icon: <WorkIcon /> },
  { label: 'Resume', to: '/resume', icon: <DescriptionIcon /> },
  { label: 'Contact', to: '/contact', icon: <EmailIcon /> },
]

export default function MainLayout({ children }: MainLayoutProps) {
  const [open, setOpen] = useState(false)
  const isMdUp = useMediaQuery('(min-width:900px)')
  const { pathname } = useLocation()
  const colorMode = useContext(ColorModeContext)

  const drawer = (
    <Box role="presentation" onClick={() => setOpen(false)} sx={{ width: 280 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2 }}>
        <Typography variant="h6">{siteConfig.name}</Typography>
        <Stack direction="row" spacing={1}>
          {siteConfig.socials.linkedin && (
            <IconButton component={Link} href={siteConfig.socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          )}
          {siteConfig.socials.github && (
            <IconButton component={Link} href={siteConfig.socials.github} target="_blank" rel="noopener" aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item.to} component={RouterLink} to={item.to} selected={pathname === item.to}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <AppBar position="fixed" color="default" enableColorOnDark>
        <Toolbar>
          {!isMdUp && (
            <IconButton color="inherit" edge="start" onClick={() => setOpen(true)} aria-label="open navigation">
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {siteConfig.title}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            {siteConfig.socials.linkedin && (
              <IconButton component={Link} href={siteConfig.socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            )}
            {siteConfig.socials.github && (
              <IconButton component={Link} href={siteConfig.socials.github} target="_blank" rel="noopener" aria-label="GitHub">
                <GitHubIcon />
              </IconButton>
            )}
          </Stack>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit" aria-label="toggle theme">
            {colorMode.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { md: 280 }, flexShrink: { md: 0 } }}>
        {isMdUp ? (
          <Drawer variant="permanent" open sx={{ '& .MuiDrawer-paper': { width: 280, boxSizing: 'border-box', top: 64 } }}>
            {drawer}
          </Drawer>
        ) : (
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)} ModalProps={{ keepMounted: true }} sx={{ '& .MuiDrawer-paper': { width: 280 } }}>
            {drawer}
          </Drawer>
        )}
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="lg">
          {children}
        </Container>
        <Box component="footer" sx={{ py: 4 }}>
          <Divider sx={{ mb: 2 }} />
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ color: 'text.secondary' }}>
            <Typography variant="body2">© {new Date().getFullYear()} {siteConfig.name}</Typography>
            <Stack direction="row" spacing={1}>
              {siteConfig.socials.linkedin && (
                <IconButton component={Link} href={siteConfig.socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" size="small">
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              )}
              {siteConfig.socials.github && (
                <IconButton component={Link} href={siteConfig.socials.github} target="_blank" rel="noopener" aria-label="GitHub" size="small">
                  <GitHubIcon fontSize="small" />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

