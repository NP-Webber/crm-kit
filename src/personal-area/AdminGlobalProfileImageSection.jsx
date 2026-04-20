// CRM KIT — AdminGlobalProfileImageSection: premium admin-only default avatar section
import React, { useRef, useState } from 'react';
import { Box, Typography, Avatar, Button, CircularProgress, Collapse, Alert, Chip } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUploadRounded';
import SettingsCard from './SettingsCard';
import { PA_COLORS, PA_SPACING, PA_TYPOGRAPHY, PA_RADIUS, PA_TRANSITIONS } from './constants';

export default function AdminGlobalProfileImageSection({
  isAdmin = false,
  currentImage,
  onUpload,
  uploading = false,
}) {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [feedback, setFeedback] = useState(null);

  // Don't render for non-admins
  if (!isAdmin) return null;

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setFeedback({ type: 'error', message: 'אנא בחר קובץ תמונה בלבד' });
      setTimeout(() => setFeedback(null), 4000);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFeedback({ type: 'error', message: 'גודל הקובץ חייב להיות עד 5MB' });
      setTimeout(() => setFeedback(null), 4000);
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(file);

    if (onUpload) {
      const result = await onUpload(file);
      if (result?.success) {
        setFeedback({ type: 'success', message: 'תמונת ברירת מחדל עודכנה בהצלחה' });
        setPreview(null);
      } else {
        setFeedback({ type: 'error', message: result?.message || 'שגיאה בהעלאה' });
        setPreview(null);
      }
      setTimeout(() => setFeedback(null), 4000);
    }

    e.target.value = '';
  };

  const displayImage = preview || currentImage;

  return (
    <SettingsCard
      variant="admin"
      title="תמונת פרופיל ברירת מחדל"
      description="הגדר תמונת ברירת מחדל שתוצג לכל המשתמשים שלא העלו תמונה אישית"
      icon={<AdminPanelSettingsIcon />}
    >
      {/* Admin badge */}
      <Chip
        label="מנהל בלבד"
        size="small"
        icon={<AdminPanelSettingsIcon sx={{ fontSize: '14px !important' }} />}
        sx={{
          alignSelf: 'flex-start',
          backgroundColor: 'rgba(234,88,12,0.1)',
          color: PA_COLORS.adminAccent,
          fontFamily: PA_TYPOGRAPHY.fontFamily,
          fontSize: '0.6875rem',
          fontWeight: 600,
          borderRadius: `${PA_RADIUS.sm}px`,
          height: 24,
          '& .MuiChip-icon': { color: PA_COLORS.adminAccent },
        }}
      />

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

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: '20px', sm: '28px' },
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Avatar
          src={displayImage || undefined}
          sx={{
            width: 80,
            height: 80,
            backgroundColor: displayImage ? 'transparent' : 'rgba(234,88,12,0.06)',
            color: PA_COLORS.adminAccent,
            border: `2px dashed ${PA_COLORS.adminBorder}`,
            fontSize: '1.75rem',
            flexShrink: 0,
            transition: PA_TRANSITIONS.normal,
          }}
        >
          {!displayImage && <AdminPanelSettingsIcon sx={{ fontSize: 32 }} />}
        </Avatar>

        <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'right' } }}>
          <Button
            variant="outlined"
            startIcon={uploading ? <CircularProgress size={16} color="inherit" /> : <CloudUploadIcon sx={{ fontSize: 18 }} />}
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            sx={{
              borderRadius: `${PA_RADIUS.sm}px`,
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              ...PA_TYPOGRAPHY.buttonText,
              textTransform: 'none',
              borderColor: PA_COLORS.adminAccent,
              color: PA_COLORS.adminAccent,
              padding: '7px 18px',
              transition: PA_TRANSITIONS.fast,
              '&:hover': {
                borderColor: PA_COLORS.adminAccent,
                backgroundColor: 'rgba(234,88,12,0.04)',
              },
            }}
          >
            {currentImage ? 'החלפת תמונה' : 'העלאת תמונה'}
          </Button>
          <Typography
            sx={{
              ...PA_TYPOGRAPHY.caption,
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              color: PA_COLORS.textMuted,
              marginTop: '6px',
            }}
          >
            תמונה זו תוצג כברירת מחדל לכל המשתמשים בקמפיין
          </Typography>
        </Box>
      </Box>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </SettingsCard>
  );
}
