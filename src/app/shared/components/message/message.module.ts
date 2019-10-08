import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { MessageComponent } from './message.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        MessageComponent
    ],
    declarations: [
        MessageComponent
    ]
})
export class MessageModule { }
