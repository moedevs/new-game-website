import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandDecoratorComponent } from './command-decorator.component';

describe('CommandDecoratorComponent', () => {
  let component: CommandDecoratorComponent;
  let fixture: ComponentFixture<CommandDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
