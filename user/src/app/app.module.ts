import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookhistoryComponent } from './user-profile/bookhistory/bookhistory.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserService } from './shared/user.service';
import { CategoryService } from './shared/category.service';
import { FoodService } from './shared/food.service';
import { OrderService } from './shared/order.service';
import { FoodComponent } from './user-profile/food/food.component';
import { BookfoodComponent } from './user-profile/bookfood/bookfood.component';
import { HomeComponent } from './user-profile/home/home.component';
import { AboutComponent } from './user-profile/about/about.component';
import { FooterComponent } from './user-profile/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    BookhistoryComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    FoodComponent,
    BookfoodComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, DatePipe, AuthGuard, UserService, CategoryService, FoodService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
