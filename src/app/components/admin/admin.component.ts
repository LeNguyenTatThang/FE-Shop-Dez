import { Component } from '@angular/core';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [DashbroadComponent, HeaderAdminComponent, FooterAdminComponent, SliderComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
