import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Services_phoneComponent } from './services_phone.component';

describe('Services_phoneComponent', () => {
  let component: Services_phoneComponent;
  let fixture: ComponentFixture<Services_phoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Services_phoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Services_phoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
