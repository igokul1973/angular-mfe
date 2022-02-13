import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { ContentRoutingModule } from './content-routing.module';
import { Dashboard2Component } from '../dashboard2/dashboard2.component';

@NgModule({
    declarations: [DashboardComponent, Dashboard2Component],
    imports: [CommonModule, ContentRoutingModule, MaterialModule]
})
export class ContentModule {}
