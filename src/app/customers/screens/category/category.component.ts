import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from '../../models/categoria.model';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { CATEGORIA } from '../../services/categorias/CONST.categorias';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input()
  public id:number;
  public categoria: Categoria;
  public categorias: Categoria[] = CATEGORIA; 

  constructor(private categoriasService: CategoriasService,
              private activedRoute: ActivatedRoute,
              config: NgbCarouselConfig) { 
    this.id = activedRoute.snapshot.params['id'];

    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.categoria = this.categoriasService.getCategoryById(this.id);
  }

}
