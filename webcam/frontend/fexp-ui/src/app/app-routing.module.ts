import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { MatchComponent } from './match/match.component';
import { SelectComponent } from './select/select.component';


const routes: Routes = [
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path : 'match',
    component : MatchComponent
  },
  {
    path: 'select',
    component: SelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
