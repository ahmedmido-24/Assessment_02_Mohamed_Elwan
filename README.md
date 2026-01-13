# 📘 Assignment 2 – Node.js

---

## 🔍 Overview

This assignment demonstrates the use of **Node.js core modules**, building **HTTP-based CRUD APIs**, and understanding **Node.js internals**.
All tasks are implemented using **pure Node.js**, without external frameworks.

---

## 🟢 Part 1: Streams

* Read a file using a **readable stream** and log file chunks.
* Copy a file using **readable and writable streams**.
* Compress a file using a **stream pipeline**.

---

## 🔵 Part 2: HTTP CRUD APIs

* Data is stored in a **JSON file** using the `fs` module.
* No in-memory arrays are used for data management.

### 📌 API Endpoints

* **POST** `/user` → Add new user (email must be unique)
* **PATCH** `/user/:id` → Update user by ID
* **DELETE** `/user/:id` → Delete user by ID
* **GET** `/user` → Get all users
* **GET** `/user/:id` → Get user by ID

---

## 🟣 Part 3: Node.js Internals

* Event Loop
* Libuv
* Asynchronous operations
* Call Stack vs Event Queue vs Event Loop
* Thread Pool and configuration
* Blocking vs non-blocking code execution

---

## ▶️ Run Project

```bash
node main.js
```

---

## 👤 Author

**Ahmed Mokhtar**
GitHub: [https://github.com/ahmedmido-24][(https://github.com/ahmedmido-24)](https://github.com/ahmedmido-24/Assessment_02_Mohamed_Elwan)
