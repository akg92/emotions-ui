import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideomatchComponent } from './videomatch.component';

describe('VideomatchComponent', () => {
  let component: VideomatchComponent;
  let fixture: ComponentFixture<VideomatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideomatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideomatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
