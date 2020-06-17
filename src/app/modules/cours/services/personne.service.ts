import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Personne } from 'src/app/interfaces/personne';
@Injectable({
  providedIn: 'any'
})
export class PersonneService {
  private url = 'http://localhost:5555/personnes';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Array<Personne>>(this.url);
  }
  addPerson(p: Personne) {
    return this.http.post(this.url, p);
  }
}
