import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SliderComponent } from '../slider/slider.component';
import { FooterAdminComponent } from '../footer-admin/footer-admin.component';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCategofryComponent } from './update-category/update-category.component';
import { CategoryService } from './CategoryService.component';
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
  categoryList: any[] = [];

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.categoryList$.subscribe((categoryList: any[]) => {
      this.categoryList = categoryList;
    });
    this.categoryService.fetchCategoryList();
  }

  openDialog(id: number) {
    this.dialog.open(UpdateCategofryComponent, {
      data: { id: id }
    });
  }

  deleteCategory(id: number) {
    if (confirm("Bạn có chắc muốn xóa thể loại này?")) {
      this.http.delete(`http://localhost:8080/delete-category?idcategory=${id}`)
        .subscribe((response) => {
          console.log(response);
          console.log("Xóa thành công");
          this.categoryService.fetchCategoryList();
        }, (error) => {
          console.error("Lỗi khi xóa thể loại:", error);
        });
    }
  }
}
