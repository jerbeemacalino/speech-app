import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMySpeechesComponent } from './view-my-speeches.component';

describe('ViewMySpeechesComponent', () => {
  let component: ViewMySpeechesComponent;
  let fixture: ComponentFixture<ViewMySpeechesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMySpeechesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMySpeechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
