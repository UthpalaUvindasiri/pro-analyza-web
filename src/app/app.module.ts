import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeAnalysisComponent } from './code-analysis/code-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeAnalysisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
