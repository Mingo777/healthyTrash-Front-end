
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;
  error: string;


  constructor(private usuariosService: UsuariosService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required,),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required, Validators.pattern(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
      ]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });
    this.error = ''


  }



  ngOnInit(): void {

  }


  onSubmit() {
    this.error = '';
    this.usuariosService.registro(this.formulario.value)
      .then(response => {
        if (response.error) {
          this.error = response.error
        } else {
          localStorage.setItem('token_healthy_trash', response.token);
          alert('El registro es correcto');
          this.usuariosService.logged(true);
          this.router.navigate(['/login']);
        }
      }
      )
      .catch(err => console.log(err)
      );
  }

  checkError(controlName: string, error: string, touched: boolean): boolean | undefined {
    return touched ? this.formulario.get(controlName)?.hasError(error) && this.formulario.get(controlName)?.touched : this.formulario.get(controlName)?.hasError(error);
  }



}
