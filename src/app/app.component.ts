import { Component } from '@angular/core';
import { LovDialog1Component } from './lov-dialog1/lov-dialog1.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoangularlovdialog';
  animal: string;
  name: string;

  selectedLOV = '';

  constructor(public dialog: MatDialog) {}

  showLOV(): void {
        let dialogRef = this.dialog.open(LovDialog1Component, {
          disableClose: true,
       // width: '250px',knxbdx
        data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed ' + JSON.stringify(result));
            // this.animal = result;
        });
    }


}
