import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Trail } from './trail.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrailsService {
  trails: Trail[] = [];
  trailsListChanged = new Subject<Trail[]>();

  constructor(private http: HttpClient) {}

  getTrails(): any {
    this.http
      .get<{ message: string; trails: any }>('http://localhost:3000/trails')
      .pipe(
        map((trailData) => {
          return trailData.trails.map((trail) => {
            return {
              id: trail._id,
              name: trail.name,
              description: trail.description,
              mountain: trail.mountain,
              location: trail.location,
              length: trail.length,
              time: trail.time,
              imageUrl: trail.imageUrl,
            };
          });
        })
      )
      .subscribe((trails) => {
        this.trails = trails;
        this.trailsListChanged.next([...this.trails]);
      });
  }

  getTrail(id: string): Trail {
    for (let i = 0; i < this.trails.length; i++) {
      if (id === this.trails[i].id) {
        return this.trails[i];
      }
    }
    return null;
  }

  addTrail(trail: Trail) {
    this.http
      .post<{ message: string; trailId: string }>(
        'http://localhost:3000/trails',
        trail
      )
      .subscribe((responseData) => {
        console.log(responseData.message);
        const id = responseData.trailId;
        trail.id = id;
      });
    this.trails.push(trail);
    this.trailsListChanged.next([...this.trails]);
  }

  updateTrail(oldTrail:Trail, newTrail: Trail) {
    if (!oldTrail || !newTrail) {
      return;
    }
    const pos = this.trails.findIndex((trail) => trail.id === oldTrail.id);
    if (pos < 0) {
      return;
    }
    newTrail.id = oldTrail.id;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http
      .put(
        'http://localhost:3000/trails/' + oldTrail.id,
        newTrail,
        { headers: headers }
      )
      .subscribe((response: Response) => {
        this.trails[pos] = newTrail;
        this.trailsListChanged.next([...this.trails]);
      });
  }

  deleteTrail(id: string) {
    this.http.delete('http://localhost:3000/trails/' + id).subscribe(() => {
      const updateTrails = this.trails.filter(trail => trail.id !== id);
      this.trails = updateTrails;
      this.trailsListChanged.next([...this.trails]);
    });
  }
}
