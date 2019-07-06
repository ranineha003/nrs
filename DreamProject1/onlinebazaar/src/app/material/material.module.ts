import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule } from "@angular/material";

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
