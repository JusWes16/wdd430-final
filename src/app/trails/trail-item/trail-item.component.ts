import { Component, Input, OnInit } from '@angular/core';
import { Trail } from '../trail.model';
import { TrailsService } from '../trails.service';

@Component({
  selector: 'app-trail-item',
  templateUrl: './trail-item.component.html',
  styleUrls: ['./trail-item.component.css']
})
export class TrailItemComponent implements OnInit {
  @Input() trail: Trail;
  // trails: Trail[];

  constructor(private trailService: TrailsService) { }

  ngOnInit(): void {
    // this.trails = this.trailService.getTrails();
  }

  onDelete(id: string){ 
    this.trailService.deleteTrail(id);
  }

}
