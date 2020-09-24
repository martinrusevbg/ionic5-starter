import { Component, NgModule } from '@angular/core';
import { multi } from '../mock/charts';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  multi: any[];
  view: any[] = [undefined, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  legendTitle = 'Years';

  gaugeType = 'full';
  gaugeValue = 65;
  gaugeLabel = 'Speed';
  gaugeAppendText = 'km/hr';
  thick = 30;
  cap = 'round';
  size = 300;
  thresholdConfig = {
    0: {color: 'green'},
    40: {color: 'orange'},
    75.5: {color: 'red'}
  };

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    Object.assign(this, { multi });
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
