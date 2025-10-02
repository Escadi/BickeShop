import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone:false
})
export class ProductosPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

}
