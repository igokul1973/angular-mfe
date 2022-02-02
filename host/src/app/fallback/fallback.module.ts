import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FallbackRoutingModule } from './fallback-routing.module';
import { FallbackComponent } from './fallback.component';


@NgModule({
    declarations: [FallbackComponent],
    imports: [CommonModule, FallbackRoutingModule]
})
export class FallbackModule {}
