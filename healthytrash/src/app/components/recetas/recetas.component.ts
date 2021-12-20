import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Receta } from '../interfaces/recetas.interfaces';
import { RecetasService } from '../services/recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  formulario: FormGroup

  arrRecetas: Receta[];

  constructor(private recetasService: RecetasService, private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      ingredientes: new FormControl('', [Validators.required]),
      urlFotos: new FormControl(),
      descripcion: new FormControl('', [Validators.required]),
      Fecha_inscripcion: new FormControl(new Date().toLocaleDateString('en-CA'), [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      modoDeCocinado: new FormControl('', [Validators.required]),
    })
    this.arrRecetas = []
  }

  ngOnInit(): void {

    this.recetasService.getAllRecetas()
      .then(response => this.arrRecetas = response)
      .catch(error => console.log(error)
      );
  };


  onSubmit() {
    if (this.formulario.value) {
      this.recetasService.insertReceta(this.formulario.value);
      alert('Receta creada')
      this.recetasService.getAllRecetas()
        .then(response => this.arrRecetas = response)
        .catch(error => console.log(error)
        );
    };
    this.router.navigate(['/recetas'])
  }


  checkError(controlName: string, error: string, touched: boolean): boolean | undefined {
    return touched ? this.formulario.get(controlName)?.hasError(error) && this.formulario.get(controlName)?.touched : this.formulario.get(controlName)?.hasError(error);
  }

  deleteRecetas(recetasId: number) {
    this.recetasService.deleteByIdToken(recetasId);
    this.recetasService.getAllRecetas()
      .then(response => this.arrRecetas = response)
      .catch(error => console.log(error)
      );
  }




}
