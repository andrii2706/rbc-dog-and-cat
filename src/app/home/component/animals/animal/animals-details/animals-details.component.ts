import {Component, Input, OnInit} from '@angular/core';
import {Animal} from "../../../../interfaces/Animals";
import {ActivatedRoute} from "@angular/router";
import {AnimalsService} from "../../../../service/animals.service";

@Component({
  selector: 'app-animals-details',
  templateUrl: './animals-details.component.html',
  styleUrls: ['./animals-details.component.scss']
})
export class AnimalsDetailsComponent implements OnInit {
  @Input()
  animalDetails: Animal

  constructor(private activatedRoute: ActivatedRoute,private animalsService:AnimalsService) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.animalsService.getAnimalsById(id).subscribe(value => {
        this.animalDetails = value
        console.log(value)
      })
    })
  }

}
