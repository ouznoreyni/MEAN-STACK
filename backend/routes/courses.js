const express = require('express')
const { course_all, course_post, course_details, course_patch, course_delete } = require('../controllers/courses')
const router = express.Router();

router
    .route('/')
    .get(course_all)
    .post(course_post)
router
    .route('/:course')
    .get(course_details)
    .patch(course_patch)
    .delete(course_delete)

module.exports = router;