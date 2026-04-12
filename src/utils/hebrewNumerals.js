/**
 * המרת מספר לאותיות עבריות (גימטריה) עם גרש/גרשיים
 * דוגמאות: 2→ב', 15→ט"ו, 34→ל"ד, 120→ק"כ
 */
export function toHebrewNumeral(n) {
  if (!n || n <= 0 || n > 9999) return String(n);

  const hundreds = ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק'];
  const tens     = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
  const ones     = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];

  let str = '';
  str += hundreds[Math.floor(n / 100)];

  const rem = n % 100;
  if (rem === 15) {
    str += 'טו';
  } else if (rem === 16) {
    str += 'טז';
  } else {
    str += tens[Math.floor(rem / 10)] + ones[rem % 10];
  }

  if (str.length === 1) return str + '\u05F3';
  return str.slice(0, -1) + '\u05F4' + str.slice(-1);
}
