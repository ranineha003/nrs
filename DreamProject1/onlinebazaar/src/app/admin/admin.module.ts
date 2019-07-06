import { NgModule, Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ApproveComponent, products_inventory, DashboardAdminComponent, AdminComponent } from "../admin";
import { AuthGuard } from "../common/auth.guard";
import { AdminGuard } from "../common/admin.guard";
import { MaterialModule } from "../material/material.module";

const routes: Routes = [
    {
        path: '', component: AdminComponent, canActivate: [AuthGuard, AdminGuard], children: [
            { path: 'approveSeller', component: ApproveComponent, canActivate: [AuthGuard, AdminGuard] },
            { path: 'dashboard', data: { icon: 'fa fa-user' }, component: DashboardAdminComponent, canActivate: [AuthGuard, AdminGuard] },
            { path: 'dashboard/:id', data: { icon: 'fa fa-user' }, component: DashboardAdminComponent, canActivate: [AuthGuard, AdminGuard] },
            { path: 'products_inventory_all', component: products_inventory, canActivate: [AuthGuard, AdminGuard] },

        ]
    },
];

@NgModule({
    declarations: [
        AdminComponent,
        ApproveComponent,
        DashboardAdminComponent,
        products_inventory,
    ],
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        MaterialModule
    ],
    providers: [AuthGuard],
    exports: [RouterModule]
})
export class AdminModule { }
