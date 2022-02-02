import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, ContentRoutingModule, MaterialModule]
})
export class ContentModule {}
