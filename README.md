Here’s a professional, human-friendly, and slightly humorous `README.md` file for your URL shortener project:

---

````markdown
# 🔗 URL Shortener – Because typing is hard...

Welcome to your very own URL shortener built with **Node.js**, **Express**, and **MongoDB**. If you’ve ever looked at a 200-character-long URL and thought, “There’s no way I’m sharing *that*,” this app is for you.

This project lets users shorten URLs, track visits, and manage links – all wrapped up in a clean and user-friendly UI powered by EJS.

---

## 🛠️ Tech Stack

- **Node.js** + **Express** – Server & routing
- **MongoDB** – Data storage
- **Mongoose** – ORM
- **EJS** – Views templating
- **JWT (JSON Web Tokens)** – Auth like a boss
- **Cookies** – For keeping users logged in without remembering passwords every 2 minutes

---

## 📦 Features

- 🔐 **User Authentication** (Signup/Login)
- 🧠 **Role-based Access** (NORMAL vs ADMIN)
- 📊 **Visit Tracking** (Timestamped visit history)
- ✨ **Custom Short URLs**
- 💾 Stored safely in MongoDB
- 📁 Clean project structure

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
````


## 🧪 Test it!

* Go to `/signup` to create an account.
* Log in at `/login`.
* Once you're in, go to `/url` and create short URLs.
* If your role is `"ADMIN"`, visit `/admin/urls` to view all links.

---

## 🤓 Folder Structure

```bash
project-02-short-url/
│
├── models/
│   └── url.js
│   └── user.js
│
├── routes/
│   └── url.js
│   └── user.js
│   └── staticRouter.js
│
├── middlewares/
│   └── auth.js
│
├── views/
│   └── login.ejs
│   └── signup.ejs
│   └── home.ejs
│
├── service/
│   └── auth.js
│
└── index.js
```

---

## 😎 Why I Built This

Because long URLs suck. And also to learn backend development, authentication, routing, and how to yell at your screen when MongoDB refuses to connect. But mostly... to learn.

---

## 🧙 Author

Made with ☕, 🍜, and console.logs by **Affan**.
Got questions? Open an issue or email me at [email](na422558@gmail.com)

---

## 📌 Note to Self

* Add password hashing 🔒
* Deploy on Render / Vercel 📦
* Add copy-to-clipboard and QR code generator for fun 🧪

---

Happy coding! 🎉

```

---

Let me know if you want a version with copy-paste ready emojis removed or one customized for GitHub Pages!
```
