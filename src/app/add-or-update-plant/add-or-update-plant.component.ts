import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { PlantsService } from '../plants.service'

@Component({
  selector: 'app-add-or-update-plant',
  templateUrl: './add-or-update-plant.component.html',
  styleUrls: ['./add-or-update-plant.component.scss']
})
export class AddOrUpdatePlantComponent implements OnInit {
  plantForm: FormGroup;
  // selectedMovieId = null;
  // editMode = false;
  // formTitle: string = "Add New Movie";

  constructor(private plantService: PlantsService) { }

  ngOnInit() {
    this.plantForm = new FormGroup({
      name: new FormControl('', Validators.required),
      latinName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const {
      name,
      latinName,
      description,
      imageUrl
    } = this.plantForm.value;

    console.log(this.plantForm.value)
  }

}
