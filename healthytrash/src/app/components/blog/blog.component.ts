import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../interfaces/blog.interfaces';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  formulario: FormGroup
  arrBlog: Blog[]

  constructor(private blogService: BlogService, private router: Router) {
    this.arrBlog = []
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      imagen: new FormControl(),
      fecha: new FormControl(new Date().toLocaleDateString('en-CA'), [Validators.required])
    });
  }

  ngOnInit(): void {
    this.blogService.getAllBlogs()
      .then(response => this.arrBlog = response)
      .catch(error => console.log(error)
      );
  };

  onSubmit() {
    if (this.formulario.value) {
      this.blogService.insertBlog(this.formulario.value);
      alert('Receta creada')
      this.blogService.getAllBlogs()
        .then(response => this.arrBlog = response)
        .catch(error => console.log(error)
        );
    };
    this.router.navigate(['/blog'])
  }


  deleteBlog(blogId: number) {
    this.blogService.deleteByIdToken(blogId);
    this.blogService.getAllBlogs()
      .then(response => this.arrBlog = response)
      .catch(error => console.log(error)
      );
  }


  checkError(controlName: string, error: string, touched: boolean): boolean | undefined {
    return touched ? this.formulario.get(controlName)?.hasError(error) && this.formulario.get(controlName)?.touched : this.formulario.get(controlName)?.hasError(error);
  }









}
