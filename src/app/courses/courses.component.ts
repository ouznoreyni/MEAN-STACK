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
    this.loadCourses();
  }
  loadCourses() {
    this.coursesService.all()
      .subscribe(data => this.courses = data["courses"]);

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
    if (course.id) {
      this.coursesService.find(course)
        .subscribe(data => this.selectedCourse = data['course']);
    } else {
      this.selectedCourse = course;
    }

  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course)
        .subscribe(() => this.refreshCourse());
    } else {
      this.coursesService.create(course)
        .subscribe(() => this.refreshCourse());
    }
  }
  deleteCourse(course) {
    this.coursesService.delete(course)
      .subscribe(() => this.refreshCourse());
  }
  cancel() {
    this.resetSelectedCourse();
  }
  refreshCourse() {
    this.loadCourses();
    this.cancel();
  }
}
