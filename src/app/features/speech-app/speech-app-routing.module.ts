import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechAppComponent } from './container/speech-app/speech-app.component';

const routes: Routes = [{
  path: '',
  component: SpeechAppComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeechAppRoutingModule { }
