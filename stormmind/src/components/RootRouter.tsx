// src/components/RootLayout.tsx
import { AppShell, Box, Burger, Group, UnstyledButton } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { DoubleHeader } from './Header/DoubleHeader';

export function RootLayout() {
  return (
    <AppShell
      header={{ height: 84 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <DoubleHeader />
        </Group>
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
    </AppShell>
  );
}
