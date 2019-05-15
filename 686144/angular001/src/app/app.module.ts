import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './Review/review/review.component';
import { TitleComponent } from './Review/title/title.component';
import { ImageComponent } from './Review/image/image.component';
import { DirectionComponent } from './Review/direction/direction.component';
import { SuperComponent } from './directive/super/super.component';
import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { TemplateformComponent } from './template/templateform/templateform.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { TaskComponent } from './todo/task/task.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { SortstringPipe } from './custompipe/sortstring.pipe';
import { SortnumPipe } from './custompipe/sortnum.pipe';
import { ConsumeserviceComponent } from './consume/consumeservice/consumeservice.component';
import { Consumeservice2Component } from './consume/consumeservice2/consumeservice2.component';
import { ConsumeremoteComponent } from './consume/consumeremote/consumeremote.component';



@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    TitleComponent,
    ImageComponent,
    DirectionComponent,
    SuperComponent,
    NotFoundComponent,
    TemplateformComponent,
    ReactiveComponent,
    TaskComponent,
    InbuiltComponent,
    SortstringPipe,
    SortnumPipe,
    ConsumeserviceComponent,
    Consumeservice2Component,
    ConsumeremoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
