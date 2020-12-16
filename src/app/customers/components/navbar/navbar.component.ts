import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ngOnInit(){}

  @HostBinding('class') componentCssClass: any;

  constructor(public overlayContainer: OverlayContainer){}

  public onSetTheme(e: string){
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
  }
}
