import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pic-carousel',
  templateUrl: './pic-carousel.component.html',
  styleUrls: ['./pic-carousel.component.css']
})
export class PicCarouselComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('picCarousel') picCarousel!: NgbCarousel;
  @ViewChild('mov1') mov1!: HTMLVideoElement;
  @ViewChild('mov2') mov2!: HTMLVideoElement;
  @ViewChild('pic1') pic1!: HTMLImageElement;
  @ViewChild('pic2') pic2!: HTMLImageElement;

  staticUrl: string;

  @Input()
  img1!: string;

  @Input()
  img2!: string;

  @Input()
  idolId!: number;

  @Input()
  displayMov1!: boolean;

  @Input()
  displayMov2!: boolean;

  constructor(
  ) {
    this.staticUrl = environment.staticUrl;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(this.mov1, this.mov2, this.pic1, this.pic2)
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

  onMovieEnded(): void {

  }
}
