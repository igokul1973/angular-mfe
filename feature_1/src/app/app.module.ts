import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
    declarations: [AppComponent, NavComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, LayoutModule, MaterialModule, ContentModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
