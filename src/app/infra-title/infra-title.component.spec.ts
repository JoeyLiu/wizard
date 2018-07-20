import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraTitleComponent } from './infra-title.component';

describe('InfraTitleComponent', () => {
  let component: InfraTitleComponent;
  let fixture: ComponentFixture<InfraTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfraTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
