/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { HomeModule } from './home.module';

/* Containers */
import * as homeContainers from './containers';

/* Guards */
import * as homeGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Old Mutual - Home',
            breadcrumbs: [
                {
                    text: 'Home',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: homeContainers.HomeComponent,
    },
    {
        path: 'home',
        canActivate: [],
        component: homeContainers.HomeComponent,
        data: {
            title: 'Old Mutual - Home',
        } as SBRouteData,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home',
    },
];

@NgModule({
    imports: [HomeModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
