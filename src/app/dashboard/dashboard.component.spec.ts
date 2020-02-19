import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an array of Heroes', () => {
    component.getHeroes();
    expect(component.heroes).toBeInstanceOf(Array);
  });

  it('should have an length of 4', () => {
    component.getHeroes();
    expect(component.heroes.length).toEqual(4);
  });

  it('should have an name property of type String', () => {
    component.getHeroes();
    expect(component.heroes[3].name).toBeInstanceOf(String);
  });
});
