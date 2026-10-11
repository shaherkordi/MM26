# MnM26 · Mohamed & Maryam 💍

A cinematic, bilingual (English / العربية) wedding invitation website for
**Mohamed & Maryam**, Thursday **29 October 2026**, 7:00 PM, at **Tia Vie, Grand Plaza Hotel, Sheikh Zayed**.

Guests tap to open, a short film walks them through a floral hallway onto a moonlit balcony, and the invitation unfolds over a living night sky.

---

## ✨ Features

- **Opening film**: full-screen intro video that hands off seamlessly to the hero scene
- **Living background**: twinkling stars, drifting clouds, moon glow, light on the water, an occasional shooting star, and falling rose petals
- **English / Arabic switch**: hand-written Arabic copy (not machine-translated), full right-to-left layout, and automatic Arabic for guests whose phone is set to Arabic
- **Live countdown** to the wedding
- **Quran verse** (Ar-Rum 30:21)
- **Evening schedule** with a gold timeline
- **Venue** card with the venue logo and an *Open in Maps* button
- **Dress code** with color swatches
- **RSVP / guest book** saved to a private Google Sheet (free), with a beautiful **wishes page** for the couple
- **FAQ** and a closing Polaroid photo
- **Background music** with a play / pause button
- Mobile-first, dark-mode aware, and respects *Reduce Motion*

## 🗂️ Project structure

```
MnM26/
├── index.html          # the whole invitation (HTML, CSS, JS, embedded images)
├── wishes.html         # private wishes & guest list for the couple (passcode protected)
├── assets/
│   ├── config.js       # one setting: your Apps Script URL
│   ├── intro.mp4       # opening film (muted; music plays separately)
│   └── poster.jpg      # first frame of the film, shown before tapping and used as the link preview
├── docs/
│   ├── BACKEND.md      # saving RSVPs & wishes (Google Sheet + Apps Script)
│   ├── CUSTOMIZE.md    # how to change names, dates, text, music, photos
│   └── DEPLOY.md       # how to publish on GitHub Pages
├── backend/
│   └── Code.gs         # Google Apps Script that saves and reads replies
├── .nojekyll           # tells GitHub Pages to serve files as-is
└── README.md
```

No build step, no dependencies. It's a static site you can open directly in a browser. Replies are stored by a free Google Apps Script, so no server is needed.

## 🚀 Quick start

1. Download or clone the repo.
2. Open `index.html` in a browser, or serve the folder locally:
   ```bash
   python3 -m http.server 8000
   # then open http://localhost:8000
   ```
3. Publish with GitHub Pages: see **[docs/DEPLOY.md](docs/DEPLOY.md)**.
4. Connect RSVP saving: see **[docs/BACKEND.md](docs/BACKEND.md)**.

## 💌 Reading the wishes

Open **`/wishes.html`** on your site and enter your passcode to see every wish as a keepsake card, the full guest list with headcount, filters, search, a full-screen book view, CSV download, and print.

## ✏️ Customizing

Names, date, schedule, FAQ, Arabic text, and the music are all covered in **[docs/CUSTOMIZE.md](docs/CUSTOMIZE.md)**.

## 🔒 Privacy note

On the free GitHub plan, a repo must be **public** to use GitHub Pages, so anyone could see the files, including the photos. Guest replies are **not** stored in the repo: they live in your private Google Sheet, and the wishes page needs your passcode.

## 💌 Credits

Designed and built with Claude for Mohamed & Maryam.
Fonts: Pinyon Script, Jost, Cormorant Garamond, Amiri, and Aref Ruqaa (Google Fonts).
