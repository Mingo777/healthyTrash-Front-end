import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receta } from '../interfaces/recetas.interfaces';
import { RecetasService } from '../services/recetas.service';

@Component({
  selector: 'app-detalle-recetas',
  templateUrl: './detalle-recetas.component.html',
  styleUrls: ['./detalle-recetas.component.css']
})
export class DetalleRecetasComponent implements OnInit {
  receta?: Receta;
  recetas: Receta[]

  constructor(private activateRoute: ActivatedRoute, private recetasService: RecetasService) {
    this.recetas = []
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(async (params) => {
      this.receta = await this.recetasService.getRecetasById(parseInt(params.recetasId))
    })
  };

}
