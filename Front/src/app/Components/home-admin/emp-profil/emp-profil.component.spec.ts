import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeProfileComponent } from './emp-profil.component';

describe('EmpProfilComponent', () => {
  let component: EmployeProfileComponent;
  let fixture: ComponentFixture<EmployeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
