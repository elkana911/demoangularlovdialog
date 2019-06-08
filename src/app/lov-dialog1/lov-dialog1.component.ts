import { Component, OnInit, Inject } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-lov-dialog1',
  templateUrl: './lov-dialog1.component.html',
  styleUrls: ['./lov-dialog1.component.css']
})

export class LovDialog1Component implements OnInit {

  rowData = [];
  // heroes: Hero[] = [ 
  //   { id: 11, name: 'Dr Nice' , address: 'Beryl TImur'}, 
  //   { id: 12, name: 'Narco', address: 'Kenanga no 12' }
  //   ]
  // inputSearch;

  gridApi;
  gridOptions: GridOptions;

  constructor(public dialogRef: MatDialogRef<LovDialog1Component>, @Inject(MAT_DIALOG_DATA) data: any) { }

  ngOnInit() {
    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    this.gridOptions = {
      // enable sorting on all columns by default
      defaultColDef: {
        sortable: true,
        filter: true,        
      },
      columnDefs: [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' }
      ],
      pagination: true,
      domLayout: "print",
      rowSelection: 'single',
      onGridReady: this.onGridReady,
      onRowSelected: this.onRowSelected,
      // onRowDoubleClicked: this.onDoubleClicked
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;
  }

  onDoubleClicked(row){
    console.log('double click ' + JSON.stringify(row.data));

    this.dialogRef.close(row.data);
  }
  onRowSelected(event) {
    if (event.node.selected) {
      console.log('You picked ' + JSON.stringify(event.node.data));
      //  this.selectedNodes.push(event.node);
    }

  }

  onSearch(value){ 
    console.log("You want to search " + value);
    this.gridOptions.api.setQuickFilter(value);
  }
  onKey(value: string){
    this.onSearch(value);
  }
}
