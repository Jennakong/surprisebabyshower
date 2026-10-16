# Betsy & Titus — Interactive Baby Shower Invite

A responsive React + Vite single-page invite with animated transitions, confetti, playful availability responses, event details, and WhatsApp RSVP links. Ready for VS Code and Vercel.

## 1. Open in VS Code
Extract the ZIP, open the `betsy-baby-shower` folder in VS Code, then open the terminal.

## 2. Install and run locally
Requires Node.js (LTS recommended).

```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## 3. Event details already added
The project is configured with these details:

- Date: Saturday, 17 October 2026
- Time: 2:00 PM
- Venue: Our Residence, 83 Marine Road, Apapa
- RSVP contact: Jenn, +44 7957 742366

WhatsApp opens with a pre-filled attending or not-attending message. Guests must press Send themselves. If any details change, edit the `EVENT` object near the top of `src/main.jsx`; the WhatsApp display name is in the `whatsapp` function.

## 4. Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel should detect Vite automatically. Build command: `npm run build`; output directory: `dist`.
4. Deploy. No environment variables are required.

## Notes
- This version does not store RSVP records in a database. RSVP messages are sent by guests through WhatsApp after they press Send.
- The page is designed mobile-first, and includes reduced-motion support for visitors who prefer less animation.
