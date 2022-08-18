import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponentOneComponent } from './example-component-one.component';

describe('ExampleComponentOneComponent', () => {
  let component: ExampleComponentOneComponent;
  let fixture: ComponentFixture<ExampleComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleComponentOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
