import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { OrderComponent } from './components/order/order.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductComponent } from './components/admin/product/product.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { CreateCategoryComponent } from './components/admin/category/create-category/create-category.component';
import { UpdateCategofryComponent } from './components/admin/category/update-category/update-category.component';

export const routes: Routes = [
    { 'path': '', component: HomeComponent },
    { 'path': 'login', component: LoginComponent },
    { 'path': 'register', component: RegisterComponent },
    { 'path': 'products/:id', component: DetailProductComponent },
    { 'path': 'orders', component: OrderComponent },
    { 'path': 'user_profile', component: UserProfileComponent },
    { 'path': 'oder/:id', component: OrderDetailComponent },
    {
        'path': 'admin',
        component: AdminComponent,
        //canActivate: [AdminGruardFn]
    },
    {
        'path': 'admin/product', component: ProductComponent,
        //canActivate: [AdminGruardFn]
    },
    {
        'path': 'admin/category', component: CategoryComponent,
        //canActivate: [AdminGruardFn]
    },
    { 'path': 'admin/create-category', component: CreateCategoryComponent },
    { 'path': 'admin/update-category', component: UpdateCategofryComponent },
];
