import {Component, OnInit, ViewChild} from '@angular/core';
import {Animals, Params} from "../../interfaces/Animals";
import {AnimalsService} from "../../service/animals.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animals : Animals[] = [];
  config: any;
  search: string = '';
  pageEvent!: PageEvent ;
  all: string = '';
  male:string = '' ;
  female: string = '';
  gender = new FormGroup({
    genderOfAnimal: new FormControl('')
  });
  type = new FormGroup({
    typeOfAnimal: new FormControl('')
  });
  constructor(public animalsService:AnimalsService, private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems:0
    };
    this.route.queryParams.subscribe(
      params =>{this.config.currentPage= params['page']?params['page']:1
        } );

  }
  ngOnInit(): void {
    this.getAnilmals()
  }

  pageChange(newPage: number) {
    this.router.navigate(['/animals'], { queryParams: { page: newPage } });
  }

  getAnilmals(){
    this.animalsService.getAllCats().subscribe(animals => {this.animals = animals;})

  }
  changeGender(e:any) {
   this.animals.filter(filteredValue => {
      if(e.target.value === filteredValue.gender) {
     this.animalsService.filterAnimalsByGender(filteredValue.gender).subscribe(
       filterValue => {
         this.animals = filterValue
       }
     )
      } else if (e.target.value === 'all'){
        this.getAnilmals();
      }
    })
  }

  changeType(e:any){
    this.animals.filter(filteredValue => {
      if (e.target.value === filteredValue.type){
        this.animalsService.filterAnimalsByType(filteredValue.type).subscribe(
          filteredType =>{
            this.animals = filteredType
          }
        )
      } else if (e.target.value === 'all'){
        this.getAnilmals();
      }
    })
  }

  get f(){
    return this.gender.controls;
  }

  submit(){
    console.log(this.gender.value);
  }
}
