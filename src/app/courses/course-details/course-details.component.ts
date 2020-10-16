import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  @Input() course;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
