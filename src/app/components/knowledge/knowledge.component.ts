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
  dateAdded: string;
}

const ELEMENT_DATA: Element[] = [
  {topic: "Lorem Ipsum is simply dummy text ", domain: 'IT', dateAdded: "27-May-2018"},
  {topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'Procurement', dateAdded: "01-Jun-2018"},
  {topic: "Dolor", domain: 'Corporate', dateAdded: "03-Jun-2018"},
  {topic: "Sit", domain: 'Project', dateAdded: "04-Jun-2018"},
  {topic: "Lorem Ipsum is simply dummy text ", domain: 'People', dateAdded: "06-Jun-2018"},
  {topic: "Lorem", domain: 'IT', dateAdded: "08-Jun-2018"},
  {topic: "Ipsum", domain: 'Procurement', dateAdded: "11-Jun-2018"},
  {topic: "Dolor", domain: 'Corporate', dateAdded: "11-Jun-2018"},
  {topic: "Sit", domain: 'Project', dateAdded: "08-May-2018"},
  {topic: "Lorem Ipsum is simply dummy text ", domain: 'People', dateAdded: "09-May-2018"},
  {topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'IT', dateAdded: "10-May-2018"},
  {topic: "Ipsum", domain: 'Procurement', dateAdded: "10-Jun-2018"},
  {topic: "consectetur", domain: 'Corporate', dateAdded: "10-May-2018"},
  {topic: "Sit", domain: 'Project', dateAdded: "10-May-2018"},
  {topic: "Lorem Ipsum is simply dummy text ", domain: 'People', dateAdded: "10-May-2018"},
  {topic: "Lorem", domain: 'IT', dateAdded: "10-May-2018"},
  {topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'Procurement', dateAdded: "10-May-2018"},
  {topic: "Dolor", domain: 'Corporate', dateAdded: "10-May-2018"},
  {topic: "Sed ut perspiciatis unde omnis iste natus error", domain: 'Project', dateAdded: "10-May-2018"},
  {topic: "Lorem Ipsum is simply dummy text ", domain: 'People', dateAdded: "10-May-2018"},
];
