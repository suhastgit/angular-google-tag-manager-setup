import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponentOneComponent } from './components/example-component-one/example-component-one.component';
import { ExampleComponentTwoComponent } from './components/example-component-two/example-component-two.component';
import { ExampleComponentThreeComponent } from './components/example-component-three/example-component-three.component';
import { ExampleButtonComponent } from './components/example-button/example-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentOneComponent,
    ExampleComponentTwoComponent,
    ExampleComponentThreeComponent,
    ExampleButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
