import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  {path: '', redirectTo: "popular", pathMatch:"full", },
  {path: 'popular', component: CategoryComponent},
  {path: 'popular/:id', component: NewsPageComponent},
  {path: 'saude', component: CategoryComponent},
  {path: 'saude/:id', component: NewsPageComponent},
  {path: 'economia', component: CategoryComponent},
  {path: 'economia/:id', component: NewsPageComponent},
  {path: 'desporto', component: CategoryComponent},
  {path: 'desporto/:id', component: NewsPageComponent},
  {path: 'cultura', component: CategoryComponent},
  {path: 'cultura/:id', component: NewsPageComponent},
  {path: 'mundo', component: CategoryComponent},
  {path: 'mundo/:id', component: NewsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
