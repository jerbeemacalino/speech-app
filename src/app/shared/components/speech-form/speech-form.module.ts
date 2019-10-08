import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechFormComponent } from './speech-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
    ],
    exports: [
        SpeechFormComponent
    ],
    declarations: [
        SpeechFormComponent
    ]
})
export class SpeechFormModule { }
