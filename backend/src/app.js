import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";
import postRoutes from "./modules/posts/posts.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import commentRoutes from "./modules/comments/comments.routes.js";
import likeRoutes from "./modules/likes/likes.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import cloudinary from "./config/cloudinary.js"; 

const app = express();
app.use((req, res, next) => {
  console.log("REQUEST:", req.method, req.url);
  next();
});

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

app.use("/api/posts", postRoutes);

app.use("/api/comments", commentRoutes);

app.use("/api/likes", likeRoutes);

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Stackeroa API is running 🚀" });
});

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "You accessed protected route",
    user: req.user,
  });
});

// app.get("/test-cloudinary", async (req, res) => {
//   try {
//     console.log("TEST START");

//     const result = await cloudinary.uploader.upload(
//       "https://res.cloudinary.com/demo/image/upload/sample.jpg"
//     );

//     console.log("UPLOAD SUCCESS");

//     return res.json(result);
//   } catch (err) {
//     console.log("FULL CLOUDINARY ERROR:");
//     console.log(err);

//     return res.status(500).json({
//       message: err.message,
//       error: err,
//     });
//   }
// });

app.use(errorMiddleware);

export default app;