import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateauJoueurComponent } from './plateau-joueur.component';

describe('PlateauJoueurComponent', () => {
  let component: PlateauJoueurComponent;
  let fixture: ComponentFixture<PlateauJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateauJoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateauJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
