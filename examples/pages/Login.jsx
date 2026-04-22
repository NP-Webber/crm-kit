import React, { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { LoginPage, LoginFields } from '@crm-kit/core';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack spacing={5} sx={{ py: 4 }}>
      <LoginPage
        redirectTo="/customers"
        title="כניסה ל-CRM Demo"
        subtitle="התחברו למערכת עם העיצוב של הארגון שלכם"
        containerSx={{
          background: 'linear-gradient(135deg, #f4f7fb 0%, #e9eef6 100%)',
        }}
        paperSx={{
          border: '1px solid #d8e1ee',
          boxShadow: '0 16px 40px rgba(17, 43, 77, 0.14)',
        }}
        iconProps={{ sx: { color: '#0f5c5c' } }}
        titleTypographyProps={{ sx: { color: '#0f2742' } }}
        submitButtonProps={{
          sx: {
            backgroundColor: '#0f5c5c',
            '&:hover': { backgroundColor: '#0c4c4c' },
          },
        }}
        usernameTextFieldProps={{
          sx: {
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0f5c5c',
            },
          },
        }}
        passwordTextFieldProps={{
          sx: {
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0f5c5c',
            },
          },
        }}
      />

      <Box sx={{ maxWidth: 420, mx: 'auto', width: '100%', p: 3, borderRadius: 2, background: '#fff' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          דוגמה להטמעה חלקית: רק שדות התחברות
        </Typography>

        <LoginFields
          username={username}
          password={password}
          onUsernameChange={setUsername}
          onPasswordChange={setPassword}
          showPassword={showPassword}
          onToggleShowPassword={() => setShowPassword((prev) => !prev)}
          usernameTextFieldProps={{ size: 'small' }}
          passwordTextFieldProps={{ size: 'small' }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => console.log('Submit from host page', { username, password })}
        >
          התחבר מתוך הדף המארח
        </Button>
      </Box>
    </Stack>
  );
};

export default Login;
