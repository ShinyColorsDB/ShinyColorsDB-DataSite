import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  Inject,
  OnChanges,
  ViewChild,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import FontFaceObserver from 'fontfaceobserver';

import { ShinycolorsUrlService } from 'src/app/service/shinycolors-url/shinycolors-url.service';

import { PanelHex } from './panel-info-hex';

import * as PIXI from 'pixi.js';
import { defineHex, Grid, Orientation, rectangle } from 'honeycomb-grid';
//import * as Honeycomb from 'honeycomb-grid';

@Component({
  selector: 'app-panel-info',
  standalone: true,
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.css'],
})
export class PanelInfoComponent implements OnChanges, OnDestroy, AfterViewInit {
  @Input()
  panelInfo!: any[];

  @Input()
  isSr: boolean = false;

  @Output()
  stateChanged = new EventEmitter<number>();

  @ViewChild('panelCanvas')
  panelCanvas!: ElementRef<HTMLCanvasElement>;

  loadedIcon = new Map<string, boolean>();

  app!: PIXI.Application;
  cost: number[] = [20, 30, 30, 40, 40, 40, 50, 50, 50, 50, 60, 60, 60];

  //grid properties
  //hexProp = { size: 90, orientation: "flat" };
  //Hex = Honeycomb.extendHex(this.hexProp);

  grids!: Grid<PanelHex>;

  font = new FontFaceObserver('lineGothic');

  srAxis: [number, number][] = [
    [5, -0.95],
    [4, -0.95],
    [4, 0.05],
    [3, -0.95],
    [3, 0.05],
    [3, 1.05],
    [2, 0.05],
    [2, 1.05],
    [2, -0.95],
    [2, 2.05],
    [1, 0.05],
    [1, 1.05],
    [1, 2.05],
  ]

  otherAxis: [number, number][] = [
    [5, -0.95],
    [4, -0.95],
    [4, 0.05],
    [3, -0.95],
    [3, 0.05],
    [3, 1.05],
    [2, -0.95],
    [2, 0.05],
    [2, 1.05],
    [2, 2.05],
    [1, 0.05],
    [1, 1.05],
    [1, 2.05],
  ];

  testGrid: [number, number][] = [
    [1, 2]
  ]

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private scUrlService: ShinycolorsUrlService
  ) {
    if (!isPlatformBrowser(this.platformId)) {
      console.log('platform is not browser');
      return;
    }

    PIXI.Assets.setPreferences({ crossOrigin: 'anonymous', preferCreateImageBitmap: false });

    PIXI.settings.RENDER_OPTIONS!.hello = false;
    PIXI.settings.RENDER_OPTIONS!.backgroundColor = 0xd9d9d9;
  }

  ngOnChanges(): void {

    this.panelInfo.forEach((e) => {
      if (!this.loadedIcon.has(e.panelIcon)) {
        this.loadedIcon.set(e.panelIcon, true);
        PIXI.Assets.add(
          `${e.panelIcon}`,
          this.scUrlService.getSkillIcon(e.panelIcon),
        );
      }
    });

    if (this.app) {
      this.app.stage.removeChildren();

      this.font.load().then(() => {
        this.drawPanel();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.app) {
      this.app.destroy();
    }
  }

  ngAfterViewInit(): void {
    if (!this.panelCanvas) {
      return;
    }

    this.app = new PIXI.Application({
      view: this.panelCanvas.nativeElement,
      width: 1136,
      height: 640,
    });

    this.font.load().then(() => {
      this.drawPanel();
    });
  }

  drawPanel(): void {
    this.grids = new Grid(PanelHex, this.getGrid());

    this.grids.toArray().forEach(async (hex: PanelHex, index: number) => {
      const cont = new PIXI.Container();

      const graphics = new PIXI.Graphics();

      graphics.lineStyle(3, 0x000);

      //const point = hex;
      //const corners = hex.corners.map((corner) => corner.add(point));
      const [firstCorner, ...otherCorners] = hex.corners;

      if (this.panelInfo.length > index) {
        //set slot color based on number
        switch (this.panelInfo[index].panelIsGold) {
          case 0:
          case 1:
            graphics.beginFill(0xffffff, 1);
            break;
          case 2:
            graphics.beginFill(0xffd700, 1);
            break;
          case 3:
            graphics.beginFill(0xff94a2, 1);
            break;
        }

        graphics.eventMode = 'static';
        graphics.cursor = "pointer";
        graphics.on('pointerdown', () => {
          this.stateChanged.emit(index);
          setTimeout(() => {
            const scrollMe = document.getElementById('scrollMe');
            if (scrollMe) {
              scrollMe.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          }, 200);
        });
      } else {
        //otherwise, simply color with grey
        graphics.beginFill(0x787878, 1);
        graphics.eventMode = "none";
        graphics.cursor = "default";
      }

      // move the "pencil" to the first corner
      graphics.moveTo(firstCorner.x, firstCorner.y);
      // draw lines to the other corners
      otherCorners.forEach(({ x, y }) => graphics.lineTo(x, y));
      // finish at the first corner
      graphics.lineTo(firstCorner.x, firstCorner.y);
      graphics.endFill();

      cont.addChild(graphics);

      if (this.panelInfo.length > index) {
        const picX = hex.x, picY = hex.y;

        // generate trapezoid
        const rect = new PIXI.Graphics();
        rect.beginFill(0xc7c0ad, 1);
        rect.lineStyle(0, 0xc7c0ad);
        rect.moveTo(hex.corners[2].x - 1, hex.corners[2].y);
        rect.lineTo(hex.corners[3].x + 2, hex.corners[3].y);
        rect.lineTo(
          ((hex.corners[3].x * 5) + (hex.corners[4].x * 3)) / 8 + 2,
          ((hex.corners[3].y * 5) + (hex.corners[4].y * 3)) / 8
        );
        rect.lineTo(
          ((hex.corners[1].x * 3) + (hex.corners[2].x * 5)) / 8 - 1,
          ((hex.corners[1].y * 3) + (hex.corners[2].y * 5)) / 8
        );
        rect.endFill();

        rect.pivot.set(0.5, 0.5);

        //generate icon
        const skillIcon = new PIXI.Sprite(
          await PIXI.Assets.load(`${this.panelInfo[index].panelIcon}`)
        );
        skillIcon.scale.set(1.5);
        skillIcon.anchor.set(0.5);
        skillIcon.position.set(picX, picY - 10);

        // slot cost
        const thisCost = new PIXI.Text(String(this.cost[index]), { fontFamily: 'lineGothic', fontWeight: "bold" });
        thisCost.anchor.set(0.5, 0.5);
        thisCost.position.set(picX, picY + hex.width / 2 * (5 / 8) + 7);

        cont.addChild(rect);
        cont.addChild(skillIcon);
        cont.addChild(thisCost);
      }

      this.app.stage.addChild(cont);

      //graphics.drawShape(new PIXI.Polygon(hex.corners));
      //cont.addChild(graphics);
//
      //this.app.stage.addChild(cont);
    });
  }

  getGrid(): PanelHex[] {
    const gridArray: PanelHex[] = [];

    if (this.isSr) {
      this.srAxis.forEach(e => {
        gridArray.push(new PanelHex([e[0], e[1]]));
      });
    }
    else {
      this.otherAxis.forEach(e => {
        gridArray.push(new PanelHex([e[0], e[1]]));
      });
    }

    return gridArray;
  }

  //   ____
  //  /    \
  //  \    /
  //   ‾‾‾‾
  generateRect(hex: PanelHex): PIXI.Graphics {
    const rect = new PIXI.Graphics();
    rect.beginFill(0xc7c0ad, 1);
    rect.lineStyle(0, 0xc7c0ad);
    rect.moveTo(hex.x + hex.corners[1].x, hex.y + hex.corners[1].y);
    rect.lineTo(hex.x + hex.corners[2].x, hex.y + hex.corners[2].y);
    rect.lineTo(
      hex.x + ((hex.corners[2].x * 5) + (hex.corners[3].x * 3)) / 8,
      hex.y + ((hex.corners[2].y * 5) + (hex.corners[3].y * 3)) / 8
    );
    rect.lineTo(
      hex.x + ((hex.corners[0].x * 3) + (hex.corners[1].x * 5)) / 8,
      hex.y + ((hex.corners[0].y * 3) + (hex.corners[1].y * 5)) / 8
    );
    rect.endFill();

    rect.pivot.set(0.5, 0.5);

    return rect;
  }
}
