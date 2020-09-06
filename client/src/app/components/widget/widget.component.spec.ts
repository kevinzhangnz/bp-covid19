import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';

describe('Component: Widget', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;
  const mock = {
    key: 'title',
    value: 'text'
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ WidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    component.data = mock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show card', () => {
    expect(fixture.nativeElement.querySelector('.card')).toBeTruthy();
  });

  it('should show title', () => {
    expect(fixture.nativeElement.querySelector('.card-title').innerText).toEqual('title');
  });

  it('should show text', () => {
    expect(fixture.nativeElement.querySelector('.card-text').innerText).toEqual('text');
  });
});
