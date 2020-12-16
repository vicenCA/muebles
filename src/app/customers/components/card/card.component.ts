import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  categoria: Categoria;
  constructor() { }

  ngOnInit(): void {
  }

}
