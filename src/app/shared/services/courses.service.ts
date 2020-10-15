import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//api apiEndPoint url
const apiEndPoint = "http://localhost:8080/api/courses";
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getUrlwithId(id) {
    return `${apiEndPoint}/${id}`;
  }
  all() {
    return this.http.get(apiEndPoint);
  }
  find(course) {
    return this.http.get(this.getUrlwithId(course.id));
  }
  create(course) {
    return this.http.post(apiEndPoint, course);
  }
  update(course) {
    return this.http.patch(this.getUrlwithId(course.id), course);
  }
  delete(course) {
    return this.http.delete(this.getUrlwithId(course));
  }
}
