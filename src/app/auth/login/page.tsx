import Box from '@mui/material/Box';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { APP_DASHBOARD } from '@/constants';
import { LoginForm, HeroSection } from './components';

export default async function LoginPage() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect(APP_DASHBOARD);
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Left: Form (center vertically, push toward hero) */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: { xs: 4, md: 6 },
          backgroundColor: '#ffffff',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '480px', mr: { xs: 0, md: 6 } }}>
          <LoginForm />
        </Box>
      </Box>

      {/* Right: Hero */}
      <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'stretch' }}>
        <HeroSection />
      </Box>
    </Box>
  );
}
