import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria.model';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { CATEGORIA } from '../../services/categorias/CONST.categorias';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lugar: string = 'lugar';
  categorias_lugar: Categoria[];

  madera: string = 'madera';
  categorias_madera: Categoria[];

  @HostBinding('class') componentCssClass: any;

  constructor(public overlayContainer: OverlayContainer, private categoriasService: CategoriasService){
    this.categorias_lugar  = CATEGORIA;
    this.categorias_madera = CATEGORIA;
  }

  ngOnInit(): void{
    this.categorias_lugar  = this.categoriasService.getCategoryByType(this.lugar);
    this.categorias_madera = this.categoriasService.getCategoryByType(this.madera);
  }

  public onSetTheme(e: string){
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
  }

}
