import {Component, OnInit} from '@angular/core';
import {Animals } from "../../interfaces/Animals";
import {AnimalsService} from "../../service/animals.service";
import { PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animals : Animals[] = [];
  search: string = ''
  config :Object
  pageEvent!: PageEvent ;
  all: string = '';
  gender = new FormGroup({
    genderOfAnimal: new FormControl('all')
  });
  type = new FormGroup({
    typeOfAnimal: new FormControl('all')
  });
  constructor(public animalsService:AnimalsService, private route: ActivatedRoute, private router: Router) {
    const config = {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems:0
    };
    this.config = config;
    this.route.queryParams.subscribe(
      params =>{config.currentPage= params['page']?params['page']:1
        } );

  }
  ngOnInit(): void {
    this.getAnilmals()
  }

  pageChange(newPage: number)  : void {
    this.router.navigate(['/animals'], { queryParams: { page: newPage } });
  }

  getAnilmals(){
    this.animalsService.getAllCats().subscribe(animals => {this.animals = animals;})
  }
  changeGender(e: Event): void {
     this.animals.forEach(filteredValue => {
      if((e.target as HTMLInputElement).value === filteredValue.gender) {
     this.animalsService.filterAnimalsByGender(filteredValue.gender).subscribe(
       filterValue => {
         this.animals = filterValue
       }
     )
      } else if ((e.target as HTMLInputElement).value === 'all'){
        this.getAnilmals();
      }
    })
  }

  changeType(e:Event) : void{
    this.animals.forEach(filteredValue => {
      if ((e.target as HTMLInputElement).value === filteredValue.type){
        this.animalsService.filterAnimalsByType(filteredValue.type).subscribe(
          filteredType =>{
            this.animals = filteredType
          }
        )
      } else if ((e.target as HTMLInputElement).value === 'all'){
        this.getAnilmals();
      }
    })
  }

  get f() {
    return this.gender.controls;
  }

  submit(){
    return this.gender.value
  }
}
