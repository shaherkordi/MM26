# Saving RSVPs & wishes (free, about 10 minutes)

Guest replies are saved in a **Google Sheet** through a small **Google Apps Script**, and read back on **`wishes.html`**, your private wishes page on the same site.

```
Guest taps "Send with love"  ──►  Apps Script (doPost)  ──►  Google Sheet "RSVPs"
wishes.html + passcode        ◄──  Apps Script (doGet)   ◄──  Google Sheet "RSVPs"
```

It's free, needs no server, and you can always open the Sheet directly too.

## 1. Create the Sheet and the script

1. Go to [sheets.new](https://sheets.new) and name the spreadsheet **MnM26 RSVPs**.
2. In the menu, open **Extensions → Apps Script**.
3. Delete everything in `Code.gs`, paste in the full contents of [`backend/Code.gs`](../backend/Code.gs), and click **Save** 💾.

## 2. Set your passcode

1. In Apps Script, click **Project Settings** ⚙️ (left sidebar).
2. Under **Script properties**, click **Add script property**:
   - **Property:** `ADMIN_KEY`
   - **Value:** a passcode only the two of you know, e.g. `maryam-mohamed-2910`
3. Click **Save script properties**.

Guests never need this. It only unlocks `wishes.html`.

## 3. Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear ⚙️ next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** *Me*
   - **Who has access:** *Anyone*
4. Click **Deploy**, then **Authorize access**, and allow it with your Google account.
   If you see "Google hasn't verified this app", click **Advanced → Go to … (unsafe)**. This is your own script, so it's safe.
5. Copy the **Web app URL** (it ends in `/exec`).

## 4. Connect the site

Open [`assets/config.js`](../assets/config.js) and paste the URL:

```js
window.MNM_CONFIG = {
  API_URL: "https://script.google.com/macros/s/AKfy...your-id.../exec"
};
```

Commit the change. Both the invitation and the wishes page read this one file.

## 5. Test it

1. Open your invitation, scroll to **Will you join us?**, and send a test reply.
2. Open `https://shaherkordi.github.io/MM26/wishes.html`, enter your passcode, and your test reply should appear.
3. Delete the test row from the Google Sheet when you're done.

## The wishes page

- **Wishes:** every message as a keepsake card, with the guest's name and their reply.
- **Guest list:** a table of every reply with party size, and a running total of attending guests.
- **Filters & search:** Everyone / Coming / Can't come, plus search by name or word.
- **📖 Book view:** read the wishes one by one, full screen (arrow keys work).
- **⇅ Order:** newest or oldest first.
- **⬇ Download:** a CSV that opens in Excel or Google Sheets, with Arabic supported.
- **🖨 Print:** a clean print of the cards or the list.
- **↻ Refresh:** it also refreshes on its own every minute.
- **Lock:** forgets the passcode on this device.

Before the backend is connected, `wishes.html` shows a preview with sample wishes so you can see the design.

## Good to know

- **Privacy:** the replies live only in your Google Sheet. The wishes page shows nothing without the passcode, and it asks search engines not to index it.
- **Spam:** the form has a hidden trap field that silently drops bot submissions.
- **Changing the code later:** after editing `Code.gs`, go to **Deploy → Manage deployments → ✏️ Edit**, choose **Version: New version**, then **Deploy**. The URL stays the same.
- **Changing the passcode:** just edit `ADMIN_KEY` in Script properties. No redeploy is needed.
- **Limits:** Google's free quotas are far beyond what a wedding needs.
