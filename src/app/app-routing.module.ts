import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  {path: '', redirectTo: "popular", pathMatch:"full", },
  {path: 'popular', component: CategoryComponent},
  {path: 'popular/:id', component: CategoryComponent},
  {path: 'saude', component: CategoryComponent},
  {path: 'economia', component: CategoryComponent},
  {path: 'desporto', component: CategoryComponent},
  {path: 'mundo', component: NewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
