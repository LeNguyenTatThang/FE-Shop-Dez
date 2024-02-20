import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategofryComponent } from './update-category.component';

describe('UpdateCategofryComponent', () => {
  let component: UpdateCategofryComponent;
  let fixture: ComponentFixture<UpdateCategofryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCategofryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UpdateCategofryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
