import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotLeagues = [];

  constructor(private http: HttpClient) {
    dayjs.extend(updateLocale);
    dayjs.updateLocale('en', {
      weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    });
    dayjs.updateLocale('en', {
      monthsShort: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ]
    })
  }

  ngOnInit(): void {
    this.http.get('assets/json/mock-data/api-football.json')
      .subscribe((res: { [k: string]: any }) => {
        this.hotLeagues = res['getFavLeagues'];
        console.log(this.hotLeagues);
      });
    console.log(this.getWeekDates());
  }

  getWeekDates() {
    let daysOfWeek = [...Array(7)];
    const firstWeekDay = dayjs().subtract(dayjs().day(), 'day');
    daysOfWeek = daysOfWeek.map(
      (date, i) => i === 0
        ? firstWeekDay
        : firstWeekDay.add(i, 'day')
    );
    return daysOfWeek;
  }

}
