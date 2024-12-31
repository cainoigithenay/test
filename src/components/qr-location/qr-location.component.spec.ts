import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrLocationComponent } from './qr-location.component';

describe('QrLocationComponent', () => {
  let component: QrLocationComponent;
  let fixture: ComponentFixture<QrLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
