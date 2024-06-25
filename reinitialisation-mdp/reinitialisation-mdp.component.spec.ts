import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitialisationMDPComponent } from './reinitialisation-mdp.component';

describe('ReinitialisationMDPComponent', () => {
  let component: ReinitialisationMDPComponent;
  let fixture: ComponentFixture<ReinitialisationMDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReinitialisationMDPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReinitialisationMDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
