import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { HEROES } from '../mocks/mock-heroes';

import { DashboardComponent } from './dashboard.component';
import { HeroService } from '../service/hero.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {    
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]),HttpClientTestingModule],
      declarations: [ DashboardComponent ],
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
});
