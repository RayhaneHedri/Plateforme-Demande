import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEmpComponent } from './ajout-emp.component';

describe('AjoutEmpComponent', () => {
  let component: AjoutEmpComponent;
  let fixture: ComponentFixture<AjoutEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutEmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
