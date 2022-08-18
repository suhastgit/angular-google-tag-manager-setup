import { Injectable } from '@angular/core';
import { DataLayer } from '../interfaces/data-layer';
import { WindowReferenceService } from './window-reference.service';

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {
  private window; 

  constructor (private _windowRef: WindowReferenceService)
  {
      this.window = _windowRef.nativeWindow; // intialise the window to what we get from our window service

  }

   private pingHome(obj:DataLayer)
   {
       if(obj)  this.window.dataLayer.push(obj);
   }
  
  
  //list of all our dataLayer methods

  logPageView(url:string)
  {
      const hit = {
          event: 'content-view',
          pageName: url
      };
      this.pingHome(hit);
  }

  logEvent(event:string,category:string,action:string,label:string)
  {
      const hit = {
          event:event,
          category:category,
          action:action,
          label: label
      }
       this.pingHome(hit);
  }

  logCustomDimensionTest(value:any)
  {
      const hit = {
          event:'custom-dimension',
          value:value
      }
      this.pingHome(hit);
  }

  // .. add more custom methods as needed by your app.
}
