import express from 'express';
import { getAllReviews, createReview } from '../Controllers/reviewController.js';
import { authenticate, restrict } from './../auth/verifyToken.js';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAllReviews) // Route để lấy tất cả đánh giá
  .post(authenticate, restrict(['patient']), createReview); // Route để tạo đánh giá mới, chỉ cho phép bệnh nhân thực hiện

export default router;
