import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandDisplayComponent } from './command-display.component';

describe('CommandDisplayComponent', () => {
  let component: CommandDisplayComponent;
  let fixture: ComponentFixture<CommandDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
