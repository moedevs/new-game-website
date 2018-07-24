import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsHeaderComponent } from './commands-header.component';

describe('CommandsHeaderComponent', () => {
  let component: CommandsHeaderComponent;
  let fixture: ComponentFixture<CommandsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
