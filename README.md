Assignment 3 – Node.js
Overview

This assignment demonstrates the use of Node.js core modules, HTTP CRUD APIs, and an understanding of Node.js internals.
All tasks are implemented using pure Node.js without external frameworks.

Part 1: Streams

Read a file using a readable stream and log chunks.

Copy a file using readable and writable streams.

Compress a file using a stream pipeline.

Part 2: HTTP CRUD APIs

Data is stored in a JSON file using the fs module.

No in-memory arrays are used.

Endpoints

POST /user – Add new user (email must be unique)

PATCH /user/:id – Update user by ID

DELETE /user/:id – Delete user by ID

GET /user – Get all users

GET /user/:id – Get user by ID

Part 3: Node.js Internals

Event Loop

Libuv

Asynchronous operations

Call Stack vs Event Queue vs Event Loop

Thread Pool and configuration

Blocking vs non-blocking code
