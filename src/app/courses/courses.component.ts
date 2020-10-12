import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = {}
  selectedCourse = null;
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.loadCourses(true);
    this.resetCourse();
  }
  selectCourse(course) {
    this.selectedCourse = course;
  }

  loadCourses(displayNotification: boolean) {
    this.courses = this.coursesService.getAllCourses(displayNotification);
  }

  saveCourse(course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
    this.resetCourse();
  }

  updateCourse(course) {
    this.coursesService.updateCourse(course)
  }

  createCourse(course) {
    this.coursesService.createCourse(course)
  }

  deleteCourse(id: number) {
    this.coursesService.deleteCourse(id)
  }

  resetCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.selectCourse(emptyCourse);
  }
}
