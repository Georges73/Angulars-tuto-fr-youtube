import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCVComponent } from './cvTech/add-cv/add-cv.component';

const APP_ROUTING: Routes = [
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: 'cv', component: CvComponent},
  
  {path: 'cv', children: [
    {path: 'add', component: AddCVComponent},
    {path: ':id', component: DetailComponent},
    
   ] },

    {path: 'color', component: ColorComponent},
  
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);

