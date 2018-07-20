import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublechainsComponent } from './doublechains.component';

describe('DoublechainsComponent', () => {
  let component: DoublechainsComponent;
  let fixture: ComponentFixture<DoublechainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublechainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublechainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
