// src/components/RootLayout.tsx
import { AppShell, Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { DoubleHeader } from './Header/DoubleHeader';

export function RootLayout() {
  return (
    <AppShell
    >
      <AppShell.Header>
          <DoubleHeader />
      </AppShell.Header>
      <AppShell.Main>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Outlet />
        </Box>
      </AppShell.Main>
        <AppShell.Footer>
        </AppShell.Footer>
    </AppShell>
  );
}
