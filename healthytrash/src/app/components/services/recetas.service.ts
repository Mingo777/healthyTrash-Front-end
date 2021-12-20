import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receta } from '../interfaces/recetas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/recetas'
  }

  getAllRecetas(): Promise<Receta[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_healthy_trash')!
      })
    } */
    return this.httpClient.get<Receta[]>(this.baseUrl, this.createHeaders()).toPromise()
  }

  getRecetasById(recetasId: number): Promise<Receta> | undefined {
    /*    const httpOptions = {
         headers: new HttpHeaders({
           'Authorization': localStorage.getItem('token_healthy_trash')!
         })
       }; */
    return this.httpClient.get<Receta>(`${this.baseUrl}/${recetasId}`, this.createHeaders()).toPromise();
  }

  insertReceta(formValues: any): any {
    return this.httpClient
      .post(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }


  // SEARCH nombre de receta
  searchData(nombreReceta: string): Promise<any[]> {
    return this.httpClient
      .get<any[]>(`${this.baseUrl}/search/${nombreReceta}`)
      .toPromise();
  }

  deleteByIdToken(recetasId: number): Promise<any> {
    console.log('log de recetas id', recetasId);

    return this.httpClient
      .delete<any>(`${this.baseUrl}/${recetasId}`, this.createHeaders())
      .toPromise();
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_healthy_trash')!
      }),
    };
  }
}


