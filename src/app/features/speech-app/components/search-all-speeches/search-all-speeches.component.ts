import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SpeechField } from 'src/app/shared/models/speech';

@Component({
    selector: 'app-search-all-speeches',
    templateUrl: './search-all-speeches.component.html',
    styleUrls: ['./search-all-speeches.component.scss']
})
export class SearchAllSpeechesComponent implements OnInit {

    @Input() parent: FormGroup;
    @Input() searchResult: SpeechField[];

    @Output() submitSearch: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    search() {
        this.submitSearch.emit();
    }
}
