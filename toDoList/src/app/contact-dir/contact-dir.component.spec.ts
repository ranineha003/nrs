import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDirComponent } from './contact-dir.component';

describe('ContactDirComponent', () => {
  let component: ContactDirComponent;
  let fixture: ComponentFixture<ContactDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
