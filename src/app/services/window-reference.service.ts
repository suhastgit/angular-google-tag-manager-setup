import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowReferenceService {

  get nativeWindow() {
    return this.getWindow();
  }

  getWindow():any {
    return window;
  }
}
