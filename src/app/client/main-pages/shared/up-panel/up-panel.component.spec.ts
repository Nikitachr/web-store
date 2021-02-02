import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpPanelComponent } from 'src/app/client/main-pages/shared/up-panel/up-panel.component';

describe('UpPanelComponent', () => {
  let component: UpPanelComponent;
  let fixture: ComponentFixture<UpPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
