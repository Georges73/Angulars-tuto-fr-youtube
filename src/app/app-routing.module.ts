import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';


const routes: Routes = [];
 // {path: 'cv', component: CvComponent},
 // {path: 'color', component: ColorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
