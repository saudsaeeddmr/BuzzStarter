import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightblockComponent } from './rightblock.component';

describe('RightblockComponent', () => {
  let component: RightblockComponent;
  let fixture: ComponentFixture<RightblockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RightblockComponent]
    });
    fixture = TestBed.createComponent(RightblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
