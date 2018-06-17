import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatInputModule, MatProgressSpinnerModule,
  MatPaginatorModule, MatCheckboxModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MAT_DATE_LOCALE, MatDatepicker, MatNativeDateModule, MatStepperIntl } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from "./app.routing";
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavcontentComponent } from 'src/app/sidenavcontent/sidenavcontent.component';
import { HomeComponent } from './home/home.component';
import { StepperUploadComponent } from './stepper-upload/stepper-upload.component';
import { MatStepperModule } from '@angular/material';
import { FileDropModule } from 'ngx-file-drop';
import { CodeAnalysisComponent } from './code-analysis/code-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavcontentComponent,
    HomeComponent,
    StepperUploadComponent,
    CodeAnalysisComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    ReactiveFormsModule,
    FileDropModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    MatDatepicker,
    {provide: MatStepperIntl, useClass: StepperUploadComponent}
  ],
  bootstrap: [
    AppComponent, 
    StepperUploadComponent
  ],
  entryComponents: [StepperUploadComponent]
})
export class AppModule { }