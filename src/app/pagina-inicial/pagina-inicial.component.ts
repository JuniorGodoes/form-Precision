import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})

export class PaginaInicialComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  logo: any;
  imagePath: any;
  economia: any;
  relatorio: any

  ngOnInit(): void {
    this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Investment data-bro.png');
  }

}
