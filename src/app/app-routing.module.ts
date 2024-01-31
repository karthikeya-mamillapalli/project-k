import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listComponent } from './components/list';

const routes: Routes = [
  {
    path: '',
    component: listComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
