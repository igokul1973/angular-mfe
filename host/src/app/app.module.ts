import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Link2Component } from './link2/link2.component';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
    declarations: [AppComponent, NavComponent, Link2Component],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, LayoutModule, MaterialModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
