import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponentThreeComponent } from './example-component-three.component';

describe('ExampleComponentThreeComponent', () => {
  let component: ExampleComponentThreeComponent;
  let fixture: ComponentFixture<ExampleComponentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleComponentThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
