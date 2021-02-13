import { Component, Input, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.scss']
})

export class SummaryCardsComponent implements OnInit {

  @Input() summary;
  constructor() { }

  ngOnInit(): void {
  }

}
