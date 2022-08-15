import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponentOneComponent } from './components/example-component-one/example-component-one.component';
import { ExampleComponentThreeComponent } from './components/example-component-three/example-component-three.component';
import { ExampleComponentTwoComponent } from './components/example-component-two/example-component-two.component';

const routes: Routes = [
  {
    path:'examplepath1',
    component: ExampleComponentOneComponent
  },
  {
    path:'examplepath2',
    component: ExampleComponentTwoComponent
  }
  ,
  {
    path:'examplepath3',
    component: ExampleComponentThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
