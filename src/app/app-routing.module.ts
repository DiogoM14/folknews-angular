import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'news', component: NewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
