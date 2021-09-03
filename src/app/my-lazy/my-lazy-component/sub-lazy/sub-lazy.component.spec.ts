import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLazyComponent } from './sub-lazy.component';

describe('SubLazyComponent', () => {
  let component: SubLazyComponent;
  let fixture: ComponentFixture<SubLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
