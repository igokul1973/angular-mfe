import { Component } from '@angular/core';
import { FavoritesService } from 'favorites';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    favorites = this.favoritesService.favorites;
    favorite = '';

    constructor(private favoritesService: FavoritesService) {}

    addFavorite() {
        this.favoritesService.add(this.favorite);
    }

    removeFavorite() {
        this.favoritesService.remove(this.favorite);
    }
}
