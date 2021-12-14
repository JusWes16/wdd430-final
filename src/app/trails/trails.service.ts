import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Trail } from './trail.model'

@Injectable({
  providedIn: 'root',
})
export class TrailsService {
  trails: Trail[] = [];
  trailsListChanged = new Subject<Trail[]>();

  constructor(private http: HttpClient) {}

  getTrails(): any{
    this.http
      .get<{ message: string; trails: Trail[] }>('http://localhost:3000/trails')
      .subscribe((returnTrails) => {
        this.trails = returnTrails.trails;
        // this.trails = JSON.parse(JSON.stringify(this.trails));
        // let trailsChanged = this.trails.slice()
        this.trailsListChanged.next([...this.trails]);
        console.log(this.trails)
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

  // addTrail(title: string, content: string){
  //   const trail = {id: null, title: title, content: content};
  //   this.http.post<{message: string}>('http://localhost:3000/trails', trail)
  //     .subscribe((responceDate)=>{
  //       console.log(responceDate.message);
  //     })
  //   this.trails.push(trail);

  // }
}
