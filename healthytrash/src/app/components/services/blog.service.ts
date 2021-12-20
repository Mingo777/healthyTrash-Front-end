import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/blog'
  }


  getAllBlogs(): Promise<Blog[]> {
    return this.httpClient.get<Blog[]>(this.baseUrl, this.createHeaders()).toPromise()
  }

  insertBlog(formValues: any): any {
    return this.httpClient
      .post(this.baseUrl, formValues, this.createHeaders())
      .toPromise();
  }


  deleteByIdToken(blogId: number): Promise<any> {
    console.log('log de recetas id', blogId);

    return this.httpClient
      .delete<any>(`${this.baseUrl}/${blogId}`, this.createHeaders())
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
