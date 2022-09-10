import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: string[] = [];

  constructor() { }

  add(favorite: string) {
    this.favorites.push(favorite);
  }
  remove(favorite: string) {
    const i = this.favorites.findIndex(el => {
      return el === favorite;
    });
    if (i > -1) {
      this.favorites.splice(i, 1);
    }
  }
}
