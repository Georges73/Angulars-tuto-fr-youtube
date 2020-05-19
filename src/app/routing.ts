import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCVComponent } from './cvTech/add-cv/add-cv.component';
import { ErrorComponent } from './cvTech/error/error.component';
import { HomeComponent } from './cvTech/home/home.component';

const APP_ROUTING: Routes = [
  {path: 'home', component: HomeComponent},
 {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'cv', component: CvComponent},
  {path: 'color', component: ColorComponent},



  {path: 'cv', children: [
    {path: 'add', component: AddCVComponent},
    {path: ':id', component: DetailComponent},

   ] },

   {path: '**', component: ErrorComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);

