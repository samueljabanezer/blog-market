const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const commentRoute = require('./routes/comments');

dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);

// Image upload via Multer
const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, 'images');
  },
  filename: (req, file, fn) => {
    fn(null, req.body.img || file.originalname);
  }
});
const upload = multer({ storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('Image has been uploaded successfully!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  if (process.env.MONGO_URL) {
    mongoose.connect(process.env.MONGO_URL)
      .then(() => console.log('Connected to MongoDB Atlas'))
      .catch(err => console.error(err));
  }
  console.log('Blog Market Backend running on port ' + PORT);
});
