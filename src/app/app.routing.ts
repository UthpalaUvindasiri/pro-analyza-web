import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";

const appRoutes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"home",
        component:HomeComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}