import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';




import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { RegistrationService } from './shared/registration.service';
import { EmpregComponent } from './empreg/empreg.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    HomeComponent,
    GalaryComponent,
    EmpregComponent
  ],
  imports: [
    FormsModule,MatRadioModule,MatSelectModule,MatFormFieldModule,ReactiveFormsModule,
    BrowserModule,AppRoutingModule,BrowserAnimationsModule,MatButtonModule,
    MatInputModule,LayoutModule,MatToolbarModule,MatSidenavModule,MatIconModule,
    MatListModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,
    MatGridListModule,MatTableModule,MatDialogModule,HttpClientModule,AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [RegistrationService,DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[EmpregComponent]
})
export class AppModule { }
