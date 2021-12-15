import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Trail } from '../trail.model';
import { TrailsService } from '../trails.service';

@Component({
  selector: 'app-trail-edit',
  templateUrl: './trail-edit.component.html',
  styleUrls: ['./trail-edit.component.css'],
})
export class TrailEditComponent implements OnInit {
  originalTrail: Trail;
  trail: Trail;
  editMode: boolean = false;

  constructor(
    private trailService: TrailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      if (id == undefined || null) {
        this.editMode = false;
        return;
      }
      this.originalTrail = this.trailService.getTrail(id);

      if (this.originalTrail == undefined || null) {
        return;
      }
      this.editMode = true;
      this.trail = JSON.parse(JSON.stringify(this.originalTrail));
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTrail = new Trail(
      null,
      value.name,
      value.description,
      value.mountain,
      value.location,
      value.length,
      value.time,
      value.imageUrl
    );
    if (this.editMode) {
      this.trailService.updateTrail(this.originalTrail, newTrail);
    } else {
      this.trailService.addTrail(newTrail);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/trails'], { relativeTo: this.route });
  }
}
