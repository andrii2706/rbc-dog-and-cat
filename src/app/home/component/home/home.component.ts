import { Component, OnInit } from '@angular/core';
import {HomeInterface} from "../../interfaces/HomeInterface";
import {HomeService} from "../../service/home.service";
import {MatDialog} from '@angular/material/dialog';
import {NotificationComponent} from "../../../notification/notification/notification.component";
import {timer} from "rxjs";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home: HomeInterface[] = [];

  constructor(private homeService: HomeService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
   this.getHomeInfo();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NotificationComponent, {
      width: '250px',
    });
    timer(1000).subscribe(res => dialogRef.close(),err=> null, () => console.warn("DialogClose"))
  }
  getHomeInfo() :void{
  this.homeService.getHomeInfo().subscribe(info =>{this.home = info}, error => this.openDialog())
  }
}
