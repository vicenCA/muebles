import { Injectable } from '@angular/core';
import { Categoria } from '../../models/categoria.model';
import { CATEGORIA } from './CONST.categorias';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categorias: Categoria[];

  constructor() {
    this.categorias = CATEGORIA;
   }

  public getAllCategory() {
    return this.categorias;
  }

  public getCategoryByType(tipo_categorias: string) {
    return this.categorias.filter((categoria: Categoria) => categoria.tipo_categoria == tipo_categorias);
  }
  
}
