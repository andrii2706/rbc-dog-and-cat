import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from "../../../../interfaces/Animals";
import {ActivatedRoute} from "@angular/router";
import {AnimalsService} from "../../../../service/animals.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AvaliableAnimalComponent} from "../../../../../avaliable-animal/avaliable-animal.component";

@Component({
  selector: 'app-animals-details',
  templateUrl: './animals-details.component.html',
  styleUrls: ['./animals-details.component.scss']
})
export class AnimalsDetailsComponent implements OnInit {
  @Input()
  animalDetails: Animal | null

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalsService:AnimalsService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
    ) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.animalsService.getAnimalsById(id).subscribe(value => {
        this.animalDetails = value
      })
    })
  }
  ngOnInit(): void {

  }
  openNotification(){
    this.dialog.open(AvaliableAnimalComponent, {
      width: '200px'
    })
  }
    ChoseYourAnimal(){
    if(this.animalDetails!.avaliable != undefined){
      this.animalDetails!.avaliable = !this.animalDetails!.avaliable
      if(this.animalDetails!.avaliable){
        this._snackBar.open('Our manager will call you', 'Close')
      }else {
        this.openNotification();
      }
    }
    }
  buttonBack(){
    history.back();
  }

}
