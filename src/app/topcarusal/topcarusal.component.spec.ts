import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcarusalComponent } from './topcarusal.component';

describe('TopcarusalComponent', () => {
  let component: TopcarusalComponent;
  let fixture: ComponentFixture<TopcarusalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TopcarusalComponent]
    });
    fixture = TestBed.createComponent(TopcarusalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
