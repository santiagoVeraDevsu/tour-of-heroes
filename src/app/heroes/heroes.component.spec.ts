import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { Hero } from '../service/hero';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render hero name in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('My Heroes');
  }));

  it('should render li tag', async(() => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul')).toBeTruthy();
  }));

  // it('should call onSelect function', async(() => {
  //   spyOn(component, 'onSelect');
  
  //   let button = fixture.debugElement.nativeElement.querySelector('li');
  //   button.click();
  
  //   fixture.whenStable().then(() => {
  //     expect(component.onSelect).toHaveBeenCalled();
  //   });
  // }));

  // it('should render app-hero-detail tag', async(() => {
  //   const fixture = TestBed.createComponent(HeroesComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('app-hero-detail ')).toBeTruthy();
  // }));

  // it('should select a hero', () => {
  //   component.onSelect({id:666,name: 'Gandalf'})
  //   expect(component.selectedHero.name).toEqual('Gandalf');
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
