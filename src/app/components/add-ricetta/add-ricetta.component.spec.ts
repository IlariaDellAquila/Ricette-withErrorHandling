import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRicettaComponent } from './add-ricetta.component';

describe('AddRicettaComponent', () => {
  let component: AddRicettaComponent;
  let fixture: ComponentFixture<AddRicettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRicettaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
