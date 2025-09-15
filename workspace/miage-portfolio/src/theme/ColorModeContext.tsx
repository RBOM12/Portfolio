import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import type { PaletteMode } from '@mui/material'

type ColorModeContextValue = {
  mode: PaletteMode
  toggleColorMode: () => void
}

export const ColorModeContext = createContext<ColorModeContextValue>({
  mode: 'light',
  toggleColorMode: () => {},
})

type ColorModeProviderProps = {
  children: ReactNode
}

export function ColorModeProvider({ children }: ColorModeProviderProps) {
  const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const [mode, setMode] = useState<PaletteMode>(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('miage-portfolio-color-mode') : null
    if (stored === 'light' || stored === 'dark') return stored
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    try {
      window.localStorage.setItem('miage-portfolio-color-mode', mode)
    } catch {}
  }, [mode])

  const toggleColorMode = useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: mode === 'light' ? '#1565c0' : '#90caf9' },
          secondary: { main: mode === 'light' ? '#00bfa5' : '#80cbc4' },
        },
        shape: { borderRadius: 12 },
        typography: {
          fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        },
        components: {
          MuiButton: {
            defaultProps: { variant: 'contained' },
          },
        },
      }),
    [mode]
  )

  const value = useMemo(() => ({ mode, toggleColorMode }), [mode, toggleColorMode])

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

