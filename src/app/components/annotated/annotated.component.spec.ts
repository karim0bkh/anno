import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatedComponent } from './annotated.component';

describe('AnnotatedComponent', () => {
  let component: AnnotatedComponent;
  let fixture: ComponentFixture<AnnotatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
