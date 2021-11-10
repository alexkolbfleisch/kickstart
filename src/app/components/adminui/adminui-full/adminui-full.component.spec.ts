import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuiFullComponent } from './adminui-full.component';

describe('AdminuiFullComponent', () => {
  let component: AdminuiFullComponent;
  let fixture: ComponentFixture<AdminuiFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminuiFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuiFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
