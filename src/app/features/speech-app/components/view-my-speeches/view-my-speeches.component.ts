import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SpeechField } from 'src/app/shared/models/speech';

@Component({
    selector: 'app-view-my-speeches',
    templateUrl: './view-my-speeches.component.html',
    styleUrls: ['./view-my-speeches.component.scss']
})
export class ViewMySpeechesComponent implements OnInit {

    @Input() speechList: SpeechField[];
    @Output() selectSpeech: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    selectSpeechID(id) {
        this.selectSpeech.emit(id);
    }

}
