import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;
  let ele: Element;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponentComponent],
    }).compileComponents();
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
    fixture.detectChanges();
    expect(component.counter).toEqual(20);
    expect(ele.textContent).toContain('- counter: 20 +');
  });

  it('should increase the value', () => {
    component.counter = 20;
    fixture.detectChanges();
    component.increment();
    fixture.detectChanges();
    expect(component.counter).toEqual(21);
    expect(ele.textContent).toContain('- counter: 21 +');
  });

  it('should decrease the value', () => {
    component.counter = 19;
    fixture.detectChanges();
    component.decrement();
    fixture.detectChanges();
    expect(component.counter).toEqual(18);
    expect(ele.textContent).toContain('- counter: 18 +');
    
  });

  it('should not decrease the value below 0', () => {
    component.counter = 3;
    fixture.detectChanges();

    for (let i = 0; i < 5; i++) {
      component.decrement(); 
      fixture.detectChanges();
    }

    expect(component.counter).toEqual(0);
    expect(ele.textContent).toContain('- counter: 0 +');
  });
});
