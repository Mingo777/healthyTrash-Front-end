export interface Receta {
    id: number;
    titulo: string;
    ingredientes: string;
    urlFotos: string;
    descripcion: string;
    Fecha_inscripcion: Date;
    autor: string;
    modoDeCocinado: string;
    categoria_id: number;
    usuario_id: number;

}