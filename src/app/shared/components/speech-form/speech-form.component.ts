import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SpeechField } from '../../models/speech';

@Component({
    selector: 'app-speech-form',
    templateUrl: './speech-form.component.html',
    styleUrls: ['./speech-form.component.scss']
})
export class SpeechFormComponent implements OnInit {

    @Input() parent: FormGroup;
    @Input() hideDelete: boolean;
    @Input() selectedSpeech: SpeechField;

    @Output() deleteSpeech: EventEmitter<number> = new EventEmitter<number>();
    @Output() updateSpeech: EventEmitter<number> = new EventEmitter<number>();
    @Output() addSpeech: EventEmitter<SpeechField> = new EventEmitter<SpeechField>();

    constructor() { }

    ngOnInit() {}

    delete() {  this.deleteSpeech.emit(); }

    update() { this.updateSpeech.emit(); }

    save() { this.addSpeech.emit(); }
}
