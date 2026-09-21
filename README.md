# Agrawal Samaj App — Privacy Policy & Data Governance Portal

Official Privacy Policy, Google Play Data Safety Reference, and Account Deletion portal for the **Agrawal Samaj Community Application** (Android Application ID: `app.agrawal.agrawal_samaj`).

Compliant with:
- **Digital Personal Data Protection (DPDP) Act, 2023** & **DPDP Rules, 2025**
- **Google Play Developer Policy** (User Data, Data Safety, Account Deletion)
- **Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021**

---

## 📱 Google Play Console URLs

Once deployed to Vercel (or configured under your custom domain `agrawal.app`), use these exact URLs in your Google Play Console:

| Field in Google Play Console | Target URL |
| :--- | :--- |
| **Privacy Policy URL** (Store Listing &rarr; App Content &rarr; Privacy Policy) | `https://your-app.vercel.app/` (or `https://agrawal.app/privacy`) |
| **Account Deletion URL** (Store Listing &rarr; App Content &rarr; Data Safety) | `https://your-app.vercel.app/delete-account` (or `https://agrawal.app/delete-account`) |
| **Data Safety Questionnaire Companion** | `https://your-app.vercel.app/data-safety` |
| **Terms of Service & Guidelines** | `https://your-app.vercel.app/terms` |

---

## 🚀 How to Deploy on Vercel

### Option 1: Vercel Web Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..." &rarr; "Project"**.
3. Import this GitHub repository (`TanKaizokuO/agrawal-samaj-privacy-policy`).
4. Keep the default settings (**Framework Preset**: `Other`, Root Directory: `./`).
5. Click **"Deploy"**. Your site will be live instantly with a free `*.vercel.app` domain and free automatic SSL/TLS!
6. *(Optional)* Add your custom domain `agrawal.app` under **Project Settings &rarr; Domains**.

### Option 2: Deploy via Vercel CLI
```bash
# In this directory:
npx vercel
# Follow prompt to link project and deploy
```

---

## 💻 Local Development & Preview
To run locally:
```bash
npm run dev
# Server will start at http://localhost:3000
```

---

## 🛡️ Core Data Safeguards & Invariants

1. **Strict Phone Privacy**: A member's phone number is visible only to verified linked family members. It is **never published** in the public directory.
2. **Blood Group Confidentiality**: Blood group is collected solely to match urgent Blood SOS alerts to compatible donors. It is **never displayed** to anyone (including family, requesters, and admins).
3. **Adult-Only Registry**: Only adults (18+) can register or hold accounts. Accompanying minors are included only as an aggregate headcount on event passes, preventing tracking or profiling.
4. **Biometrics**: Biometric unlock (fingerprint/face recognition) executes purely on local hardware via Android Keystore; no biometric data ever leaves the device.
5. **Two-Stage Erasure**: Account deletion immediately wipes all public member profiles, directory entries, and photos from live systems. Statutory financial and audit logs are retained in restricted storage for 12 months as mandated by DPDP Rule 8(3) and financial laws, after which they are destroyed permanently.

---

## 👤 Data Fiduciary & Grievance Redressal
- **Data Fiduciary / Operator**: Mr. Rahul Kumar Agrawal
- **Grievance Officer**: Mr. Rahul Kumar Agrawal
- **Grievance Contact Email**: [help.agrawal.app@gmail.com](mailto:help.agrawal.app@gmail.com)
- **Statutory Resolution SLA**: Within 30 calendar days
