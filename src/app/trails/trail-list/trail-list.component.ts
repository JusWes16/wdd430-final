import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Trail } from '../trail.model';
import { TrailsService } from '../trails.service';

@Component({
  selector: 'app-trail-list',
  templateUrl: './trail-list.component.html',
  styleUrls: ['./trail-list.component.css']
})
export class TrailListComponent implements OnInit {
  trails: Trail[] = [];
  subscription: Subscription;

  constructor(private trailService: TrailsService) { }

  ngOnInit() {
    this.trails = this.trailService.getTrails();
    this.subscription = this.trailService.trailsListChanged
      .subscribe(
        (trailList: Trail[]) => {
          this.trails = trailList 
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
