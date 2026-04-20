// CRM KIT — ProfileImageUploader: premium avatar upload with hover overlay
import React, { useRef, useState } from 'react';
import { Box, Typography, Avatar, CircularProgress, Collapse, Alert, ButtonBase } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAltRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsCard from './SettingsCard';
import { PA_COLORS, PA_SPACING, PA_TYPOGRAPHY, PA_RADIUS, PA_SHADOWS, PA_TRANSITIONS } from './constants';

export default function ProfileImageUploader({
  currentImage,
  userName = '',
  onUpload,
  uploading = false,
}) {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [hovered, setHovered] = useState(false);

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
        setFeedback({ type: 'success', message: 'התמונה עודכנה בהצלחה' });
        setPreview(null);
      } else {
        setFeedback({ type: 'error', message: result?.message || 'שגיאה בהעלאת התמונה' });
        setPreview(null);
      }
      setTimeout(() => setFeedback(null), 4000);
    }

    e.target.value = '';
  };

  const displayImage = preview || currentImage;
  const initials = userName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

  return (
    <SettingsCard
      title="תמונת פרופיל"
      description="העלאה או עדכון של תמונת הפרופיל שלך"
      icon={<AccountCircleIcon />}
    >
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
        {/* Avatar with hover overlay */}
        <ButtonBase
          onClick={() => !uploading && fileRef.current?.click()}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          disabled={uploading}
          aria-label="שינוי תמונת פרופיל"
          sx={{
            position: 'relative',
            borderRadius: '50%',
            flexShrink: 0,
            '&:focus-visible': {
              outline: `2px solid ${PA_COLORS.accent}`,
              outlineOffset: 4,
            },
          }}
        >
          <Avatar
            src={displayImage || undefined}
            sx={{
              width: 108,
              height: 108,
              fontSize: '2rem',
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              fontWeight: 600,
              backgroundColor: displayImage ? 'transparent' : PA_COLORS.accentSubtle,
              color: PA_COLORS.accent,
              boxShadow: hovered ? PA_SHADOWS.avatarHover : PA_SHADOWS.avatar,
              transition: PA_TRANSITIONS.normal,
            }}
          >
            {!displayImage && initials}
          </Avatar>

          {/* Hover overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              backgroundColor: 'rgba(15,23,42,0.45)',
              borderRadius: '50%',
              opacity: hovered ? 1 : 0,
              transition: PA_TRANSITIONS.fast,
              backdropFilter: 'blur(1px)',
            }}
          >
            {uploading ? (
              <CircularProgress size={22} thickness={3} sx={{ color: '#fff' }} />
            ) : (
              <>
                <CameraAltIcon sx={{ fontSize: 20, color: '#fff' }} />
                <Typography
                  sx={{
                    fontSize: '0.625rem',
                    fontFamily: PA_TYPOGRAPHY.fontFamily,
                    fontWeight: 600,
                    color: '#fff',
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                  }}
                >
                  שינוי תמונה
                </Typography>
              </>
            )}
          </Box>
        </ButtonBase>

        {/* Info */}
        <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'right' } }}>
          <Typography
            sx={{
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: PA_COLORS.textPrimary,
              letterSpacing: '-0.01em',
            }}
          >
            {userName || 'תמונת פרופיל'}
          </Typography>
          <Typography
            sx={{
              ...PA_TYPOGRAPHY.caption,
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              color: PA_COLORS.textMuted,
              marginTop: '4px',
            }}
          >
            JPG, PNG או GIF — מקסימום 5MB
          </Typography>
          <Typography
            component="span"
            onClick={() => !uploading && fileRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') fileRef.current?.click(); }}
            sx={{
              display: 'inline-block',
              fontFamily: PA_TYPOGRAPHY.fontFamily,
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: PA_COLORS.accent,
              marginTop: '10px',
              cursor: 'pointer',
              transition: PA_TRANSITIONS.micro,
              '&:hover': { color: PA_COLORS.accentHover },
            }}
          >
            {currentImage ? 'החלפת תמונה' : 'העלאת תמונה'}
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
