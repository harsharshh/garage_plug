import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNoComponent } from './service-no.component';

describe('ServiceNoComponent', () => {
  let component: ServiceNoComponent;
  let fixture: ComponentFixture<ServiceNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
