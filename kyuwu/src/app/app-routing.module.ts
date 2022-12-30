import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SkinsComponent } from './skins/skins.component';

const routes: Routes = [{
  path: '',
  redirectTo: '',
  pathMatch: 'full',
},
{
  path: '',
  component: HomeComponent,
},
{
  path: 'about',
  component: AboutComponent,
},
{
  path: 'skins',
  component: SkinsComponent,
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
