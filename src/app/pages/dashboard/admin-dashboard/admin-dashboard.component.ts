import { Component, OnInit, ViewChild } from '@angular/core';
import * as global from '../../../config/globals';
import * as moment from 'moment';
import { DaterangepickerComponent, DaterangepickerDirective } from 'ngx-daterangepicker-material';

declare let d3: any;

@Component({
  selector: 'admin-dashboard',
  templateUrl: 'admin-dashboard.component.html'
})

export class AdminDashboardComponent implements OnInit {
  stackedChartOptions;
  stackedChartData;
  lat: number = 6.4355313;
  lng: number = 3.407325;
  mapStyles = [{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#2d353c"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#d8d8d8"}]},{featureType:"administrative.neighborhood",elementType:"geometry.fill",stylers:[{color:"#ff0000"}]},{featureType:"administrative.land_parcel",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"labels.text.fill",stylers:[{color:"#00acac"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#575d63"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#348fe2"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.highway.controlled_access",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#1a1f23"}]}];

  /* Daterangepicker */
  selected: {startDate: moment.Moment, endDate: moment.Moment};
  @ViewChild(DaterangepickerDirective, {static: true}) pickerDirective: DaterangepickerDirective;
  inlineDate: any;
  inlineDateTime: any;
  picker: DaterangepickerComponent;
  alwaysShowCalendars: boolean;
  showRangeLabelOnInput: boolean;
  keepCalendarOpeningWithRange: boolean;
  prevDate: any = moment().subtract('days', 15).format('D MMMM') + ' - ' + moment().subtract('days', 8).format('D MMMM YYYY');
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment()
        .subtract(1, 'month')
        .startOf('month'),
      moment()
        .subtract(1, 'month')
        .endOf('month')
    ]
  };
  locale: any = {
    format: 'D MMMM YYYY',
    displayFormat: 'D MMMM YYYY',
    separator: ' - ',
    cancelLabel: 'Cancel',
    applyLabel: 'Apply'
  }

  constructor() {
    this.alwaysShowCalendars = true;
    this.keepCalendarOpeningWithRange = true;
    this.showRangeLabelOnInput = true;
    this.selected = {
      startDate: moment().subtract('days', 7),
      endDate: moment()
    };
  }

  ngOnInit() {
    this.picker = this.pickerDirective.picker;

    this.stackedChartOptions = {
      chart: {
        type: 'stackedAreaChart',
        height: 260,
        useInteractiveGuideline: true,
        x: function(d){return d[0];},
        y: function(d){return d[1];},
        pointSize: 0.5,
        margin : { top: 20, right: 25, bottom: 20, left: 35 },
        controlLabels: { stacked: 'Stacked' },
        showControls: false,
        duration: 300,
        xAxis: {
          tickFormat: function(d) {
            var monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            d = new Date(d);
            d = monthsName[d.getMonth()] + ' ' + d.getDate();
            return d;
          }
        }
      }
    }

    this.stackedChartData = [{
      key: "Unique Users",
      color: global.COLOR_AQUA,
      values:[
        [1511605558229,13],[1511691958229,13],[1511778358229,6],[1511951158229,6],[1512037558229,6],[1512123958229,5],[1512210358229,5],[1512296758229,5],[1512383158229,6],[1512469558229,7],[1512555958229,6],[1512642358229,9],[1512728758229,9],[1512815158229,8],[1512901558229,10],[1512987958229,10],[1513074358229,10],[1513160758229,10],[1513247158229,9],[1513333558229,9],[1513419958229,10],[1513506358229,9],[1513592758229,9],[1513679158229,8],[1513765558229,8],[1513851958229,8],[1513938358229,8],[1514024758229,8],[1514111158229,7],[1514197558229,7],[1514283958229,6],[1514370358229,6],[1514456758229,6],[1514543158229,6],[1514629558229,5],[1514715958229,5],[1514802358229,4],[1514888758229,4],[1514975158229,5],[1515061558229,5],[1515147958229,5],[1515234358229,7],[1515320758229,7],[1515407158229,7],[1515493558229,10],[1515579958229,9],[1515666358229,9],[1515752758229,10],[1515839158229,11],[1515925558229,11],
        [1516011958229,8],[1516098358229,8],[1516184758229,7],[1516271158229,8],[1516357558229,9],[1516443958229,8],[1516530358229,9],[1516616758229,10],[1516703158229,9],[1516789558229,10],[1516875958229,16],[1516962358229,17],[1517048758229,16],[1517135158229,17],[1517221558229,16],[1517307958229,15],[1517394358229,14],[1517480758229,24],[1517567158229,18],[1517653558229,15],[1517739958229,14],[1517826358229,16],[1517912758229,16],[1517999158229,17],[1518085558229,7],[1518171958229,7],[1518258358229,7]
      ]
    },{
      key: "Page Views",
      color: global.COLOR_BLUE,
      values:[
        [1511605558229,14],[1511691958229,13],[1511778358229,15],[1511951158229,14],[1512037558229,13],[1512123958229,15],[1512210358229,16],[1512296758229,16],[1512383158229,14],[1512469558229,14],[1512555958229,13],[1512642358229,12],[1512728758229,13],[1512815158229,13],[1512901558229,15],[1512987958229,16],[1513074358229,16],[1513160758229,17],[1513247158229,17],[1513333558229,18],[1513419958229,15],[1513506358229,15],[1513592758229,15],[1513679158229,19],[1513765558229,19],[1513851958229,18],[1513938358229,18],[1514024758229,17],[1514111158229,16],[1514197558229,18],[1514283958229,18],[1514370358229,18],[1514456758229,16],[1514543158229,14],[1514629558229,14],[1514715958229,13],[1514802358229,14],[1514888758229,13],[1514975158229,10],[1515061558229,9],
        [1515147958229,10],[1515234358229,11],[1515320758229,11],[1515407158229,11],[1515493558229,10],[1515579958229,9],[1515666358229,10],[1515752758229,13],[1515839158229,14],[1515925558229,14],[1516011958229,13],[1516098358229,12],[1516184758229,11],[1516271158229,13],[1516357558229,13],[1516443958229,13],[1516530358229,13],[1516616758229,14],[1516703158229,13],[1516789558229,13],[1516875958229,19],[1516962358229,21],[1517048758229,22],[1517135158229,25],[1517221558229,24],[1517307958229,24],[1517394358229,22],[1517480758229,16],[1517567158229,15],[1517653558229,12],[1517739958229,12],[1517826358229,15],[1517912758229,15],[1517999158229,15],[1518085558229,18],[1518085558229,18],[1518258358229,17]
      ]
    }];
  }

  ngModelChange(e) {
    var gap = (e.endDate).diff((e.startDate), 'days');
		this.prevDate = moment(e.startDate).subtract('days', gap).format('D MMMM') + ' - ' + moment(e.startDate).subtract('days', 1).format('D MMMM YYYY');
  }
  choosedDate(e) {
    this.inlineDate = e;
  }
  choosedDateTime(e) {
    this.inlineDateTime = e;
  }
  open(e) {
    this.pickerDirective.open(e);
  }
  clear(e) {
    this.selected = null;
  }
}
