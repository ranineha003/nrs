import { NgModule, Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { UserComponent, DashboardUserComponent, MyProfileComponent, OrdersComponent, WishlistComponent} from "./user";
import { SellerComponent, DashboardSellerComponent, OrderListComponent, ProductInventoryComponent} from "./seller";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AuthGuard } from "./common/auth.guard";
import { UserGuard } from "./common/user.guard";
import { AdminGuard } from "./common/admin.guard";
import { SellerGuard } from "./common/seller.guard";
import { MaterialModule } from "./material/material.module";
import { LoginSigupService } from './common/services/login-signup';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'user/dashboard', component: DashboardUserComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'user/myProfile', component: MyProfileComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'user/orders', component: OrdersComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'user/wishlist', component: WishlistComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'admin', loadChildren:'./admin/admin.module#AdminModule', canActivate: [AuthGuard, AdminGuard] },
  { path: 'seller', component: SellerComponent, canActivate: [AuthGuard, SellerGuard] },
  { path: 'seller/dashboard/', component: DashboardSellerComponent, canActivate: [AuthGuard, SellerGuard] },
  { path: 'seller/orderList', component: OrderListComponent, canActivate: [AuthGuard, SellerGuard] },
  { path: 'seller/product_Inventory', component: OrderListComponent, canActivate: [AuthGuard, SellerGuard] },
 // { path: 'login', loadChildren:'./login/login.module#LoginModule'},
  { path: 'login', component: LoginComponent},

  { path: 'sign-up', component: SignUpComponent },

];

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    DashboardUserComponent,
    MyProfileComponent,
    OrdersComponent,
    WishlistComponent,
    SellerComponent,
    DashboardSellerComponent,
    OrderListComponent,
    ProductInventoryComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [RouterModule.forRoot(routes, { enableTracing: false }),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  providers: [AuthGuard,    LoginSigupService,
  ],
  exports: [RouterModule, HomeComponent,MaterialModule]
})
export class AppRoutingModule { }
