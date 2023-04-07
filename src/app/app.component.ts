import { Component } from '@angular/core';
import {View,EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template:'<ejs-schedule height="800px" width="90%" [eventSettings]="eventObject" [selectedDate]="setDate" [(currentView)]="setView"></ejs-schedule>',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calender';
  public setView:View='WorkWeek';
  public setDate:Date=new Date(2023,3,7);
  public eventObject:EventSettingsModel={

    dataSource:[{
      Subject:'Daily Sales Meeting',
      StartTime:new Date(2023,3,7,15,0),
      EndTime:new Date(2023,3,7,16,0),
      //making an appointment for a whole day
      //IsAllDay:true

      //disabling edit and delete options
      //IsReadOnly:true
    }],
  }

  // public eventData:DataManager=new DataManager({
  //   url:'https://js.synsfusion.com/demos/ejservices/api/Schedule/localdata',
  //   adaptor:new WebApiAdaptor,
  //   crossDomain:true

  // });
  // public eventObject:EventSettingsModel={
  //   dataSource:this.eventData}

}
