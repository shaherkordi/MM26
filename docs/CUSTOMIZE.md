# Customizing the invitation

Everything lives in **`index.html`**. Open it in any text editor (VS Code, or GitHub's built-in editor) and use **Find** (Ctrl/Cmd + F) to jump to each item below.

## Names

- **Hero (English):** search for `data-i18n="n1"` and `data-i18n="n2"`.
- **All languages:** in the `I18N` object, change `n1` and `n2` in both the `en:` and `ar:` blocks. These drive the hero, the Polaroid caption, and the RSVP message.
- **Page title:** the `title:` key in both language blocks.

## Date & time

- **Countdown target:** search for `new Date('2026-10-29T19:00:00+03:00')`. Keep the `+03:00` (Cairo time).
- **Visible date text:** the hero `<p class="date">` line, and the `when:` key in both language blocks.
- **RSVP deadline:** the `gT:` key in both language blocks.

## RSVP saving

Replies are saved to your Google Sheet. The only setting is the Apps Script URL in `assets/config.js`. See [BACKEND.md](BACKEND.md). The thank-you and error messages are the `thanks`, `thanksNo`, `failed`, and `closed` keys in both language blocks.

## Schedule, dress code, FAQ

In the `I18N` object, edit these keys in **both** `en:` and `ar:` blocks:

| Key | What it controls |
|---|---|
| `sched` | Schedule items: `[time, title, description]` |
| `colors` | Swatch names (the colors themselves are in `swatchHex`) |
| `faq` | Questions and answers: `[question, answer]` |
| `aH`, `aT` | Dress-code title and text |

## Arabic text

All Arabic copy is in the `ar:` block of `I18N`, written as natural Arabic invitation copy rather than a translation. Keep the same keys and change only the text between quotes.

## Venue & map

- **Map link:** search for `google.com/maps`. For the most accurate pin, replace the whole link with the **Share** link from Google Maps for the venue.
- **City line:** the `vCity:` key.

## Music

The current tune is a gentle melody generated in code. To use a song instead:

1. Add the MP3 to `assets/`, e.g. `assets/song.mp3`.
2. Search for `function startMusic` and replace the music engine with a simple audio element:
   ```js
   const song = new Audio('assets/song.mp3'); song.loop = true;
   function startMusic(){ song.play(); playing = true; musicBtn.classList.add('playing'); }
   function stopMusic(){ song.pause(); playing = false; musicBtn.classList.remove('playing'); }
   ```
   Keep the existing `musicBtn` lines below it.

Phones only allow sound after a tap, which is why music starts when guests tap **Tap to open**.

## Opening film

Replace `assets/intro.mp4` with another vertical (9:16) MP4. The hero background is the film's **last frame**, embedded in `index.html` (`#lakeBg`). If you change the film, export its last frame as a JPG so the hand-off stays seamless, and ask for the embedded image to be updated.

## Photos

The venue photo, the venue logo, and the kids' Polaroid are embedded directly in `index.html` as `data:` images, so the page needs no extra files. To swap one, replace its `src="data:image/..."` value with a path such as `assets/photo.jpg` and add that file to `assets/`.
