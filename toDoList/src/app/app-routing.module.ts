import { NgModule } from "@angular/core";
import { Routes, RouterModule, ROUTES } from "@angular/router";

import { ToDoComponent } from "./to-do/to-do.component";
import { ContactDirComponent } from "./contact-dir/contact-dir.component";


const routes: Routes = [
    { path: 'todo', component: ToDoComponent },
    { path: 'home', loadChildren: './home/home.module#HomeModule'},
    { path: 'contact', component: ContactDirComponent },

]

@NgModule({
    declarations: [
        ToDoComponent,
        ContactDirComponent
    ],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
