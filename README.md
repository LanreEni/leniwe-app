# LENIWE

LENIWE is a modern wellness and self-care web app built with Next.js, React, Tailwind CSS, and Firebase. It helps users track their mood, sleep, and personal goals, while providing a personalized dashboard and secure profile management.

## Features

- **Personalized Dashboard:** See your streaks, sleep averages, mood trends, and quick actions.
- **Profile Management:** Complete and update your profile with name, photo, goals, and more.
- **Mood & Sleep Logging:** Log daily mood and sleep data for insights and progress.
- **Secure Authentication:** Sign up and log in with email/password using Firebase Auth.
- **Profile Photo Upload:** Upload and store your profile image securely with Firebase Storage.
- **Firestore Integration:** All user data is stored and synced in Firebase Firestore.
- **Responsive Design:** Beautiful, mobile-friendly UI with custom branding.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/leniwe.git
   cd leniwe
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configure Firebase:**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com/).
   - Add your Firebase config to `.env.local` (see `.env.example`).
   - Set up Firestore and Storage in the Firebase Console.
   - Update Firestore rules to:
     ```
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /users/{userId} {
           allow read, write: if request.auth != null && request.auth.uid == userId;
         }
       }
     }
     ```
4. **Run the app locally:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:3000`.

## Folder Structure

- `src/app/` — Main Next.js app directory (pages, dashboard, profile, etc.)
- `src/components/` — Reusable UI components (Header, Footer, etc.)
- `src/lib/` — Firebase logic (auth, profile, storage)
- `public/` — Static assets (images, fonts)
- `src/styles/` — Global and custom styles

## Customization

- Update branding, images, and colors in `src/components/Header.tsx`, `Footer.tsx`, and `public/`.
- Add new features or fields in `src/types/user.ts` and related profile logic.

## Contributing

Pull requests and suggestions are welcome! Please open an issue for bugs or feature requests.

## License

This project is licensed under the MIT License.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
