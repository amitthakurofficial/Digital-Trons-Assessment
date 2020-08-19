import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { OnlyNumberDirective } from './only-number.directive';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserDetailsComponent,
    OnlyNumberDirective,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
