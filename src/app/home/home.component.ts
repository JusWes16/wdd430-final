import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Trail } from '../trails/trail.model';
import { TrailsService } from '../trails/trails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'goHIKEit';
  trails: Trail[] = [];
  trailsSmall: Trail[] = [];
  subscription: Subscription;

  constructor(
    private trailsService: TrailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.trails = this.trailsService.getTrails();
    this.subscription = this.trailsService.trailsListChanged.subscribe(
      (trailList: Trail[]) => {
        this.trails = trailList;
        for (let i = this.trails.length - 1; i > this.trails.length - 4; i--) {
          this.trailsSmall.push(this.trails[i]);
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  detailView(id: string) {
    this.router.navigate(['/trails/' + id], { relativeTo: this.route });
  }
}
