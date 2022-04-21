import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { IplstatService } from '../iplstat/service/iplstat.service';
import { Player } from '../model/player.model';
import { TeamDetails } from '../model/team.model';
import { TeamRoleAmountCount } from '../model/teamRoleAmountCount.model';

@Component({
  selector: 'app-team-stat',
  templateUrl: './team-stat.component.html',
  styleUrls: ['./team-stat.component.css']
})
export class TeamStatComponent implements OnInit {

  constructor(private iplstatService: IplstatService) { }

  teams: TeamDetails[] = [];
  players: Player[] = [];
  roleAmountCount: TeamRoleAmountCount[] = [];
  roleAmountPieChartData: any[] = [];
  roleCountPieChartData: any[] = [];

  ngOnInit(): void {
    this.getTeamDetails();
  }

  getTeamDetails() {
    this.iplstatService.getTeamDetails().subscribe(data => {
      this.teams = data;
    })
  }

  public getPlayers(name: string) {
    if (name !== "") {
      
      this.iplstatService.getPlayerDetails(name).subscribe(data => {
        this.players = data;
      })

      this.iplstatService.getRoleAmountDetailsByLabel(name).subscribe(data => {
        this.roleAmountCount = data
        //put this inside the subscribe
        this.loadAmountPieChart(data)
        this.loadCountPieChart(data)
      })
      
    }
  }

  loadAmountPieChart(data: TeamRoleAmountCount[]) {
    if (this.roleAmountPieChartData.length > 0) {
      this.roleAmountPieChartData.splice(0, this.roleAmountPieChartData.length)
    }
    this.roleAmountPieChartData.push(["role", "amount"])
    data.forEach(ele => {
      this.roleAmountPieChartData.push([ele.role, ele.amount]);
    })
  }
  

  loadCountPieChart(data: TeamRoleAmountCount[]) {
    if (this.roleCountPieChartData.length > 0) {
      this.roleCountPieChartData.splice(0, this.roleCountPieChartData.length)
    }
    this.roleCountPieChartData.push(["role", "count"])
    data.forEach(ele => {
      this.roleCountPieChartData.push([ele.role, ele.count]);
    })
    console.log(this.roleCountPieChartData)
  }

  public pieChartAmount: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: this.roleAmountPieChartData,
    //firstRowIsData: true,
    options: {
      'title': 'Role',
      'width': 700,
      'height': 600
    },
  }
  public pieChartCount: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: this.roleCountPieChartData,
    //firstRowIsData: true,
    options: {
      'title': 'Role',
      'width': 700,
      'height': 600
    },
  }

}