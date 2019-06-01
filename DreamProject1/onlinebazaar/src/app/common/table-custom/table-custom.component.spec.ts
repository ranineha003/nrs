import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecustomComponent } from './table-custom.component';

describe('TablecustomComponent', () => {
  let component: TablecustomComponent;
  let fixture: ComponentFixture<TablecustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablecustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
