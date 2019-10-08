import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { getSpeechFormGroup, getSpeechSearchFormGroup } from './speech-app.formgroup.create';
import { SpeechField } from 'src/app/shared/models/speech';

@Component({
    selector: 'app-speech-app',
    templateUrl: './speech-app.component.html',
    styleUrls: ['./speech-app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SpeechAppComponent implements OnInit {

    speechForm: FormGroup;
    searchForm: FormGroup;
    searchResult: SpeechField[];
    selectedSpeechData: SpeechField[];
    message: string;
    class: string;

    speechList: SpeechField[] = [
        {
            id: 1,
            content: 'Speech Content 1',
            author: 'John Doe 1',
            subject: 'Speech 1',
            date: '10/11/2019'
        },
        {
            id: 2,
            content: 'Speech Content 2',
            author: 'John Doe 2',
            subject: 'Speech 2',
            date: '10/08/2019'
        },
        {
            id: 3,
            content: 'Speech Content 3',
            author: 'John Doe 3',
            subject: 'Speech 3',
            date: '10/02/2019'
        },
        {
            id: 4,
            content: 'Speech Content 4',
            author: 'John Doe 4',
            subject: 'Speech 4',
            date: '10/01/2019'
        },
        {
            id: 5,
            content: 'Speech Content 5',
            author: 'John Doe 5',
            subject: 'Speech 5',
            date: '10/01/2019'
        }
    ];


    constructor(
        private fb: FormBuilder,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.speechForm = getSpeechFormGroup(this.fb);
        this.searchForm = getSpeechSearchFormGroup(this.fb);
    }


    selectedSpeech(id) {

        this.selectedSpeechData =  this.speechList.filter(x => x.id === id);

        this.speechForm.controls.content.setValue(this.selectedSpeechData[0].content);
        this.speechForm.controls.author.setValue(this.selectedSpeechData[0].author);
        this.speechForm.controls.subject.setValue(this.selectedSpeechData[0].subject);
        this.speechForm.controls.date.setValue(this.selectedSpeechData[0].date);

        this.message = '';

        this.cd.detectChanges();

    }

    deleteSpeech(id) {

        const deleteSpeech = this.speechList.filter(x => x.id !== this.selectedSpeechData[0].id);
        this.speechList = deleteSpeech;
        this.speechForm.reset();
        this.speechForm.updateValueAndValidity();

        this.message = 'Successfully removed speech!';

        this.cd.detectChanges();

    }

    updateSpeech() {

        const index = this.speechList.findIndex((e) => e.id === this.selectedSpeechData[0].id);

        this.speechList[index] = {
            id: this.selectedSpeechData[0].id,
            content: this.speechForm.controls.content.value,
            author: this.speechForm.controls.author.value,
            subject: this.speechForm.controls.subject.value,
            date: this.speechForm.controls.date.value,
        };

        this.message = 'Successfully updated speech!';

        this.cd.detectChanges();

    }

    submitNewSpeech() {

        this.speechForm.reset();
        this.speechForm.updateValueAndValidity();
        this.message = '';
        this.cd.detectChanges();

    }

    addSpeech() {

        const newid = this.speechList.length + 1;

        this.speechList.push({
            id: newid,
            content: this.speechForm.controls.content.value,
            author: this.speechForm.controls.author.value,
            subject: this.speechForm.controls.subject.value,
            date: this.speechForm.controls.date.value,
        });

        this.message = 'Successfully added speech!';
    }

    search() {

        // tslint:disable-next-line:max-line-length
        this.searchResult = this.speechList.filter(r => r.subject.toLowerCase().indexOf(this.searchForm.controls.search.value.toLowerCase()) > -1);
        this.cd.detectChanges();

    }
}
