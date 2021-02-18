import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
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

  herramienta: string = 'herramienta';
  categorias_herramienta: Categoria[];

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private categoriasService: CategoriasService,
              config: NgbCarouselConfig){
    this.categorias_lugar  = CATEGORIA;
    this.categorias_madera = CATEGORIA;
    this.categorias_herramienta = CATEGORIA;

    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void{
    this.categorias_lugar  = this.categoriasService.getCategoryByType(this.lugar);
    this.categorias_madera = this.categoriasService.getCategoryByType(this.madera);
    this.categorias_herramienta = this.categoriasService.getCategoryByType(this.herramienta);
  }


}