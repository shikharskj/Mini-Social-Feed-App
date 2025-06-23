# 📰 Mini Social Feed App

A minimal social feed application built using **React**, **TypeScript**, **TailwindCSS**, and **Tiptap**. This app allows users to sign up, sign in, and post rich-text updates with emoji and profile picture support — all stored in the browser’s localStorage.

# 🔑 Demo Credentials
### You can log in using:
```
Username: demo@example.com
Password: password123
```

## 🔥 Features

- 🧾 User Signup and Login with local credentials (stored in localStorage)
- 🔐 Authentication modal and standalone `/login` route support
- 💬 Post feed updates with a rich text editor (Tiptap)
- 🚀 Auto-generated emoji and profile picture for each feed
- 🕓 Dynamic “time ago” calculation for each post
- ⚡ Optimistic UI updates using localStorage events
- 🧩 Modal implementation using React portals
- 🎨 Fully styled using TailwindCSS
- ✅ Type-safe components with TypeScript

## 🧪 Tech Stack

- ⚛️ React (w/ Functional Components + Hooks)
- ⛑ TypeScript
- 🖋 Tiptap Editor
- 🧠 Zustand (if applicable)
- 💅 Tailwind CSS
- 📦 localStorage for persistent data

## 🖼 Screenshots
![Image](https://github.com/user-attachments/assets/c1cd2f77-cf84-42c0-8116-2ed13f1f8703)
![Image](https://github.com/user-attachments/assets/504cf450-ef75-486f-9f2e-30abd04a3b47)
![Image](https://github.com/user-attachments/assets/b899f14f-e191-4d35-8f47-55ef43ae5e88)

![Image](https://github.com/user-attachments/assets/88ddb762-879a-4d80-9b44-29f477c32103)

| Auth Modal | Feed UI | Rich Post Input |
|------------|---------|-----------------|
| ![auth]() | ![feed](./public/screenshots/feed.png) | ![editor](./public/screenshots/editor.png) |

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shikharskj/Mini-Social-Feed-App
cd mini-social-feed
```

### 2. Install Dependencies

```
npm install
```

### 3. Start the Development Server

```
npm run dev
```

# 📁 Folder Structure
src/
│
├── components/           # Header, FeedCard, etc.
├── pages/                # FeedPage, LoginPage
├── shared/               # Modal, TextEditor, Icons
├── services/             # API utility functions
├── utils/                # Auth, emoji, time formatting
├── types/                # TypeScript interfaces
└── data.ts               # Seed feed data


