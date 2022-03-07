import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationtestService {

  readonly urlApi: string = `${environment.urlApi}/`;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getTest2(fechaInicio: string, fechaFin: string) {
    return this.http.get(`${this.urlApi}/test2`);
  }

}
