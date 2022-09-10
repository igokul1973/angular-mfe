import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add favorites', () => {
    service.add('hello');
    service.add('goodbye');
    expect(service.favorites).toEqual(['hello', 'goodbye']);
  });

  it('should remove favorites', () => {
    service.add('hello');
    service.add('goodbye');
    service.remove('hello');
    expect(service.favorites).toEqual(['goodbye']);
  });
});
