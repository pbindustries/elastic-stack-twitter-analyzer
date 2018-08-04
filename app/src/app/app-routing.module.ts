import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TweeterTopComponent} from './tweeters/tweeter-top/tweeter-top.component';
import {AppConfig} from './config/app.config';
import {Error404Component} from './core/error404/error-404.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: TweeterTopComponent},
  {path: AppConfig.routes.tweeters, loadChildren: './tweeters/tweeters.module#TweetersModule'},
  {path: AppConfig.routes.error404, component: Error404Component},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
