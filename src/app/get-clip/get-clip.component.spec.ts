import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClipComponent } from './get-clip.component';

describe('GetClipComponent', () => {
  let component: GetClipComponent;
  let fixture: ComponentFixture<GetClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
