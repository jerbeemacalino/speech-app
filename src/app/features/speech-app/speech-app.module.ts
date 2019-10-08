import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewMySpeechesComponent } from './components/view-my-speeches/view-my-speeches.component';
import { SearchAllSpeechesComponent } from './components/search-all-speeches/search-all-speeches.component';

import { TabsModule } from 'ngx-bootstrap';
import { SpeechFormModule } from 'src/app/shared/components/speech-form/speech-form.module';
import { SpeechAppComponent } from './container/speech-app/speech-app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MessageModule } from 'src/app/shared/components/message/message.module';
import { SpeechAppRoutingModule } from './speech-app-routing.module';

@NgModule({
  declarations: [
    SpeechAppComponent,
    ViewMySpeechesComponent,
    SearchAllSpeechesComponent
  ],
  imports: [
    CommonModule,
    SpeechAppRoutingModule,
    TabsModule.forRoot(),
    SpeechFormModule,
    ReactiveFormsModule,
    FormsModule,
    MessageModule
  ]
})
export class SpeechAppModule { }
