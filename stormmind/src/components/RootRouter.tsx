// src/components/RootLayout.tsx
import { AppShell, Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { DoubleHeader } from './Header/DoubleHeader';

export function RootLayout() {
  return (
    <AppShell
      header={{ height: 84 }}
      padding="md"
    >
      <AppShell.Header>
        <DoubleHeader />
      </AppShell.Header>
      <AppShell.Main>
        <Box
          style={{
            height: 'calc(100vh - 84px)', // Subtract header height
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Outlet />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
