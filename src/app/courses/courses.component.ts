import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = null;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.courses = this.coursesService.courses;
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.selectCourse(emptyCourse);
  }
  selectCourse(course) {
    this.selectedCourse = course;
  }

  saveCourse(course) {
    console.log(course.valid);

    if (course.id) {
      this.coursesService.update(course)
    } else {
      this.coursesService.create(course)
    }
  }
  deleteCourse(courseId) {
    console.log("delete course ", courseId);
  }
  cancel() {
    this.resetSelectedCourse()
  }
}
