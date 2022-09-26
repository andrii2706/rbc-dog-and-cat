import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {timer} from "rxjs";

@Component({
  selector: 'app-avaliable-animal',
  templateUrl: './avaliable-animal.component.html',
  styleUrls: ['./avaliable-animal.component.scss']
})
export class AvaliableAnimalComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<AvaliableAnimalComponent>) { }

  ngOnInit(): void {
    this.close()
  }
  close() :void{
    timer(2000).subscribe(res=> this.dialogRef.close())
  }
}
