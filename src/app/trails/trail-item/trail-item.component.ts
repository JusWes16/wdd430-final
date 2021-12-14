import { Component, Input, OnInit } from '@angular/core';
import { Trail } from '../trail.model';

@Component({
  selector: 'app-trail-item',
  templateUrl: './trail-item.component.html',
  styleUrls: ['./trail-item.component.css']
})
export class TrailItemComponent implements OnInit {
  @Input() trail: Trail;

  constructor() { }

  ngOnInit(): void {
  }

}
