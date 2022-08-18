import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/services/data-layer.service';

@Component({
  selector: 'app-example-button',
  templateUrl: './example-button.component.html',
  styleUrls: ['./example-button.component.scss']
})
export class ExampleButtonComponent implements OnInit {
  status:boolean=false;

  constructor(private _dataLayerService: DataLayerService) { }

  ngOnInit(): void {
  }

  buttonClicked()
  {
    //call the service's logEvent method
   this._dataLayerService.logEvent("'ButtonClicked'","'Buttons'","'Clicked'","'InterestingButton'");

   // continue with other stuff
   this.status=!this.status;
  }
}
