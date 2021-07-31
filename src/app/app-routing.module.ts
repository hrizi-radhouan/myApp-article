import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { CreateOrUpdateArticleComponent } from './create-or-update-article/create-or-update-article.component';

const routes: Routes = [  
  { path: '', redirectTo: 'article-list', pathMatch: 'full'},
  { path: 'article-list', component: ArticleListComponent},
  {path: 'create-update-article' , component: CreateOrUpdateArticleComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
