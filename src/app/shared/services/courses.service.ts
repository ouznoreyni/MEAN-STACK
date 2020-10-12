import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  getAllCourses(displayNotification: boolean) {
    if (displayNotification) {
      console.log('Get All Courses HTTP Call');
    }
    return null;
  }

  createCourse(course) {
    console.log("created course", course);

  }

  updateCourse(course) {
    console.log("update course", course);
  }

  deleteCourse(id: number) {
    console.log("deleted course", id);
  }
}
