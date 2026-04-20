// CRM KIT — PersonalDetailsForm: premium personal details card
import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Collapse,
  Alert,
  CircularProgress,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/EditRounded';
import SaveIcon from '@mui/icons-material/CheckRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import PersonIcon from '@mui/icons-material/PersonRounded';
import LockIcon from '@mui/icons-material/LockRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SettingsCard from './SettingsCard';
import FieldRow from './FieldRow';
import { PA_COLORS, PA_SPACING, PA_TYPOGRAPHY, PA_RADIUS, PA_TRANSITIONS } from './constants';

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: `${PA_RADIUS.md}px`,
    fontFamily: PA_TYPOGRAPHY.fontFamily,
    fontSize: '0.875rem',
    backgroundColor: '#fff',
    transition: PA_TRANSITIONS.fast,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: PA_COLORS.cardBorder,
      transition: PA_TRANSITIONS.fast,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: PA_COLORS.textMuted,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: PA_COLORS.accent,
      borderWidth: '1.5px',
    },
    '&.Mui-focused': {
      boxShadow: `0 0 0 3px ${PA_COLORS.accentLight}`,
    },
    '&.Mui-disabled': {
      backgroundColor: PA_COLORS.sectionBg,
      opacity: 0.7,
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: PA_TYPOGRAPHY.fontFamily,
    fontSize: '0.8125rem',
  },
};

export default function PersonalDetailsForm({
  user,
  onSaveProfile,
  onChangePassword,
  saving = false,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState({});
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success'|'error', message }

  useEffect(() => {
    if (user) {
      setEdited({
        username: user.username || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
      });
    }
  }, [user]);

  const handleSave = async () => {
    if (!onSaveProfile) return;
    const result = await onSaveProfile(edited);
    if (result?.success) {
      setIsEditing(false);
      setFeedback({ type: 'success', message: 'הפרטים נשמרו בהצלחה' });
    } else {
      setFeedback({ type: 'error', message: result?.message || 'שגיאה בשמירה' });
    }
    setTimeout(() => setFeedback(null), 4000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEdited({
      username: user.username || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      phone: user.phone || '',
    });
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setFeedback({ type: 'error', message: 'הסיסמאות אינן תואמות' });
      setTimeout(() => setFeedback(null), 4000);
      return;
    }
    if (newPassword.length < 4) {
      setFeedback({ type: 'error', message: 'סיסמה חדשה חייבת להכיל לפחות 4 תווים' });
      setTimeout(() => setFeedback(null), 4000);
      return;
    }
    if (!onChangePassword) return;
    setPasswordSaving(true);
    const result = await onChangePassword(oldPassword, newPassword);
    setPasswordSaving(false);
    if (result?.success) {
      setShowPasswordSection(false);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setFeedback({ type: 'success', message: 'הסיסמה שונתה בהצלחה' });
    } else {
      setFeedback({ type: 'error', message: result?.message || 'שגיאה בשינוי סיסמה' });
    }
    setTimeout(() => setFeedback(null), 4000);
  };

  const passwordToggle = (show, setShow) => (
    <InputAdornment position="end">
      <IconButton size="small" onClick={() => setShow(!show)} edge="end">
        {show ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <SettingsCard
      title="פרטים אישיים"
      description="ניהול פרטי החשבון ושינוי סיסמה"
      icon={<PersonIcon />}
    >
      {/* Feedback */}
      <Collapse in={!!feedback}>
        {feedback && (
          <Alert
            severity={feedback.type}
            onClose={() => setFeedback(null)}
            sx={{
              borderRadius: `${PA_RADIUS.sm}px`,
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              fontSize: '0.8125rem',
            }}
          >
            {feedback.message}
          </Alert>
        )}
      </Collapse>

      {/* Personal fields — 2 column grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: '20px',
        }}
      >
        <FieldRow label="שם פרטי">
          <TextField
            size="small"
            fullWidth
            value={edited.firstName || ''}
            onChange={(e) => setEdited({ ...edited, firstName: e.target.value })}
            disabled={!isEditing}
            placeholder="הזן שם פרטי"
            sx={textFieldSx}
          />
        </FieldRow>
        <FieldRow label="שם משפחה">
          <TextField
            size="small"
            fullWidth
            value={edited.lastName || ''}
            onChange={(e) => setEdited({ ...edited, lastName: e.target.value })}
            disabled={!isEditing}
            placeholder="הזן שם משפחה"
            sx={textFieldSx}
          />
        </FieldRow>
        <FieldRow label="שם משתמש">
          <TextField
            size="small"
            fullWidth
            value={edited.username || ''}
            onChange={(e) => setEdited({ ...edited, username: e.target.value })}
            disabled={!isEditing}
            placeholder="הזן שם משתמש"
            sx={textFieldSx}
          />
        </FieldRow>
        <FieldRow label="אימייל">
          <TextField
            size="small"
            fullWidth
            type="email"
            value={edited.email || ''}
            onChange={(e) => setEdited({ ...edited, email: e.target.value })}
            disabled={!isEditing}
            placeholder="example@email.com"
            sx={textFieldSx}
          />
        </FieldRow>
        <FieldRow label="טלפון" sx={{ gridColumn: { sm: '1 / -1' }, maxWidth: { sm: 'calc(50% - 12px)' } }}>
          <TextField
            size="small"
            fullWidth
            value={edited.phone || ''}
            onChange={(e) => setEdited({ ...edited, phone: e.target.value })}
            disabled={!isEditing}
            placeholder="050-0000000"
            sx={textFieldSx}
          />
        </FieldRow>
      </Box>

      {/* Action buttons */}
      <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
        {!isEditing ? (
          <Button
            variant="outlined"
            startIcon={<EditIcon sx={{ fontSize: 18 }} />}
            onClick={() => setIsEditing(true)}
            sx={{
              borderRadius: `${PA_RADIUS.sm}px`,
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              ...PA_TYPOGRAPHY.buttonText,
              textTransform: 'none',
              borderColor: PA_COLORS.cardBorder,
              color: PA_COLORS.textPrimary,
              padding: '7px 18px',
              transition: PA_TRANSITIONS.fast,
              '&:hover': { borderColor: PA_COLORS.accent, color: PA_COLORS.accent, backgroundColor: PA_COLORS.accentLight },
            }}
          >
            עריכה
          </Button>
        ) : (
          <>
            <Button
              variant="contained"
              startIcon={saving ? <CircularProgress size={16} color="inherit" /> : <SaveIcon sx={{ fontSize: 18 }} />}
              onClick={handleSave}
              disabled={saving}
              sx={{
                borderRadius: `${PA_RADIUS.sm}px`,
                fontFamily: PA_TYPOGRAPHY.fontFamily,
                ...PA_TYPOGRAPHY.buttonText,
                textTransform: 'none',
                backgroundColor: PA_COLORS.accent,
                padding: '7px 22px',
                boxShadow: 'none',
                transition: PA_TRANSITIONS.fast,
                '&:hover': { backgroundColor: PA_COLORS.accentHover, boxShadow: 'none' },
              }}
            >
              שמירה
            </Button>
            <Button
              variant="text"
              startIcon={<CloseIcon sx={{ fontSize: 18 }} />}
              onClick={handleCancel}
              sx={{
                borderRadius: `${PA_RADIUS.sm}px`,
                fontFamily: PA_TYPOGRAPHY.fontFamily,
                ...PA_TYPOGRAPHY.buttonText,
                textTransform: 'none',
                color: PA_COLORS.textSecondary,
                padding: '7px 14px',
                transition: PA_TRANSITIONS.fast,
                '&:hover': { backgroundColor: PA_COLORS.sectionBg },
              }}
            >
              ביטול
            </Button>
          </>
        )}

        {/* Spacer */}
        <Box sx={{ flex: 1 }} />

        <Button
          variant="text"
          startIcon={<LockIcon sx={{ fontSize: 18 }} />}
          onClick={() => setShowPasswordSection(!showPasswordSection)}
          sx={{
            borderRadius: `${PA_RADIUS.sm}px`,
            fontFamily: PA_TYPOGRAPHY.fontFamily,
            ...PA_TYPOGRAPHY.buttonText,
            textTransform: 'none',
            color: PA_COLORS.textMuted,
            padding: '7px 14px',
            transition: PA_TRANSITIONS.fast,
            '&:hover': { backgroundColor: PA_COLORS.sectionBg, color: PA_COLORS.textSecondary },
          }}
        >
          {showPasswordSection ? 'ביטול' : 'שינוי סיסמה'}
        </Button>
      </Box>

      {/* Password section — visually separated */}
      <Collapse in={showPasswordSection}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '20px',
            backgroundColor: PA_COLORS.sectionBg,
            borderRadius: `${PA_RADIUS.md}px`,
            border: `1px solid ${PA_COLORS.divider}`,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LockIcon sx={{ fontSize: 16, color: PA_COLORS.textMuted }} />
            <Typography
              sx={{
                ...PA_TYPOGRAPHY.fieldLabel,
                fontFamily: PA_TYPOGRAPHY.fontFamily,
                color: PA_COLORS.textPrimary,
                fontWeight: 600,
              }}
            >
              שינוי סיסמה
            </Typography>
          </Box>

          <FieldRow label="סיסמה נוכחית">
            <TextField
              size="small"
              fullWidth
              type={showOld ? 'text' : 'password'}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="הזן סיסמה נוכחית"
              InputProps={{ endAdornment: passwordToggle(showOld, setShowOld) }}
              sx={textFieldSx}
            />
          </FieldRow>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: '20px',
            }}
          >
            <FieldRow label="סיסמה חדשה">
              <TextField
                size="small"
                fullWidth
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="לפחות 4 תווים"
                InputProps={{ endAdornment: passwordToggle(showNew, setShowNew) }}
                sx={textFieldSx}
              />
            </FieldRow>
            <FieldRow label="אישור סיסמה חדשה">
              <TextField
                size="small"
                fullWidth
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="הזן שוב את הסיסמה"
                error={confirmPassword.length > 0 && newPassword !== confirmPassword}
                helperText={
                  confirmPassword.length > 0 && newPassword !== confirmPassword
                    ? 'הסיסמאות אינן תואמות'
                    : ''
                }
                InputProps={{ endAdornment: passwordToggle(showConfirm, setShowConfirm) }}
                sx={textFieldSx}
              />
            </FieldRow>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={handleChangePassword}
              disabled={passwordSaving || !oldPassword || !newPassword || !confirmPassword}
              startIcon={passwordSaving ? <CircularProgress size={16} color="inherit" /> : <LockIcon sx={{ fontSize: 18 }} />}
              sx={{
                borderRadius: `${PA_RADIUS.sm}px`,
                fontFamily: PA_TYPOGRAPHY.fontFamily,
                ...PA_TYPOGRAPHY.buttonText,
                textTransform: 'none',
                backgroundColor: PA_COLORS.accent,
                padding: '8px 24px',
                boxShadow: 'none',
                transition: PA_TRANSITIONS.fast,
                '&:hover': { backgroundColor: PA_COLORS.accentHover, boxShadow: 'none' },
              }}
            >
              עדכון סיסמה
            </Button>
          </Box>
        </Box>
      </Collapse>
    </SettingsCard>
  );
}
