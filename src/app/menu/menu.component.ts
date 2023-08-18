import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  imagePath: any;

  ngOnInit(): void {
    this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('assets/logo.jpeg');
  }

}
