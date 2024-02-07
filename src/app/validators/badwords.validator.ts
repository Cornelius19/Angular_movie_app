import { ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";

export function badWordsValidator(keyswords : string[]) : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
        const text = control.value as string;

        for(const keysword of keyswords){
            if(text.toLowerCase().includes(keysword)){
                return {inappropriateKeyWord: true}
            }
        }
        return null;
    }

}