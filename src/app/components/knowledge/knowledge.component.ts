import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  dialogRef : MatDialogRef<CategoryComponent>;

  animal: string;
  name: string;
  openDialog(): void {
    this.dialogRef = this.dialog.open(CategoryComponent, {
      width: '800px',
      data: { name: this.name, animal: this.animal }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
 }

}
