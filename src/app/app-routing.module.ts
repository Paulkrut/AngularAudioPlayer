import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import {PlayerComponent} from "./player/player.component";

const routes: Routes = <Routes>[
  {path: '', component: PlayerComponent},
  {path: 'login', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
