import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const matModules = [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule];

@NgModule({
    declarations: [],
    imports: [matModules],
    exports: [matModules]
})
export class MaterialModule {}
