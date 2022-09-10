import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, FormsModule, ContentRoutingModule, MaterialModule]
})
export class ContentModule {}
