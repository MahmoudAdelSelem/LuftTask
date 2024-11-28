import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerListComponent } from './components/owner-list/owner-list.component';
import { OwnerFormComponent } from './components/owner-form/owner-form.component';


const routes: Routes = [
 { path: '', component: OwnerListComponent },
  { path: 'add', component: OwnerFormComponent },
  { path: 'edit/:id', component: OwnerFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
