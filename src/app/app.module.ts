import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PdpComponent } from './pages/pdp/pdp.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BuyerhomeComponent } from './pages/buyerhome/buyerhome.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DefaultDashComponent } from './pages/default-dash/default-dash.component';
import { MatChipsModule } from '@angular/material/chips';
import { FiltermenuComponent } from './components/filtermenu/filtermenu.component';
import { ProdcutListComponent } from './pages/prodcut-list/prodcut-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedDatService } from './services/sharedDataService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
    PdpComponent,
    BuyerhomeComponent,
    SidebarComponent,
    DefaultDashComponent,
    FiltermenuComponent,
    ProdcutListComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTooltipModule,
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatChipsModule
  ],
  providers: [SharedDatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
