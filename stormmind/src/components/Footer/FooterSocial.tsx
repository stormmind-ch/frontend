import { IconBrandGithub } from '@tabler/icons-react'; // or your custom GithubIcon
import { ActionIcon, Container, Group } from '@mantine/core';
import classes from './FooterSocial.module.css';
import logo from '../../assets/logo.svg';

export function FooterSocial() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <img src={logo} alt="Logo" className={classes.logo} />
                <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
                    <a
                        href="https://github.com/stormmind-ch"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ActionIcon size="lg" color="gray" variant="subtle">
                            <IconBrandGithub size={24} />
                        </ActionIcon>
                    </a>
                </Group>
            </Container>
        </div>
    );
}
