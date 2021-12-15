import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Trail } from './trail.model';
import { TrailsService } from './trails.service';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.css']
})
export class TrailsComponent implements OnInit {
  trails: Trail[] = [];
  subscription: Subscription;

  constructor(private trailsService: TrailsService) { }

  ngOnInit(): void {
    this.trailsService.getTrails();
    this.subscription = this.trailsService.trailsListChanged
      .subscribe((trails) => {
        this.trails = trails
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
