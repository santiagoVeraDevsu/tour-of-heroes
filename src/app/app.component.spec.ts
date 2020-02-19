import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{path: 'dashboard', component: AppComponent}]),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes Unchained'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Tour of Heroes Unchained');
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes Unchained');
  }));

  it('link should be opened in separate tab', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    spyOn(window, 'open');
    const link = fixture.debugElement.nativeElement.querySelector('a');
    link.click();
    fixture.whenStable().then(() => {
        expect(link).toHaveBeenCalled();
    });
  });
});
