import React, { useState, useRef } from 'react';
import { Box, IconButton, Tooltip, Typography, CircularProgress } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';

/**
 * AudioPlayer — מנגן הקלטה inline
 *
 * @param {string} props.src - URL ישיר לקובץ שמע
 * @param {Function} props.fetchAudio - פונקציה אסינכרונית שמחזירה Blob (חלופה ל-src)
 * @param {string} props.label - תווית לנגישות
 */
export default function AudioPlayer({ src, fetchAudio, label }) {
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState('');
  const audioRef = useRef(null);
  const blobUrlRef = useRef(null);

  const toggle = async () => {
    if (playing && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlaying(false);
      return;
    }
    setError('');
    setLoading(true);
    try {
      if (!blobUrlRef.current) {
        if (fetchAudio) {
          const blob = await fetchAudio();
          blobUrlRef.current = URL.createObjectURL(blob);
        } else if (src) {
          blobUrlRef.current = src;
        } else {
          throw new Error('No audio source');
        }
      }
      if (!audioRef.current) {
        audioRef.current = new Audio(blobUrlRef.current);
        audioRef.current.onended = () => setPlaying(false);
        audioRef.current.onerror = () => {
          if (blobUrlRef.current && blobUrlRef.current.startsWith('blob:')) {
            URL.revokeObjectURL(blobUrlRef.current);
          }
          blobUrlRef.current = null;
          audioRef.current = null;
          setError('שגיאה בניגון');
          setPlaying(false);
        };
      } else {
        audioRef.current.src = blobUrlRef.current;
      }
      await audioRef.current.play();
      setPlaying(true);
    } catch (err) {
      if (blobUrlRef.current && blobUrlRef.current.startsWith('blob:')) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      blobUrlRef.current = null;
      audioRef.current = null;
      setError('שגיאה בטעינת שמע');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={0.5}>
      <Tooltip title={label || (playing ? 'עצור' : 'נגן')}>
        <span>
          <IconButton
            size="small"
            onClick={toggle}
            disabled={loading}
            color={playing ? 'error' : 'primary'}
          >
            {loading
              ? <CircularProgress size={16} />
              : playing
                ? <StopCircleOutlinedIcon fontSize="small" />
                : <PlayCircleOutlineIcon fontSize="small" />
            }
          </IconButton>
        </span>
      </Tooltip>
      {error && (
        <Typography variant="caption" color="error">{error}</Typography>
      )}
    </Box>
  );
}
