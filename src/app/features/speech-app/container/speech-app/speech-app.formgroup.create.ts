import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function getSpeechFormGroup(formBuilder: FormBuilder): FormGroup {

    return formBuilder.group({

        content: ['', Validators.required],
        author: ['', Validators.required],
        subject: ['', Validators.required],
        date: ['', Validators.required]

    });

}


export function getSpeechSearchFormGroup(formBuilder: FormBuilder): FormGroup {

    return formBuilder.group({

        search: ['']

    });


}
