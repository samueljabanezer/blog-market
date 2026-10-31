# Blog Market — Full-Stack MERN Blog Platform (Thiranex Task 4)

Complete MERN stack implementation of **Task 4: Blog Platform with Comments** based on the [FullStack Snehasish MERN Blog Tutorial](https://www.youtube.com/watch?v=zuye-dYSkS0) and Thiranex portal requirements.

## Architecture Included
1. **`/backend` (Node.js + Express + MongoDB + JWT + Multer)**:
   - `models/User.js`, `models/Post.js`, `models/Comment.js`
   - `verifyToken.js` (JWT cookie verification middleware)
   - `routes/auth.js` (`/register`, `/login`, `/logout`, `/refetch`)
   - `routes/posts.js` (CRUD + `?search=` regex filter + `/user/:userId`)
   - `routes/comments.js` (Create, Delete, Get comments by `postId`)
   - `routes/users.js` (Update profile + Delete user with cascade cleanup)
2. **`/frontend/public/index.html`**:
   - Interactive frontend featuring live search, category tag filters, post creation/editing with dynamic category pills & file upload, author-gated edit/delete actions, and nested comment threads.
