import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = [
    {
      id: 1,
      title: 'Angular 10 fundamentals',
      description: 'learn the fundamentals of Angular 10',
      percentComplete: 28,
      favorite: true
    },
    {
      id: 2,
      title: 'Master Javascript concepts',
      description: 'learn all advanced javascript concepts',
      percentComplete: 50,
      favorite: true
    }
  ];
  constructor() { }

  all() {
    return this.courses;
  }
  find(courseId) {
    console.log("course ", courseId);

  }
  create(course) {
    console.log("create course ", course);

  }
  update(course) {
    console.log("update course ", course);

  }
  delete(courseId) {
    console.log("delete course ", courseId);

  }
}
