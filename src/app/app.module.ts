import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './composants/menu/menu.component';
import { ErrorComponent } from './composants/error/error.component';
import { GetCharPipe } from './pipes/get-char.pipe';
import { ObjToArrayPipe } from './pipes/obj-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    MenuComponent,
    GetCharPipe,
    ObjToArrayPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [], // fournisseurs de services
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { console.log('app-module'); }
}
