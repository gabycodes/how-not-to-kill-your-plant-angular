import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlantsComponent } from './search-plants.component';

describe('SearchPlantsComponent', () => {
  let component: SearchPlantsComponent;
  let fixture: ComponentFixture<SearchPlantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPlantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
