import { MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import NextLink from 'next/link'
import React, { FC } from 'react'

interface Props {}

export const Navbar: FC<Props> = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start'>
          <MenuOutlined />
        </IconButton>
        <NextLink href='/' passHref>
          <Link>
            <Typography variant='h6' color='white'>
              CookieMaster
            </Typography>
          </Link>
        </NextLink>
        <NextLink href='/theme-changer' passHref>
          <Link>
            <Typography variant='h6' color='white'>
              Cambiar Tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
