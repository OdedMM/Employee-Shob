import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmproleComponent } from './show-emprole.component';

describe('ShowEmproleComponent', () => {
  let component: ShowEmproleComponent;
  let fixture: ComponentFixture<ShowEmproleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmproleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmproleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
