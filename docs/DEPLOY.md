# Publishing on GitHub Pages (free)

This gives you a link like **`https://shaherkordi.github.io/MM26/`** that any guest can open, with no sign-in needed.

## 1. Create the repository

1. Sign in at [github.com](https://github.com) and click **New repository** (the **+** at the top right).
2. **Repository name:** `MnM26`
3. Visibility: **Public** (required for free GitHub Pages).
4. Leave "Add a README" **unchecked** (this project already has one).
5. Click **Create repository**.

## 2. Upload the files

**From the browser (easiest):**
1. On the new repo page, click **uploading an existing file**.
2. Unzip `MnM26.zip` on your computer, then drag **the contents** of the `MnM26` folder (`index.html`, `wishes.html`, `README.md`, `.nojekyll`, and the `assets`, `backend`, and `docs` folders) into the upload area.
   - `.nojekyll` is a hidden file. On a Mac press **Cmd + Shift + .** in Finder to show it. If it doesn't upload, the site will still work.
3. Click **Commit changes**.

**Or with git:**
```bash
cd MnM26
git init
git add .
git commit -m "Mohamed & Maryam wedding invitation"
git branch -M main
git remote add origin https://github.com/shaherkordi/MM26.git
git push -u origin main
```

## 3. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **`main`** and folder **`/ (root)`**, then click **Save**.
4. Wait a minute or two and refresh. The live link appears at the top of the page.

## 4. Make the link preview look nice

So the link shows the hallway image when shared in chat apps, open `index.html` and change this line to the full address of your site:

```html
<meta property="og:image" content="https://shaherkordi.github.io/MM26/assets/poster.jpg">
```

## 5. Test before sending

- Open the link on your phone and tap through the whole invitation once.
- Try the **عربي / EN** switch, the music button, **Open in Maps**, and an RSVP. Then check it arrived on `wishes.html` (set up saving first: [BACKEND.md](BACKEND.md)).
- Chat apps sometimes cache link previews. If you change the preview image later, it can take a while to update.

## Updating later

Edit a file on GitHub (pencil icon → **Commit changes**) or push again with git. Pages redeploys automatically within a minute or two.
