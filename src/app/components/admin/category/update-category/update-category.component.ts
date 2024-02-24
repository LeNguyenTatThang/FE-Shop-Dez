import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SliderComponent } from '../../slider/slider.component';
import { HeaderAdminComponent } from '../../header-admin/header-admin.component';
import { FooterAdminComponent } from '../../footer-admin/footer-admin.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../CategoryService.component';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [ReactiveFormsModule, SliderComponent, HeaderAdminComponent, FooterAdminComponent],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})

export class UpdateCategofryComponent implements OnInit {
  form!: FormGroup;
  idcategory!: number;
  detail: any = {};

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateCategofryComponent>,
    private http: HttpClient,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (!data || !data.id) {
      this.dialogRef.close();
      return;
    }
    this.idcategory = data.id;
    this.form = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getDetailCate();
  }

  getDetailCate() {
    this.http.get(`http://localhost:8080/detail-category?idcategory=${this.idcategory}`)
      .subscribe((detail: any) => {
        this.detail = detail;
        this.form.patchValue({
          name: this.detail?.name,
          status: this.detail?.status
        });
      }, error => {
        console.error('Error fetching category details:', error);
      });
  }

  close() {
    this.dialogRef.close();
  }

  fetchUpdatedCategoryList() {
    this.http.get<any[]>('http://localhost:8080/categorys').subscribe((categoryList: any[]) => {
      this.categoryService.setCategoryList(categoryList);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const updatedCategory = this.form.value;
      this.http.put(`http://localhost:8080/update-category?id=${this.idcategory}`, updatedCategory, { responseType: 'text' })
        .subscribe(
          response => {
            console.log('Category updated successfully:', response);
            this.fetchUpdatedCategoryList();
            this.dialogRef.close();
          },
          error => {
            console.error('Error updating category:', error);
          }
        );
    } else {
      console.log('Form is invalid');
    }
  }
}