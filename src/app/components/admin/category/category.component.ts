import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SliderComponent } from '../slider/slider.component';
import { FooterAdminComponent } from '../footer-admin/footer-admin.component';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCategofryComponent } from './update-category/update-category.component';
@Component({
  selector: 'app-category',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    MatToolbarModule,
    HeaderAdminComponent,
    FooterAdminComponent,
    SliderComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  http = inject(HttpClient);
  categorys: any = [];

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.http.get('http://localhost:8080/categorys')
      .subscribe((categorys: any) => {
        console.log("check cate: ", categorys)
        this.categorys = categorys;
      })
  }
  onSliderChange(category: any, newValue: number) {
    category.status = newValue;
  }

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(UpdateCategofryComponent);
  }

  onSubmit() {
    // Xử lý khi submit form
  }
  deleteCategory(id: number) {
    if (confirm("Bạn có chắc muốn xóa thể loại này?")) {
      this.http.delete(`http://localhost:8080/delete-category?idcategory=${id}`)
        .subscribe((response) => {
          console.log(response);
          console.log("Xóa thành công");
          this.getCategory();
        }, (error) => {
          console.error("Lỗi khi xóa thể loại:", error);
        });

    }
  }
}
