import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import PhotoIcon from '@mui/icons-material/Photo';

const Highlights = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Built for Developers',
            subtitle:
              'BrickMMO is programmed so anyone can join in and build their own interactive smart city!',
            link: {
              text: 'Get Started',
              url: '/get-started',
            },
            icon: <CodeIcon />,
          },
          {
            title: 'Designed for Education',
            subtitle: (
              <Typography>
                80% of BrickMMO code has been develpoed by students using a{' '}
                <Link href="https://wic.brickmmo.com" underline="none">
                  WIC
                </Link>{' '}
                framework.
              </Typography>
            ),
            link: {
              text: 'Education',
              url: '/educatiun',
            },
            icon: <SchoolIcon />,
          },
          {
            title: 'Custom Builds',
            subtitle: 'Custom interactive experiences built with LEGO® bricks!',
            link: {
              text: 'Projects',
              url: '/commissions',
            },
            icon: <PhotoIcon />,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height={'100%'}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="textSecondary">
                  {item.subtitle}
                </Typography>
                <Box marginTop={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    component="a"
                    href={item.link.url}
                  >
                    {item.link.text}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Highlights;
