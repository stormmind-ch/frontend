import { useState } from 'react';
import { Anchor, Box, Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../assets/logo.svg';
import classes from './DoubleHeader.module.css';


const mainLinks = [
  { link: '#', label: 'Home' },
  { link: '#', label: 'Forcasting' },
  { link: '#', label: 'About Us' },
];

export function DoubleHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
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