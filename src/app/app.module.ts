import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieLawModule } from 'angular2-cookie-law';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';

import { AppRoutingModule } from './app-routing.module';

import { GoogleAnalyticsEventsService } from './services/google-analytics-events.service';
import { AuthGuard } from './services/auth.guard.service';
import { LookupService} from './services/lookup.service';
import { HttpClientService } from './services/http-client.service';

import { SortHelper } from './helpers/sort.helper';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/_global/nav-bar/nav-bar.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { OAuthModule } from 'angular-oauth2-oidc';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';
import 'hammerjs';

import {
  OverlayPanelModule,
  MultiSelectModule,
  DataTableModule,
  SharedModule,
  ListboxModule,
  EditorModule
} from 'primeng/primeng';
// PrimeNG forgot to add shortcode for SidebarModule, add it in separately for now
import { SidebarModule } from 'primeng/components/sidebar/sidebar';

import { HomeComponent } from './components/home/home.component';
import { SnackBarComponent } from './components/_global/snack-bar/snack-bar.component';
import { FooterComponent } from './components/_global/footer/footer.component';


import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PrivacyPolicyComponent,
    HomeComponent,
    SnackBarComponent,
    FooterComponent,
    KnowledgeComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    CookieLawModule,
    HttpModule,
    HttpClientModule,
    OverlayPanelModule,
    MultiSelectModule,
    DataTableModule,
    SharedModule,
    ListboxModule,
    EditorModule,
    SidebarModule,
    OAuthModule.forRoot()
  ],
  providers: [HttpClientService, GoogleAnalyticsEventsService, AuthGuard, LookupService, SortHelper,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarComponent,CategoryComponent],
})
export class AppModule { }
