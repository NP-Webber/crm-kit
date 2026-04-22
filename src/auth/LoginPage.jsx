import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  Alert,
  IconButton,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useAuth } from './AuthContext';

export const LoginFields = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  showPassword,
  onToggleShowPassword,
  usernameLabel = 'שם משתמש',
  passwordLabel = 'סיסמה',
  showPasswordLabel = 'הצג סיסמה',
  hidePasswordLabel = 'הסתר סיסמה',
  usernameTextFieldProps,
  passwordTextFieldProps,
  stackSx,
}) => {
  const baseFieldSx = {
    direction: 'rtl',
    '& .MuiInputBase-input': {
      textAlign: 'right',
    },
    '& .MuiInputLabel-root': {
      right: 28,
      left: 'auto',
      transformOrigin: 'top right',
    },
    '& legend': {
      textAlign: 'right',
    },
  };

  const usernameSlotProps = {
    ...(usernameTextFieldProps?.slotProps || {}),
    inputLabel: {
      ...(usernameTextFieldProps?.slotProps?.inputLabel || {}),
      shrink: true,
      sx: {
        right: 'unset',
        left: 'inherit',
        transformOrigin: 'right',
        ...usernameTextFieldProps?.slotProps?.inputLabel?.sx,
      },
    },
  };

  const passwordSlotProps = {
    ...(passwordTextFieldProps?.slotProps || {}),
    inputLabel: {
      ...(passwordTextFieldProps?.slotProps?.inputLabel || {}),
      shrink: true,
      sx: {
        right: 'unset',
        left: 'inherit',
        transformOrigin: 'right',
        ...passwordTextFieldProps?.slotProps?.inputLabel?.sx,
      },
    },
  };

  return (
    <Stack spacing={2} sx={stackSx}>
      <TextField
        label={usernameLabel}
        value={username}
        onChange={(e) => onUsernameChange(e.target.value)}
        autoComplete="username"
        required
        fullWidth
        {...usernameTextFieldProps}
        sx={[baseFieldSx, usernameTextFieldProps?.sx]}
        slotProps={usernameSlotProps}
      />

      <TextField
        label={passwordLabel}
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
        required
        fullWidth
        {...passwordTextFieldProps}
        sx={[baseFieldSx, passwordTextFieldProps?.sx]}
        slotProps={passwordSlotProps}
        InputProps={{
          ...(passwordTextFieldProps?.InputProps || {}),
          startAdornment: (
            <InputAdornment position="start" sx={{ margin: 0 }}>
              <IconButton
                onClick={onToggleShowPassword}
                aria-label={showPassword ? hidePasswordLabel : showPasswordLabel}
                size="small"
                sx={{ margin: 0, padding: 0.5 }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

/**
 * LoginPage — דף כניסה בסיסי למערכות CRM
 * כולל אפשרות הצגה/הסתרה של סיסמה.
 */
const LoginPage = ({
  title = 'כניסה למערכת',
  subtitle = 'הזן שם משתמש וסיסמה כדי להמשיך',
  submitText = 'התחבר',
  usernameLabel = 'שם משתמש',
  passwordLabel = 'סיסמה',
  showPasswordLabel = 'הצג סיסמה',
  hidePasswordLabel = 'הסתר סיסמה',
  redirectTo = '/',
  onLoginSuccess,
  onLoginError,
  containerSx,
  paperSx,
  formSx,
  titleTypographyProps,
  subtitleTypographyProps,
  usernameTextFieldProps,
  passwordTextFieldProps,
  submitButtonProps,
  errorAlertProps,
  iconProps,
  fieldsOnly = false,
}) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('יש למלא שם משתמש וסיסמה');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const user = await login(username, password);
      if (onLoginSuccess) {
        onLoginSuccess(user);
      } else {
        navigate(redirectTo, { replace: true });
      }
    } catch (err) {
      const message = err?.response?.data?.message || err?.message || 'שגיאה בהתחברות';
      setError(message);
      if (onLoginError) onLoginError(err);
    } finally {
      setLoading(false);
    }
  };

  if (fieldsOnly) {
    return (
      <LoginFields
        username={username}
        password={password}
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        showPassword={showPassword}
        onToggleShowPassword={() => setShowPassword((prev) => !prev)}
        usernameLabel={usernameLabel}
        passwordLabel={passwordLabel}
        showPasswordLabel={showPasswordLabel}
        hidePasswordLabel={hidePasswordLabel}
        usernameTextFieldProps={usernameTextFieldProps}
        passwordTextFieldProps={passwordTextFieldProps}
      />
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        ...containerSx,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: '100%',
          maxWidth: 420,
          p: { xs: 3, sm: 4 },
          borderRadius: 3,
          ...paperSx,
        }}
      >
        <Stack spacing={2.5} component="form" onSubmit={handleSubmit} sx={formSx}>
          <Stack direction="row" spacing={1.25} alignItems="center" justifyContent="center">
            <LockOutlinedIcon color="primary" {...iconProps} />
            <Typography variant="h5" fontWeight={700} {...titleTypographyProps}>
              {title}
            </Typography>
          </Stack>

          {subtitle ? (
            <Typography variant="body2" color="text.secondary" textAlign="center" {...subtitleTypographyProps}>
              {subtitle}
            </Typography>
          ) : null}

          {error ? <Alert severity="error" {...errorAlertProps}>{error}</Alert> : null}

          <LoginFields
            username={username}
            password={password}
            onUsernameChange={setUsername}
            onPasswordChange={setPassword}
            showPassword={showPassword}
            onToggleShowPassword={() => setShowPassword((prev) => !prev)}
            usernameLabel={usernameLabel}
            passwordLabel={passwordLabel}
            showPasswordLabel={showPasswordLabel}
            hidePasswordLabel={hidePasswordLabel}
            usernameTextFieldProps={usernameTextFieldProps}
            passwordTextFieldProps={passwordTextFieldProps}
          />

          <Button type="submit" variant="contained" size="large" disabled={loading} fullWidth {...submitButtonProps}>
            {loading ? <CircularProgress size={22} color="inherit" /> : submitText}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default LoginPage;