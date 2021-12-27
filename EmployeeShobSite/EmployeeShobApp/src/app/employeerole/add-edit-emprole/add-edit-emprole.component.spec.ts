import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmproleComponent } from './add-edit-emprole.component';

describe('AddEditEmproleComponent', () => {
  let component: AddEditEmproleComponent;
  let fixture: ComponentFixture<AddEditEmproleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEmproleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmproleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
