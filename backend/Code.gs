/**
 * MnM26 · RSVP & wishes backend (Google Apps Script + Google Sheets)
 *
 * - doPost: the invitation sends each guest reply here; it's saved as a new row.
 * - doGet:  the wishes page reads all replies, only with the correct passcode.
 *
 * Setup: see docs/BACKEND.md
 * Set the passcode in Project Settings → Script properties → ADMIN_KEY.
 */

const SHEET_NAME = 'RSVPs';
const HEADERS = ['id', 'timestamp', 'name', 'attending', 'party', 'message', 'lang'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

// Stop text that starts with = + - @ from being treated as a spreadsheet formula
function clean_(v, max) {
  let s = String(v == null ? '' : v).replace(/\s+$/, '').slice(0, max);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function doPost(e) {
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (d.website) return out_({ ok: true });            // honeypot: silently ignore bots
    const name = clean_(String(d.name || '').trim(), 80);
    if (!name) return out_({ ok: false, error: 'name' });
    const attending = d.attending === 'yes' ? 'yes' : 'no';
    const party = attending === 'yes' ? Math.max(1, Math.min(10, parseInt(d.party, 10) || 1)) : 0;
    const message = clean_(String(d.message || '').trim(), 1000);
    const lang = d.lang === 'ar' ? 'ar' : 'en';

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet_().appendRow([Utilities.getUuid(), new Date(), name, attending, party, message, lang]);
    } finally {
      lock.releaseLock();
    }
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  const key = PropertiesService.getScriptProperties().getProperty('ADMIN_KEY');
  const given = (e && e.parameter && e.parameter.key) || '';
  if (!key || given !== key) return out_({ ok: false, error: 'locked' });

  const rows = sheet_().getDataRange().getValues();
  rows.shift(); // headers
  const entries = rows
    .filter(r => r[0])
    .map(r => ({
      id: r[0],
      ts: new Date(r[1]).toISOString(),
      name: String(r[2]).replace(/^'/, ''),
      attending: r[3],
      party: Number(r[4]) || 0,
      message: String(r[5]).replace(/^'/, ''),
      lang: r[6]
    }));
  return out_({ ok: true, entries: entries });
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
