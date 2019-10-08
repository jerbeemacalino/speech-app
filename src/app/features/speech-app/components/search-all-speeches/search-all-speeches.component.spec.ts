import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAllSpeechesComponent } from './search-all-speeches.component';

describe('SearchAllSpeechesComponent', () => {
  let component: SearchAllSpeechesComponent;
  let fixture: ComponentFixture<SearchAllSpeechesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAllSpeechesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAllSpeechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
