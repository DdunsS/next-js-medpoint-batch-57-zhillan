'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile) return null;

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: 2, md: 6 },
        position: 'relative',
        background: 'transparent',
      }}
    >
      {/* Card-like hero box (not full height) */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 680,
          borderRadius: 10,
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #311D74 0%, #A12DBD 100%)',
          color: '#fff',
          boxShadow: '0 10px 30px rgba(18,0,49,0.35)',
          padding: { xs: 8, md: 12 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo floating above the card (centered) */}
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 160,
            height: 48,
            pointerEvents: 'none',
          }}
        >
          <Image src="/logos/ic-logo-mediverse.png" alt="mediverse logo" width={140} height={42} />
        </Box>

        {/* Hero image */}
        <Box
          sx={{
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            mb: 2,
            mt: 6,
          }}
        >
          <Image
            src='/images/HeroImage.jpg'
            alt='Healthcare Assistant'
            width={320}
            height={320}
            style={{ objectFit: 'cover' }}
          />
        </Box>

        {/* Heading */}
        <Box sx={{ textAlign: 'center', mt: 2, mb: 1, width: '100%' }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.6rem' },
              lineHeight: 1.05,
              fontWeight: 400,
              letterSpacing: 0.1,
            }}
          >
            Your Personal
            <br />
            Healthcare Assistant
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
