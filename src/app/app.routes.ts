import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "", loadChildren: () => import("./front/front.module").then((module) => module.FrontModule)
    },
    {
        path: "user", loadChildren: () => import("./user/user.module").then((module) => module.UserModule)
    },
    {
        path: "admin", loadChildren: () => import("./admin/admin.module").then((module) => module.AdminModule)
    }
];
