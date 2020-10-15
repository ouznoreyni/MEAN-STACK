import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = "http://localhost:8080/api/courses";
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
  constructor(private http: HttpClient) { }

  getUrlwithId(id) {
    return `${baseUrl}/${id}`;
  }
  all() {
    return this.http.get(baseUrl);
  }
  find(course) {
    return this.http.get(this.getUrlwithId(course.id))
  }
  create(course) {
    return this.http.post(baseUrl, course);
  }
  update(course) {
    return this.http.patch(this.getUrlwithId(course.id), course);
  }
  delete(course) {
    return this.http.delete(this.getUrlwithId(course))
  }
}
