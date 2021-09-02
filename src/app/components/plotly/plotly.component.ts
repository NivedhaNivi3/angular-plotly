import {
  Component, OnInit, Input,ViewChild, ElementRef,AfterViewInit, OnDestroy,OnChanges,SimpleChanges
} from '@angular/core';
// import { layout } from '@rfid-mocks/inp-timeline-plot';
// import { ThemeService } from '@app-global/services/theme/theme.service';
import { Subscription } from 'rxjs';

declare const Plotly: any;

@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})
export class PlotlyComponent implements OnInit {
  public data: any;
  public layout: any;

  /* The plot target container. */
  @ViewChild('pvc') plotContainer: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initPlot();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.data && changes.data.previousValue) {
      this.initPlot();
    }

    if (changes && changes.layout && changes.layout.previousValue) {
      this.initPlot();
    }
  }

  ngOnDestroy() {
    // if (this._theme$) { this._theme$.unsubscribe(); }
  }

  private initPlot() { 
    // this.getTheme();

    // the layout.
    this.layout = {
      title: { text: 'Hii plotly ' },
    
    };

    // the data.
    // this.data = [
    //   {
    //     x: [1, 2, 3,4,5],
    //     y: [6, 3, 6,3,6],
    //     type: 'scatter',
    //     mode: 'marker',
    //     marker: { color: 'green' }
    //   },
    //   { x: [1, 2, 3], y: [2, 5, 3], type: 'scatter', marker: { color: 'red' } },
    //   this.layout1={
    //     title:{text:"pie plot"},
    //   }];
     this.data=[
      {values:[70,90],
      labels:['aka','pap'],
    type:'pie'}
    ];
    console.log(this.data[0].values)
if(this.data[0].values[0]>this.data[0].values[1])
{
this.data[0].labels[0] =  'aka is greaterthan';
}
else{
 this.data[0].labels[1]='pap is greaterthan';
}
    if (this.data !== undefined && this.layout) {
      Plotly.newPlot(this.plotContainer.nativeElement, this.data, this.layout, {
        staticPlot: false
      });
    } else {
      console.warn('The data or the layout are not defined');
    }
  }

  /** On resize this method triggers & resize the plot. */
  public onResize() {
    Plotly.Plots.resize(this.plotContainer.nativeElement);
  }
}
