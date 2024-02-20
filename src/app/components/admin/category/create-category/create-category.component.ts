import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderAdminComponent } from '../../header-admin/header-admin.component';
import { FooterAdminComponent } from '../../footer-admin/footer-admin.component';
import { SliderComponent } from '../../slider/slider.component';
import { Observable, catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderAdminComponent, FooterAdminComponent, SliderComponent],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {
  form: FormGroup; // khai báo biến form kiểu FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // tạo form bằng FormBuilder
    this.form = this.fb.group({
      name: ['', Validators.required], // trường name có kiểm tra rỗng
      status: ['active'], // trường status có giá trị mặc định là active
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.createCategory(this.form.value).subscribe(
        response => {
          console.log('Category created successfully:', response);
        },
        error => {
          console.error('Something went wrong while creating category:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  createCategory(category: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/create-category', category)
      .pipe(
        catchError(error => {
          return throwError('Something went wrong while creating category: ' + error);
        })
      );
  }

}
