import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {

  constructor(private http: HttpClient) {}

  calcule(body: number[]) {
    return this.http.post(`http://127.0.0.1:5000/procesar`, body);
  }
}
