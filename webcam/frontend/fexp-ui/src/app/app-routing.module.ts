import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { MatchComponent } from './match/match.component';


const routes: Routes = [
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path : 'match',
    component : MatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
