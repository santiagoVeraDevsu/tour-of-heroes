import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be an Array', () => {
    const result$ = service.getHeroes();
    result$.subscribe(result => {
      expect(result).toBeInstanceOf(Array);
    });
  });

  it('should have an ID Int property', () => {
    const result$ = service.getHeroes();
    result$.subscribe(result => {
      expect(result[0].id).toEqual(jasmine.any(Number));
    });
  });

  it('should have an name String property', () => {
    const result$ = service.getHeroes();
    result$.subscribe(result => {
      expect(result[0].name).toBeInstanceOf(String);
    });
  });
});
