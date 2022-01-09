import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudScannerComponent } from './cloud-scanner.component';

describe('CloudScannerComponent', () => {
  let component: CloudScannerComponent;
  let fixture: ComponentFixture<CloudScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudScannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
