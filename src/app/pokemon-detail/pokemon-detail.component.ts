import { POKEMONS } from './../models/pokemons';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemons = POKEMONS;
  pokemon;

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
  };
  public radarChartLabels: Label[] = ['体力', '攻撃力', '病御力', 'スピード'];

  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    debugger;
    this.route.paramMap.subscribe((map) => {
      const id = +map.get('id');
      this.pokemon = this.pokemons[id - 1];
      this.radarChartData.push({
        data: [
          this.pokemon.base.HP,
          this.pokemon.base.Attack,
          this.pokemon.base.Defense,
          this.pokemon.base.Speed,
        ],
      });
    });
  }
}
