import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseFormComponent } from './universe-form.component';

describe('UniverseFormComponent', () => {
  let component: UniverseFormComponent;
  let fixture: ComponentFixture<UniverseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniverseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
