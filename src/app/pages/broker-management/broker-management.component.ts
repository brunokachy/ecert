import { Component, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
    moduleId: module.id,
    selector: 'broker-management',
    templateUrl: 'broker-management.component.html',
})
export class BrokerManagementComponent {
    rows = [];

    temp = [];

    columns = [{ name: 'Company', prop:'company' },
     { name: 'Email', prop:'email' },
     { prop: 'rc_number', name:'RC Number' },
     { prop: 'status', name:'Status' },
     { name:'Action' }];
    @ViewChild(DatatableComponent) table: DatatableComponent;

    ColumnMode = ColumnMode;

    constructor() {
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
}
