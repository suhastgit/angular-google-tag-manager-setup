import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponentTwoComponent } from './example-component-two.component';

describe('ExampleComponentTwoComponent', () => {
  let component: ExampleComponentTwoComponent;
  let fixture: ComponentFixture<ExampleComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleComponentTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
