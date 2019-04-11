import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification: any = [];
  customerValue: String = 'notification';
  newColumns: any[] = [
    {
      'name': 'Notification',
      'value': 'notification '
    },
    {
      'name': 'Time',
      'value': 'time'
    },
    {
      'name': 'Date',
      'value': 'date'
    },
    {
      'name': 'Status',
      'value': 'status'
    }
  ];
  constructor(private gs: GeneralService, private ss: SharedService) { }

  ngOnInit() {
    this.getNotification();
  }
  getNotification() {
    this.notification = {
      'data': [
        {
          'notification': 'Onboard of Kimball Cho as User ',
          'time': '02:13 AM',
          'date': '9-june-2018',
          'status': true
        },
        {
          'notification': 'Onboard of Kimball Cho as client',
          'time': '02:13 AM',
          'date': '11-june-2018',
          'status': false
        },
        {
          'notification': 'Onboard of john Cho as client',
          'time': '02:13 AM',
          'date': '13-june-2018',
          'status': false
        }
      ]
    };
      this.ss.TableData(this.notification['data']);
      this.ss.DisplayedColumn(this.newColumns);
      sessionStorage.setItem('displaycolumns' , JSON.stringify(this.newColumns));
      sessionStorage.setItem('tableData' , JSON.stringify(this.notification['data']));
  }
}
