import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbGlobalPhysicalPosition, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbEvaIconsModule,
    NbToastrModule.forRoot({
      destroyByClick: true,
      position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    }),
    NbThemeModule.forRoot({ name: 'default' }),
    StoreModule.forRoot({}, {}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    ScreenTrackingService, UserTrackingService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
