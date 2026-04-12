import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Box, Button, Typography, IconButton, Paper, CircularProgress,
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveIcon from '@mui/icons-material/Save';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

/**
 * AudioRecorder — הקלטת שמע מהמיקרופון בדפדפן
 *
 * @param {Function} props.onSave - callback(blob: Blob) כשהמשתמש שומר
 * @param {boolean} props.saving - הצגת ספינר
 * @param {boolean} props.disabled
 */
const AudioRecorder = ({ onSave, saving = false, disabled = false }) => {
  const [status, setStatus] = useState('idle');
  const [seconds, setSeconds] = useState(0);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [micError, setMicError] = useState('');

  const mediaRecorder = useRef(null);
  const chunks = useRef([]);
  const timerRef = useRef(null);
  const audioRef = useRef(null);
  const streamRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      stopStream();
    };
  }, []);

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  };

  const startRecording = useCallback(async () => {
    setMicError('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/webm')
          ? 'audio/webm'
          : MediaRecorder.isTypeSupported('audio/ogg;codecs=opus')
            ? 'audio/ogg;codecs=opus'
            : '';

      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      chunks.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks.current, { type: recorder.mimeType });
        blobRef.current = blob;
        const url = URL.createObjectURL(blob);
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setPreviewUrl(url);
        setStatus('recorded');
        stopStream();
      };

      recorder.start(250);
      mediaRecorder.current = recorder;
      setSeconds(0);
      setStatus('recording');

      timerRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } catch (err) {
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setMicError('לא ניתנה הרשאת מיקרופון. יש לאשר גישה למיקרופון בדפדפן.');
      } else if (err.name === 'NotFoundError') {
        setMicError('לא נמצא מיקרופון במכשיר.');
      } else {
        setMicError('שגיאה בגישה למיקרופון.');
      }
    }
  }, [previewUrl]);

  const stopRecording = useCallback(() => {
    clearInterval(timerRef.current);
    if (mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
      mediaRecorder.current.stop();
    }
  }, []);

  const discardRecording = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    blobRef.current = null;
    setPlaying(false);
    setSeconds(0);
    setStatus('idle');
  }, [previewUrl]);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const onAudioEnded = () => setPlaying(false);

  const handleSave = () => {
    if (blobRef.current && onSave) {
      onSave(blobRef.current);
    }
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        mt: 1,
        borderStyle: 'dashed',
        bgcolor: status === 'recording' ? 'error.50' : 'grey.50',
        transition: 'background-color 0.3s',
      }}
    >
      <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
        הקלטת שמע
      </Typography>

      {micError && (
        <Typography variant="caption" color="error" sx={{ display: 'block', mb: 1 }}>
          {micError}
        </Typography>
      )}

      {status === 'idle' && (
        <Button
          variant="outlined"
          color="error"
          startIcon={<MicIcon />}
          onClick={startRecording}
          disabled={disabled || saving}
          size="small"
        >
          התחל הקלטה
        </Button>
      )}

      {status === 'recording' && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <FiberManualRecordIcon
            color="error"
            sx={{
              fontSize: 16,
              animation: 'blink 1s infinite',
              '@keyframes blink': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.2 },
              },
            }}
          />
          <Typography variant="body2" fontWeight={600} color="error" sx={{ fontFamily: 'monospace' }}>
            {formatTime(seconds)}
          </Typography>
          <IconButton color="error" onClick={stopRecording} size="small">
            <StopIcon />
          </IconButton>
        </Box>
      )}

      {status === 'recorded' && (
        <Box>
          {previewUrl && (
            <audio ref={audioRef} src={previewUrl} onEnded={onAudioEnded} />
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <IconButton onClick={togglePlayback} size="small" color="primary">
              {playing ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
              {formatTime(seconds)}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              size="small"
              color="error"
              startIcon={<DeleteOutlineIcon />}
              onClick={discardRecording}
              disabled={saving}
            >
              מחק
            </Button>
            <Button
              variant="outlined"
              size="small"
              startIcon={<MicIcon />}
              onClick={() => { discardRecording(); startRecording(); }}
              disabled={saving}
            >
              הקלט מחדש
            </Button>
            <Button
              variant="contained"
              size="small"
              startIcon={saving ? <CircularProgress size={14} /> : <SaveIcon />}
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? 'שומר...' : 'שמור הקלטה'}
            </Button>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default AudioRecorder;
