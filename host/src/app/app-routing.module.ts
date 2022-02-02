import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { feature1RemoteEntry } from 'src/constants';
import { Link2Component } from './link2/link2.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'feature_1'
    },
    {
        path: 'feature_1',
        loadChildren: () => {
            return loadRemoteModule({
                type: 'module',
                remoteEntry: feature1RemoteEntry,
                exposedModule: 'content'
            })
                .then((m) => {
                    return m.ContentModule;
                })
                .catch(() => {
                    return import('./fallback/fallback.module').then((m) => m.FallbackModule);
                });
        }
    },
    {
        path: 'link2',
        component: Link2Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
