import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';

export default function Header() {
  const isMobile = screen.width < 1000;

  const router = useRouter();

  return (
    <header>
      <AppBar position='fixed' style={{ backgroundColor: '#ef5350', border: 0 }}>
        <Toolbar style={{ position: 'relative' }}>
          <div style={{ flexGrow: 1 }}>{isMobile && <MobileMenu />}</div>
          <Button
            onClick={() => router.push('/')}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              textTransform: 'none',
              height: 64,
            }}
          >
            <h4
              style={{
                color: 'white',
                margin: 0,
                fontSize: '2.1rem',
              }}
            >
              PolutaDB
            </h4>
          </Button>
          {!isMobile && <Menu />}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </header>
  );
}
