import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Rules, Systems, Partnership, Hero, Counter, Wil } from './components';

const Education = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Counter />
      </Container>
      <Container>
        <Wil />
      </Container>
      <Container>
        <Systems />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container maxWidth={800}>
          <Rules />
        </Container>
      </Box>
      <Container>
        <Partnership />
      </Container>
    </Box>
  );
};

export default Education;