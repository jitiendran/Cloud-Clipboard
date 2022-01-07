import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetClipComponent } from './set-clip.component';

describe('SetClipComponent', () => {
  let component: SetClipComponent;
  let fixture: ComponentFixture<SetClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetClipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
