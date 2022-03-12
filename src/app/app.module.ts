import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbDialogModule, NbGlobalPhysicalPosition, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropFileUploadDirective } from './directives/drag-drop-file-upload.directive';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbEvaIconsModule,
    NbToastrModule.forRoot({
      destroyByClick: true,
      position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    }),
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    StoreModule.forRoot({}, {}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    DragDropModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [
    ScreenTrackingService, UserTrackingService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
