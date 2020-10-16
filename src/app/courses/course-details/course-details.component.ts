import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  selectedCourse;
  originalTitle;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() set course(value) {
    if (value) {
      this.selectedCourse = { ...value };
      this.originalTitle = value.title;
    }
  }
}
