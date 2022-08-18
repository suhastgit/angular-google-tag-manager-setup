import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataLayerService } from './services/data-layer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-google-tag-manager-setup';
  constructor(private _router:Router, private _dataLayerService: DataLayerService)
  {

    this._router.events.subscribe(event=> { // subscribe to router events
        if (event instanceof NavigationEnd) //if our event is of our interest
        {
            this._dataLayerService.logPageView(event.url) //call our dataLayer service's page view method to ping home with the url value.
        }
    });

}
}
