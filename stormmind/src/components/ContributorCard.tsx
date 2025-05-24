import { Card, Image, Text } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
interface ContributorCardProps {
    name: string;
    linkedin: string;
    github: string;
    imageUrl: string;
    text: string;
}

export function ContributorCard({name, linkedin, github, imageUrl, text}: ContributorCardProps) {
    return (
        <Card
            shadow="sm"
            padding="xl"
            component="a"
            target="_blank"
        >
            <Card.Section>
                <div style={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
                    <Image
                        src={imageUrl}
                        alt={name}
                        fit="contain"
                        height="100%"
                        width="100%"
                        style={{ maxWidth: '600px' }}
                    />
                </div>
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
                {name}
            </Text>
            <Text>
                {text}
            </Text>
            <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <IconBrandLinkedin
                        size={40}
                        stroke={1.5}
                        color="var(--mantine-color-blue-filled)"
                    />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub
                        size={40}
                        stroke={1.5}
                        color="black"
                    />
                </a>
            </div>
        </Card>
    );
}