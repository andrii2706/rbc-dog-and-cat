import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal, Animals} from "../../../interfaces/Animals";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
@Input() animal: Animals
  constructor(private router: Router,
              private activatedRouter: ActivatedRoute) { }
  @Output()
  data: EventEmitter<Animal> = new EventEmitter<Animal>()
  ngOnInit(): void {
  }
  showAnimalDetails(){
    this.data.emit(this.animal)
    this.router.navigate([this.animal?.id], {relativeTo:this.activatedRouter})
  }
}
