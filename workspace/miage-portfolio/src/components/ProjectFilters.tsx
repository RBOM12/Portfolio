import { Chip, Stack } from '@mui/material'
import { useState } from 'react'

type ProjectFiltersProps = {
  tags: string[]
  onChange: (active: string[]) => void
}

export default function ProjectFilters({ tags, onChange }: ProjectFiltersProps) {
  const [active, setActive] = useState<string[]>([])

  const toggle = (tag: string) => {
    const next = active.includes(tag) ? active.filter((t) => t !== tag) : [...active, tag]
    setActive(next)
    onChange(next)
  }

  return (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {tags.map((t) => (
        <Chip key={t} label={t} onClick={() => toggle(t)} color={active.includes(t) ? 'primary' : 'default'} clickable />
      ))}
    </Stack>
  )
}

