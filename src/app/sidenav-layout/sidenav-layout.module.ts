import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavLayoutComponent } from './sidenav-layout/sidenav-layout.component';
import { MdSidenavModule } from '@angular/material';
import { SidenavToggleDirective } from './sidenav-toggle.directive';
import { SidenavToggleService } from './sidenav-toggle.service';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule
  ],
  declarations: [SidenavLayoutComponent, SidenavToggleDirective],
  exports: [
    SidenavLayoutComponent,
    SidenavToggleDirective
  ],
  providers: [SidenavToggleService]
})
export class SidenavLayoutModule {
}
