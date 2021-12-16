import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      username: new FormControl(''),
      /* date: new FormControl(new Date().toLocaleDateString('en-CA'), [Validators.required]), */
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() { }


  checkError(controlName: string, error: string, touched: boolean): boolean | undefined {
    return touched ? this.formulario.get(controlName)?.hasError(error) && this.formulario.get(controlName)?.touched : this.formulario.get(controlName)?.hasError(error);
  }
}
