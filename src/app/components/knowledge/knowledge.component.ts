import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  displayedColumns = ['topic', 'domain', 'off', 'act'];
  // @ViewChild(MatPaginator) paginator:MatPaginator;
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
  }
  dialogRef : MatDialogRef<CategoryComponent>;

  animal: string;
  name: string;
  openDialog(): void {
    this.dialogRef = this.dialog.open(CategoryComponent, {
      width: '90%',
      data: { name: this.name, animal: this.animal }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
 }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
export interface Element {
  topic: string;
  domain: string;
  office: string;
}

const ELEMENT_DATA: Element[] = [
  {topic: "Lorem Ipsum is simply dummy text ", domain: 'IT', office: "Atlanta"},
  {topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'Procurement', office: "Boston"},
  {topic: "Dolor", domain: 'Corporate', office: "Chicago"},
  {topic: "Sit", domain: 'Project', office: "Washington"},
  {topic: "Lorem Ipsum is simply dummy text ", domain: 'People', office: "Brooklyn"},
  {topic: "Lorem", domain: 'IT', office: "Atlanta"},
  {topic: "Ipsum", domain: 'Procurement', office: "Boston"},
  {topic: "Dolor", domain: 'Corporate', office: "Chicago"},
  {topic: "Sit", domain: 'Project', office: "Washington"},
  {topic: "Lorem Ipsum is simply dummy text ", domain: 'People', office: "Brooklyn"},
  {topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'IT', office: "Atlanta"},
  {topic: "Ipsum", domain: 'Procurement', office: "Boston"},
  {topic: "consectetur", domain: 'Corporate', office: "Chicago"},
  {topic: "Sit", domain: 'Project', office: "Washington"},
  {topic: "Lorem Ipsum is simply dummy text ", domain: 'People', office: "Brooklyn"},
  {topic: "Lorem", domain: 'IT', office: "Atlanta"},
  {topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'Procurement', office: "Boston"},
  {topic: "Dolor", domain: 'Corporate', office: "Chicago"},
  {topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'Project', office: "Washington"},
  {topic: "Lorem Ipsum is simply dummy text ", domain: 'People', office: "Brooklyn"},
];
