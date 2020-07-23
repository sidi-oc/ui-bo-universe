import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingLibComponent } from './testing-lib.component';

describe('TestingLibComponent', () => {
  let component: TestingLibComponent;
  let fixture: ComponentFixture<TestingLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
