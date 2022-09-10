import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'favorites';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    favorites: string[] = this.favoritesService.favorites;
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map((result) => result.matches),
        shareReplay({
            refCount: true
        })
    );

    constructor(private breakpointObserver: BreakpointObserver, private favoritesService: FavoritesService) {}

    ngOnInit(): void {
        this.favoritesService.add('hello here');
    }
}
