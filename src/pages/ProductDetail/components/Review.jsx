import Button from "@components/Button/Button";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "../styles.module.scss";
import { reviewProduct } from "@/apis/productService";
import { ToastContext } from "@/contexts/ToastProvider";
import { getReviews } from "@/apis/productService";

const Review = ({ productId }) => {
  const { toast } = useContext(ToastContext);
  const [rating, setRating] = useState(0); // Lưu trạng thái sao đánh giá

  const [reviews, setReviews] = useState([]);

  // Schema validation using Yup
  const validationSchema = yup.object({
    rating: yup
      .number()
      .min(1, "Please select at least 1 star")
      .required("Rating is required"),
    review: yup
      .string()
      .min(10, "Review must be at least 10 characters")
      .required("Review is required"),
  });

  // Initialize useFormik
  const formik = useFormik({
    initialValues: {
      rating: 0, // Được cập nhật từ trạng thái rating
      review: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const { rating, review } = values;
      reviewProduct({ rating, comment: review, productId })
        .then((res) => {
          toast.success(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  // Hàm xử lý khi click vào sao
  const handleRating = (index) => {
    setRating(index + 1);
    formik.setFieldValue("rating", index + 1); // Cập nhật rating vào formik
  };

  useEffect(() => {
    getReviews(productId)
      .then((res) => {
        console.log(res);
        setReviews(res.reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <div className={styles.container}>
      <h2>REVIEWS</h2>
      {reviews ? (
        <div className={styles.reviewsContainer}>
          {reviews.map((item) => (
            <div key={item.id} className={styles.reviewItem}>
              <p className={styles.userName}>{item.user.fullName}</p>
              <div className={styles.reviewDetails}>
                <p className={styles.rating}>⭐ {item.rating}</p>
                <p className={styles.comment}>{item.comment}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className={styles.noReviews}>There are no reviews yet.</div>
          <div className={styles.firstReview}>
            Be the first to review “Duis aute irure”
          </div>
        </>
      )}

      <form onSubmit={formik.handleSubmit}>
        <div className={styles.rating}>
          <label>Your rating</label>
          <div className={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={styles.star}
                onClick={() => handleRating(index)}
              >
                {rating > index ? <FaStar /> : <FaRegStar />}
              </div>
            ))}
          </div>
          {formik.touched.rating && formik.errors.rating ? (
            <div className={styles.error}>{formik.errors.rating}</div>
          ) : null}
        </div>

        <div className={styles.reviewInput}>
          <label>Your review</label>
          <textarea
            name="review"
            value={formik.values.review}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Write your review here..."
          ></textarea>
          {formik.touched.review && formik.errors.review ? (
            <div className={styles.error}>{formik.errors.review}</div>
          ) : null}
        </div>

        <Button
          content={"SUBMIT"}
          type="submit"
          disabled={formik.isSubmitting}
        />
      </form>
    </div>
  );
};

export default Review;
