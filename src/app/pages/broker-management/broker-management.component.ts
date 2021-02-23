import { Component, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'broker-management',
    templateUrl: 'broker-management.component.html',
})
export class BrokerManagementComponent {
    rows = [];
    closeResult: string;

    temp = [];

    columns = [{ name: 'Company', prop:'company' },
     { name: 'Email', prop:'email' },
     { prop: 'rc_number', name:'RC Number' },
     { prop: 'status', name:'Status' },
     { name:'Action' }];
    @ViewChild(DatatableComponent) table: DatatableComponent;

    ColumnMode = ColumnMode;

    constructor(private modalService: NgbModal) {
        this.fetch(data => {
            // cache our list
            this.temp = [...data];

            // push our inital complete list
            this.rows = data;
        });
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/brokers.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }

    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    blockAgents(row) {
        console.log(row);
      }

      approveAgent(value) {
        console.log(value);
      }

      open(content) {
        this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }

      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }
}
