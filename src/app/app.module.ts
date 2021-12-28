import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Child1Component} from "./child1.component";
import { Child2ComponentComponent } from './child2-component/child2-component.component';
import { StringIntropolationComponent } from './string-intropolation/string-intropolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoDatabindingComponent } from './two-databinding/two-databinding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TdfComponentComponent } from './tdf-component/tdf-component.component';
import { MdfComponent } from './mdf/mdf.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';

@NgModule({
  declarations: [
    AppComponent,Child1Component, Child2ComponentComponent, StringIntropolationComponent, PropertyBindingComponent, EventBindingComponent, TwoDatabindingComponent, TdfComponentComponent, MdfComponent, StructureDirectiveComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
