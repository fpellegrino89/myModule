import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLazyComponentComponent } from './my-lazy-component.component';

describe('MyLazyComponentComponent', () => {
  let component: MyLazyComponentComponent;
  let fixture: ComponentFixture<MyLazyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLazyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLazyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
