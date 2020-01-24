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
  hasImgUrl = false;

  constructor(private plantService: PlantsService, private router: Router) { }

  ngOnInit() {
    this.plantForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      latinName: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imgUrl: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const {
      name,
      latinName,
      description,
      imgUrl,
      id
    } = this.plantForm.value;

    const plant = {
      name,
      latinName,
      description,
      imgUrl,
      id
    }

    this.plantService.savePlant(plant).subscribe(data => {
      this.router.navigateByUrl('/search');
    }, error => console.log(error))
  }

  onGettingImageUrl() {
    this.plantForm.value.imgUrl !== '' ? this.hasImgUrl = true : this.hasImgUrl = false;
  }
}
