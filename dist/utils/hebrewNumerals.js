"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHebrewNumeral = toHebrewNumeral;
/**
 * המרת מספר לאותיות עבריות (גימטריה) עם גרש/גרשיים
 * דוגמאות: 2→ב', 15→ט"ו, 34→ל"ד, 120→ק"כ
 */
function toHebrewNumeral(n) {
  if (!n || n <= 0 || n > 9999) return String(n);
  var hundreds = ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק'];
  var tens = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
  var ones = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
  var str = '';
  str += hundreds[Math.floor(n / 100)];
  var rem = n % 100;
  if (rem === 15) {
    str += 'טו';
  } else if (rem === 16) {
    str += 'טז';
  } else {
    str += tens[Math.floor(rem / 10)] + ones[rem % 10];
  }
  if (str.length === 1) return str + "\u05F3";
  return str.slice(0, -1) + "\u05F4" + str.slice(-1);
}
//# sourceMappingURL=hebrewNumerals.js.map