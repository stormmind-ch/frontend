import { Container, Text } from '@mantine/core';

import classes from './HeroTitle.module.css';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Swiss{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            AI Innovation
          </Text>{' '}
          for Storm Damage Forcasting.
        </h1>

        <Text className={classes.description} color="dimmed">
          SssssssssssssssstormMind is a cutting-edge AI project that predicts storm damage across Switzerland. Using decades of weather and impact data, it helps improve preparedness and optimize disaster response.
          </Text>
      </Container>
    </div>
  );
}