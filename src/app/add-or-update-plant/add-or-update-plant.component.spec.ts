import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdatePlantComponent } from './add-or-update-plant.component';

describe('AddOrUpdatePlantComponent', () => {
  let component: AddOrUpdatePlantComponent;
  let fixture: ComponentFixture<AddOrUpdatePlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdatePlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdatePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
