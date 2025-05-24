import { useState } from 'react';
import {  Box, Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../assets/logo_with_text.svg';
import classes from './DoubleHeader.module.css';
import {Link} from 'react-router-dom';


const mainLinks = [
  { link: '/', label: 'Home' },
  { link: '/Forecast', label: 'Forcasting' },
    {link: '/Report', label: 'Report'},
  { link: '/AboutUs', label: 'About Us' }

];

export function DoubleHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
      <Link
          to={item.link}
          key={item.label}
          className={classes.mainLink}
          data-active={index === active || undefined}
          onClick={() => setActive(index)}
      >
          {item.label}
      </Link>
  ));


  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <Box className={classes.links} visibleFrom="sm">
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />
      </Container>

    </header>
  );
}