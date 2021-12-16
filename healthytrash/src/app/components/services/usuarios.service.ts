import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;
  private login$: Subject<boolean>;

  constructor(private httpClient: HttpClient,) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
    this.login$ = new Subject();
  }

  registro(formValues: any) {
    return this.httpClient.post(`${this.baseUrl}/registro`, formValues).toPromise();
    /*   return firstValueFrom(this.httpClient.post(`${this.baseUrl}/registro`, formValues)); */
  }

  login(formValues: any): Promise<any> {
    return this.httpClient.post<any>(
      `${this.baseUrl}/login`, formValues).toPromise();

  }

  logged(isLogged: boolean) {
    this.login$.next(isLogged);
  }

  loginObs() {
    return this.login$.asObservable();
  }

}
