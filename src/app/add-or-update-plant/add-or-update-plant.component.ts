import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { PlantsService } from '../plants.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-or-update-plant',
  templateUrl: './add-or-update-plant.component.html',
  styleUrls: ['./add-or-update-plant.component.scss']
})
export class AddOrUpdatePlantComponent implements OnInit {
  plantForm: FormGroup;

  constructor(private plantService: PlantsService, private router: Router) { }

  ngOnInit() {
    this.plantForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      latinName: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const {
      name,
      latinName,
      description,
      imageUrl,
      id
    } = this.plantForm.value;

    console.log(this.plantForm.value)

    console.log("adding plant");
    this.plantService.addPlant({ id, name, latinName, description, imageUrl }).subscribe();

    this.router.navigate(['/search'])
  }

}
