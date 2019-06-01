import { NgModule, Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { UserComponent } from "./user/user.component";
import { DashboardUserComponent } from "./user/dashboard/dashboard.component";
import { MyProfileComponent } from "./user/myProfile/myProfile.component";
import { OrdersComponent } from "./user/orders/orders.component";
import { WishlistComponent } from "./user/wishlist/wishlist.component";
import { SellerComponent } from "./seller/seller.component";
import { DashboardSellerComponent } from "./seller/dashboard/dashboard.component";
import { OrderListComponent } from "./seller/orderList/orderList.component";
import { ProductInventoryComponent } from "./seller/product_Inventory/product_Inventory.component";
import { ApproveComponent, products_inventory, DashboardAdminComponent, AdminComponent } from "./admin";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AuthGuard } from "./common/auth.guard";
import { UserGuard } from "./common/user.guard";
import { AdminGuard } from "./common/admin.guard";
import { SellerGuard } from "./common/seller.guard";

import { TablecustomComponent } from './common/table-custom/table-custom.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'user/dashboard', component: DashboardUserComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'user/myProfile', component: MyProfileComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'user/orders', component: OrdersComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'user/wishlist', component: WishlistComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'seller', component: SellerComponent, canActivate: [AuthGuard, SellerGuard] },
  { path: 'seller/dashboard/', component: DashboardSellerComponent, canActivate: [AuthGuard, SellerGuard] },
  { path: 'seller/orderList', component: OrderListComponent, canActivate: [AuthGuard, SellerGuard] },
  { path: 'seller/product_Inventory', component: OrderListComponent, canActivate: [AuthGuard, SellerGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/approveSeller', component: ApproveComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/dashboard', data: { icon: 'fa fa-user' }, component: DashboardAdminComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/dashboard/:id', data: { icon: 'fa fa-user' }, component: DashboardAdminComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/products_inventory_all', component: products_inventory, canActivate: [AuthGuard, AdminGuard] },
  { path: 'login', component: LoginComponent },
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
    AdminComponent,
    ApproveComponent,
    DashboardAdminComponent,
    products_inventory,
    LoginComponent,
    SignUpComponent,
    TablecustomComponent

  ],
  imports: [RouterModule.forRoot(routes, { enableTracing: false }),
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [AuthGuard],
  exports: [RouterModule, HomeComponent]
})
export class AppRoutingModule { }
