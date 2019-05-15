import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewComponent } from './Review/review/review.component';
import { SuperComponent } from './directive/super/super.component';
import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { TemplateformComponent } from './template/templateform/templateform.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { TaskComponent } from './todo/task/task.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { ConsumeserviceComponent } from './consume/consumeservice/consumeservice.component';
import { Consumeservice2Component } from './consume/consumeservice2/consumeservice2.component';
import { ConsumeremoteComponent } from './consume/consumeremote/consumeremote.component';
const routes: Routes = [
  {
    path:'',
  redirectTo:'directive',
   pathMatch:"full"
},
{
path:'review',
component:ReviewComponent
},
{
  path:'directive',
  component:SuperComponent
},
{
  path:'template',
  component:TemplateformComponent
},
{
  path:'reactive',
  component:ReactiveComponent
},
{
  path:"task",
  component:TaskComponent
},
{
  path:"pipe",
  component:InbuiltComponent
},
{
path:"consume1",
component:ConsumeserviceComponent
},
{
  path:"consume2",
  component:Consumeservice2Component
},
{
  path:"remote",
  component:ConsumeremoteComponent
},
{
  path:'**',
  component:NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
