import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDataComponent } from './f-data.component';

describe('FDataComponent', () => {
  let component: FDataComponent;
  let fixture: ComponentFixture<FDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
