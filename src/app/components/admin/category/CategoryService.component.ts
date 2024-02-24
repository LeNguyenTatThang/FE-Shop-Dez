import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private categoryListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    public categoryList$: Observable<any[]> = this.categoryListSubject.asObservable();

    constructor(private http: HttpClient) { }
    fetchCategoryList() {
        this.http.get<any[]>('http://localhost:8080/categorys').subscribe(
            (categoryList: any[]) => {
                this.setCategoryList(categoryList);
            },
            (error) => {
                console.error('Error fetching category list:', error);
            }
        );
    }

    setCategoryList(categoryList: any[]) {
        this.categoryListSubject.next(categoryList);
    }
}
