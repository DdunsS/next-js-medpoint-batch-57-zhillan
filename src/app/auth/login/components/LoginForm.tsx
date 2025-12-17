'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';
import { loginAction } from '../actions';
import { Input } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setIsLoading(true);
    try {
      await loginAction(formData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan saat login. Pastikan email dan password benar.';
      setError(errorMessage);
      console.error('Login error:', err);
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      {/* Logo top-left - Fixed position at top-left */}
      <Box sx={{ position: 'fixed', top: 4, left: { xs: 4, md: 6 }, zIndex: 10 }}>
        <Image src="/logos/ic-logo-mediverse.png" alt="mediverse logo" width={120} height={36} />
      </Box>

      {/* Title and description */}
      <Box sx={{ maxWidth: 520, paddingRight: { md: 6 }, paddingY: { xs: 4, md: 8 }, paddingLeft: { xs: 4, md: 0 } }}>
        
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            marginBottom: 1.5,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#111827',
          }}
        >
          Selamat Datang
        </Typography>

        <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 4 }}>
          Masuk dan kelola dashboard Mediverse Anda sekarang
        </Typography>

        {error && (
          <Alert severity="error" sx={{ marginBottom: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" action={handleSubmit} sx={{ mb: 2 }}>
          
          {/* Email */}
          <Box sx={{ marginBottom: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 500, marginBottom: 1, color: '#111827' }}
            >
              Email
            </Typography>

            <Input
              fullWidth
              id="email"
              name="email"
              type="email"
              placeholder="Masukkan email"
              required
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: '#7C3AED', marginRight: 8 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Password */}
          <Box sx={{ marginBottom: 2.5 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 500, marginBottom: 1, color: '#111827' }}
            >
              Kata Sandi
            </Typography>

            <Input
              fullWidth
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Masukkan kata sandi"
              required
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faKey} style={{ color: '#7C3AED', marginRight: 8 }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ textAlign: 'right', mb: 3 }}>
            <Typography variant="body2">
              <a
                href="/auth/forgot-password"
                style={{
                  color: '#7C3AED',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Lupa Kata Sandi?
              </a>
            </Typography>
          </Box>

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            disabled={isLoading}
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
              color: 'white',
              fontWeight: 600,
              padding: '12px 0',
              fontSize: '1rem',
              borderRadius: '999px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              '&:hover': {
                background: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)',
              },
              '&:disabled': {
                background: 'linear-gradient(135deg, #9CA3AF 0%, #B4BCC4 100%)',
                cursor: 'not-allowed',
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1.5,
            }}
          >
            {isLoading ? (
              <>
                <CircularProgress size={20} color="inherit" />
                MEMPROSES...
              </>
            ) : (
              <>
                MASUK SEKARANG
                <FontAwesomeIcon icon={faArrowRightToBracket} style={{ fontSize: '0.875rem' }} />
              </>
            )}
          </Button>

        </Box>
      </Box>
    </Box>
  );
}
