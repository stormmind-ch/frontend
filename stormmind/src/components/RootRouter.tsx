import { Outlet } from 'react-router-dom';
import { DoubleHeader } from '../components/Header/DoubleHeader';

export function RootLayout() {
  return (
    <>
      <DoubleHeader />
      <Outlet /> {/* This renders the matched child route */}
    </>
  );
}
