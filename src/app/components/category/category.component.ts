import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { LookupService } from '../../services/lookup.service';

import { LookupData, CategoryData, SubCategoryData, Data, Employees, EmployeeData} from '../../services/service-models/lookup';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  LkupData = {Categories:[]};
  EmployeeData = [] 
  leaders = []
  brokers = []
  stakeholders = []

  selectedMainCategory = {SubCategories:[]};
  selectedMainCategoryIndex = 0;

  constructor(
    public dialogRef: MatDialogRef<CategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public lkupservice : LookupService
  ) 
  { 
    this.lkupservice.getData().subscribe(lkupdata=>{
      this.LkupData = lkupdata
      this.selectedMainCategory = this.LkupData["Categories"][0];
      this.selectedMainCategoryIndex = 0;
    });

    this.lkupservice.getEmployeeData().subscribe(employees=>{
        this.EmployeeData = employees.Employees
        this.leaders = employees.Employees
        this.brokers = employees.Employees
        this.stakeholders = employees.Employees
    })

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectCategory(catindex){
    this.selectedMainCategory = {SubCategories:[]}
    this.selectedMainCategoryIndex = catindex;
    this.selectedMainCategory = this.LkupData["Categories"][this.selectedMainCategoryIndex];
  }
  
  goPrev(){
    this.selectedMainCategory = {SubCategories:[]}
    var index = this.selectedMainCategoryIndex
    this.selectedMainCategoryIndex = index - 1;
    this.selectedMainCategory = this.LkupData["Categories"][this.selectedMainCategoryIndex];
  }

  goNext(){
    this.selectedMainCategory = {SubCategories:[]}
    this.selectedMainCategoryIndex = this.selectedMainCategoryIndex + 1;
    this.selectedMainCategory = this.LkupData["Categories"][this.selectedMainCategoryIndex];
  }

  close(){
    this.dialogRef.close();
  }


  save(){

  }


  ngOnInit() {

  }


}
