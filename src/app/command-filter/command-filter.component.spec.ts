import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandFilterComponent } from './command-filter.component';

describe('CommandFilterComponent', () => {
  let component: CommandFilterComponent;
  let fixture: ComponentFixture<CommandFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
