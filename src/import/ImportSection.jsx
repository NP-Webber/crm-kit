import React, { useState, useRef } from 'react';
import {
  Box, Button, Typography, Alert, CircularProgress,
  Collapse, Paper, Checkbox, FormControlLabel,
  RadioGroup, Radio, MenuItem, TextField,
} from '@mui/material';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EditIcon from '@mui/icons-material/Edit';

/**
 * ImportSection — רכיב ייבוא Excel מתקפל לשימוש חוזר
 *
 * @param {Object} props
 * @param {string} props.label - כותרת הסעיף
 * @param {string} props.endpoint - נתיב POST (ל-apiClient)
 * @param {string} props.templateEndpoint - נתיב GET להורדת תבנית
 * @param {string} props.description - תיאור קצר
 * @param {Function} props.onImportDone - callback אחרי ייבוא מוצלח
 * @param {React.ReactNode} props.extraActions - JSX נוסף
 * @param {string} props.entityType - סוג ישות לעדכון חלקי
 * @param {Array} props.identifierColumns - [{ field, label }] עמודות מזהות
 * @param {Object} props.extraFormData - שדות נוספים לשליחה
 * @param {Object} props.apiClient - Axios instance
 */
const ImportSection = ({
  label,
  endpoint,
  templateEndpoint,
  description,
  onImportDone,
  extraActions,
  entityType,
  identifierColumns,
  extraFormData,
  apiClient,
}) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [replace, setReplace] = useState(false);
  const [partialMode, setPartialMode] = useState(false);
  const [identifierColumn, setIdentifierColumn] = useState('');
  const [fileColumn, setFileColumn] = useState('');
  const [fileHeaders, setFileHeaders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const f = e.target.files[0] || null;
    setFile(f);
    setResult(null);
    setError('');
    setFileColumn('');
    if (f && partialMode) fetchHeaders(f);
  };

  const fetchHeaders = async (f) => {
    if (!apiClient) return;
    try {
      const formData = new FormData();
      formData.append('file', f);
      const { data } = await apiClient.post('/import/preview-headers', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFileHeaders(data.headers || []);
    } catch {
      setFileHeaders([]);
    }
  };

  const handleUpload = async () => {
    if (!file || !apiClient) return;
    if (partialMode && !identifierColumn) {
      setError('יש לבחור שדה מזהה במערכת');
      return;
    }
    if (partialMode && !fileColumn) {
      setError('יש לבחור עמודה מהקובץ שמתאימה לשדה המזהה');
      return;
    }
    setLoading(true);
    setResult(null);
    setError('');
    try {
      const formData = new FormData();
      formData.append('file', file);

      let url;
      if (partialMode && entityType) {
        formData.append('identifierColumn', identifierColumn);
        formData.append('fileColumn', fileColumn);
        url = `/import/partial-update/${entityType}`;
      } else {
        formData.append('replace', replace ? 'true' : 'false');
        url = endpoint;
      }

      if (extraFormData) {
        Object.entries(extraFormData).forEach(([k, v]) => {
          if (v != null && v !== '') formData.append(k, v);
        });
      }

      const { data } = await apiClient.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(data);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      if (onImportDone) onImportDone(data);
    } catch (err) {
      setError(err.response?.data?.error || 'שגיאה בייבוא הקובץ');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadTemplate = async () => {
    if (!apiClient || !templateEndpoint) return;
    try {
      const response = await apiClient.get(templateEndpoint, { responseType: 'blob' });
      const url = URL.createObjectURL(response.data);
      const a = document.createElement('a');
      a.href = url;
      a.download = `template_${label}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // ignore
    }
  };

  return (
    <Paper variant="outlined" sx={{ mt: 3, borderRadius: 2 }}>
      <Box
        sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          px: 2, py: 1.5, cursor: 'pointer', userSelect: 'none',
        }}
        onClick={() => setOpen((o) => !o)}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <UploadFileOutlinedIcon fontSize="small" color="action" />
          <Typography variant="subtitle2" fontWeight={600}>
            ייבוא {label}
          </Typography>
        </Box>
        {open ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
      </Box>

      <Collapse in={open}>
        <Box sx={{ px: 2, pb: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          {description && (
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1.5, mb: 1 }}>
              {description}
            </Typography>
          )}

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center', mt: 1 }}>
            {templateEndpoint && (
              <Button variant="outlined" size="small" onClick={handleDownloadTemplate}>
                הורד תבנית
              </Button>
            )}

            <Button variant="outlined" size="small" component="label">
              בחר קובץ Excel
              <input
                ref={fileInputRef}
                type="file"
                accept=".xlsx,.xls"
                hidden
                onChange={handleFileChange}
              />
            </Button>

            {file && (
              <Typography variant="caption" color="text.secondary">
                {file.name}
              </Typography>
            )}
          </Box>

          <FormControlLabel
            control={<Checkbox checked={replace} onChange={(e) => { setReplace(e.target.checked); if (e.target.checked) setPartialMode(false); }} size="small" />}
            label={<Typography variant="caption">החלף נתונים קיימים (מחיקה ויצירה מחדש)</Typography>}
            sx={{ mt: 1, display: 'block' }}
          />

          {identifierColumns?.length > 0 && (
            <Box sx={{ mt: 1 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={partialMode}
                    onChange={(e) => {
                      setPartialMode(e.target.checked);
                      if (e.target.checked) setReplace(false);
                      if (!e.target.checked) {
                        setIdentifierColumn('');
                        setFileColumn('');
                        setFileHeaders([]);
                      } else if (file) {
                        fetchHeaders(file);
                      }
                    }}
                    size="small"
                    color="info"
                  />
                }
                label={
                  <Typography variant="caption" color={partialMode ? 'info.main' : 'text.secondary'}>
                    <EditIcon sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.5 }} />
                    עדכון חלקי (עדכון עמודות בלבד ללא מחיקה/הוספה)
                  </Typography>
                }
                sx={{ display: 'block' }}
              />
              {partialMode && (
                <Box sx={{ mt: 1, p: 1.5, bgcolor: 'info.50', border: '1px solid', borderColor: 'info.light', borderRadius: 1 }}>
                  <Typography variant="caption" display="block" mb={0.5}>
                    בחר איזו עמודה מהקובץ מתאימה לאיזה שדה במערכת:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', alignItems: 'flex-end' }}>
                    <TextField
                      select
                      size="small"
                      value={fileColumn}
                      onChange={(e) => setFileColumn(e.target.value)}
                      sx={{ minWidth: 160 }}
                      label="עמודה בקובץ"
                      disabled={!file || fileHeaders.length === 0}
                    >
                      {fileHeaders.map((h) => (
                        <MenuItem key={h} value={h}>{h}</MenuItem>
                      ))}
                    </TextField>

                    <Typography variant="caption" sx={{ pb: 1 }}>⇐</Typography>

                    <TextField
                      select
                      size="small"
                      value={identifierColumn}
                      onChange={(e) => setIdentifierColumn(e.target.value)}
                      sx={{ minWidth: 160 }}
                      label="שדה מזהה במערכת"
                    >
                      {identifierColumns.map((ic) => (
                        <MenuItem key={ic.field} value={ic.field}>{ic.label}</MenuItem>
                      ))}
                    </TextField>
                  </Box>
                </Box>
              )}
            </Box>
          )}

          <Box sx={{ mt: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button
              variant="contained"
              size="small"
              onClick={handleUpload}
              disabled={!file || loading}
            >
              {loading ? <CircularProgress size={16} sx={{ mr: 1 }} /> : null}
              {loading ? 'מייבא...' : 'התחל ייבוא'}
            </Button>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mt: 1.5 }}>{error}</Alert>
          )}

          {result && (
            <Alert severity="success" sx={{ mt: 1.5 }}>
              {result.message || `ייבוא הושלם בהצלחה`}
              {result.created != null && ` | נוצרו: ${result.created}`}
              {result.updated != null && ` | עודכנו: ${result.updated}`}
              {result.errors?.length > 0 && ` | שגיאות: ${result.errors.length}`}
            </Alert>
          )}

          {extraActions}
        </Box>
      </Collapse>
    </Paper>
  );
};

export default ImportSection;
