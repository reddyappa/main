import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './posts/post-create.component';
import { PostListComponent } from './posts/post-list.component';


const routes: Routes = [
  {path:'create', component:PostCreateComponent},
  {path:'create/:id', component:PostCreateComponent},
  {path:'list', component:PostListComponent},
  {path:'', redirectTo:'list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
