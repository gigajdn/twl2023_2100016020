import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamhsComponent } from './datamhs.component';

describe('DatamhsComponent', () => {
  let component: DatamhsComponent;
  let fixture: ComponentFixture<DatamhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatamhsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatamhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
