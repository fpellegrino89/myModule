import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLazyProfileComponentComponent } from './my-lazy-profile-component.component';

describe('MyLazyProfileComponentComponent', () => {
  let component: MyLazyProfileComponentComponent;
  let fixture: ComponentFixture<MyLazyProfileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLazyProfileComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLazyProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
