import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string) {
   if(value.length === 0 || search === '') {
     return value
   }

   const animals = [];
    for (const animal of value) {
      if (animal['name'].toLowerCase().includes(search.toLowerCase()) || animal['breed'].toLowerCase().includes(search.toLowerCase())){
        animals.push(animal);
    }
  }
    return  animals;
  }
}
