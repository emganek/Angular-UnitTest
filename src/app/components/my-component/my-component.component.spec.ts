import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;
  let ele: Element

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentComponent);
    component = fixture.componentInstance;
    ele = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value', () => {
    expect(component.counter).toEqual(10);
  });

  it('should have a update value', () => {
    component.counter = 20;
    fixture.detectChanges()
    expect(component.counter).toEqual(20);
    expect(ele.textContent).toContain('counter: 20');
  });
});
