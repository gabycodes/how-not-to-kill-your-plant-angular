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

  Repdata = {}
  errorMessage = ''
  buttonValue = 'Save'
  updatePlantValues = {}

  ngOnInit() {
    this.plantForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      latinName: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
    });

    this.plantService.getPlant().subscribe(data => console.log(data))

  }

  onSubmit() {
    const {
      name,
      latinName,
      description,
      imageUrl,
      id
    } = this.plantForm.value;

    const plant = {
      name,
      latinName,
      description,
      imageUrl,
      id
    }
    console.log(this.plantForm.value)

    console.log("adding plant");
    // this.plantService.addPlant({ id, name, latinName, description, imageUrl }).subscribe();

    this.plantService.savePlant(plant).subscribe(data => {
      alert(data)
      this.ngOnInit()
    }, error => this.errorMessage = error)
    // this.router.navigate(['/search'])
  }

  updatePlant(values) {
    this.updatePlantValues = { ...values }
    this.buttonValue = 'Update'
  }

  // deletePlant(id) {
  //   this.plantService.
  // }
}
