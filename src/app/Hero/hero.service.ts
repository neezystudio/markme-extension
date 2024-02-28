import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Icons } from './Icons';
import { IconsES } from './mock.Iconses';



@Injectable({
  providedIn: 'root',
})
export class IconsService {

  constructor(private messageService: MessageService) { }

  getIconses(): Observable<Icons[]> {
    // TODO: send the message _after_ fetching the Iconses
    this.messageService.add('IconsService: fetched Iconses');
    return of(IconsES);
  }

  getIcons(id: number | string) {
    return this.getIconses().pipe(
      // (+) before `id` turns the string into a number
      map((Iconses: Icons[]) => Iconses.find(Icons => Icons.id === +id)!)
    );
  }
}




// This code defines an Angular service called IconsService which is responsible for managing the data related to Iconses. Let's break down what each part of the code does:

// Imports: The code imports necessary modules and classes from Angular core, RxJS, and some custom files (Icons, mock-Iconses, and message.service).

// @Injectable Decorator: This decorator marks the IconsService class as one that can be injected as a dependency.

// Constructor: The constructor injects an instance of MessageService, allowing the IconsService to log messages.

// getIconses() Method: This method returns an observable of an array of Icons objects. It simulates fetching Iconses asynchronously. It also logs a message using the MessageService to indicate that Iconses have been fetched.

// getIcons(id: number | string) Method: This method retrieves a Icons by its id. It internally calls getIconses() to get the list of Iconses as an observable, then uses the pipe operator from RxJS to manipulate the stream of Iconses. It converts the id to a number if it's a string, then uses Array.find() to find the Icons with the corresponding id. Finally, it returns an observable that emits the found Icons.

// Comments: There's a commented out TODO suggesting that the message should be sent after fetching the Iconses. This indicates a potential improvement in the code that can be made in the future.

