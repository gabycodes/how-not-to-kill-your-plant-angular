import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../models/plant.model'

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  @Input() plants: Plant[]

  constructor() { }

  ngOnInit() { }

}
