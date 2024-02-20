import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { FooterAdminComponent } from '../footer-admin/footer-admin.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HeaderAdminComponent, FooterAdminComponent, SliderComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  http = inject(HttpClient);
  products: any = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.http.get('http://localhost:8080/products')
      .subscribe((products: any) => {
        console.log("product here: ", products)
        this.products = products;
      })
  }
}
