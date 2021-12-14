import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Trail } from '../trail.model';
import { TrailsService } from '../trails.service';

@Component({
  selector: 'app-trail-details',
  templateUrl: './trail-details.component.html',
  styleUrls: ['./trail-details.component.css'],
})
export class TrailDetailsComponent implements OnInit {
  trail: Trail;
  id: string;

  constructor(
    private trailService: TrailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.trail = this.trailService.getTrail(this.id);
          console.log(this.trail)
        }
      );
  }
}
