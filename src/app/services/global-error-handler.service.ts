import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    console.log('Error ocured: ', error);
    //You can show the error on a screen in a module wherever you like
  }
}
