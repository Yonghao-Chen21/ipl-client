import { Component, OnInit } from '@angular/core';
import { ChartSelectEvent, GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { IplstatService } from '../iplstat/service/iplstat.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor(private iplstatService: IplstatService) { }
  teamAmountChartData: any[] = []
  roleAmountPieChartData: any[] = []
  players: any[] = []
  Label: any[] = []
  ngOnInit(): void {
    this.loadBarChart()
  }

  public select(event: ChartSelectEvent) {
    this.Label = event.selectedRowValues
    this.roleAmountPieChartData.splice(0, this.roleAmountPieChartData.length)
    this.loadPieChart()
    this.players.splice(0, this.players.length)
    this.loadPlayers()
  }

  loadPlayers() {
    this.iplstatService.getPlayers(this.Label[0]).subscribe(data => {
        this.players = data
    })
  }

  loadBarChart() {
    this.iplstatService.getTeamAmountDetails().subscribe(data => {
      this.teamAmountChartData.push(["label", "amount"])
      data.forEach(ele => {
        this.teamAmountChartData.push([ele['label'], ele['amount']])
      })
    })
  }

  loadPieChart() {
    this.iplstatService.getRoleAmountDetailsByLabel(this.Label[0]).subscribe(data => {
      this.roleAmountPieChartData.push(["role", "amount"])
      data.forEach(ele => {
        this.roleAmountPieChartData.push([ele['role'], ele['amount']])
      })
    })
  }

  public columnChart: GoogleChartInterface = {  // use :any or :GoogleChartInterface
    chartType: 'ColumnChart',
    dataTable: this.teamAmountChartData,
    options: {
      title: 'Label',
      'width': 800,
      'height': 500
    }
  };

  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: this.roleAmountPieChartData,
    options: {
      'title': 'Role',
      'width': 700,
      'height': 600
    },
  }

}
