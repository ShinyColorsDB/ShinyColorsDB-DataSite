import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  EventEmitter,
  Inject,
  OnChanges,
} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { environment } from 'src/environments/environment';

import * as PIXI from 'pixi.js';
import * as Honeycomb from 'honeycomb-grid';


@Component({
  selector: 'app-panel-info',
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.css'],
})
export class PanelInfoComponent implements OnChanges {
  @Input()
  panelInfo!: any[];

  @Input()
  isSr: boolean = false;

  @Output()
  stateChanged = new EventEmitter<number>();

  app!: PIXI.Application;
  cost: number[] = [20, 30, 30, 40, 40, 40, 50, 50, 50, 50, 60, 60, 60];

  //grid properties
  hexProp = { size: 90, orientation: "flat" };
  Hex = Honeycomb.extendHex(this.hexProp);
  Grid = Honeycomb.defineGrid(this.Hex);

  srAxis: [number, number][] = [
    [5, 1.05],
    [4, 2.05],
    [4, 1.05],
    [3, 2.05],
    [3, 1.05],
    [3, 0.05],
    [2, 2.05],
    [2, 1.05],
    [2, 3.05],
    [2, 0.05],
    [1, 2.05],
    [1, 1.05],
    [1, 0.05],
  ]

  otherAxis: [number, number][] = [
    [5, 1.05],
    [4, 2.05],
    [4, 1.05],
    [3, 2.05],
    [3, 1.05],
    [3, 0.05],
    [2, 3.05],
    [2, 2.05],
    [2, 1.05],
    [2, 0.05],
    [1, 2.05],
    [1, 1.05],
    [1, 0.05],
  ]

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elRef: ElementRef
  ) {
    if (!isPlatformBrowser(this.platformId)) {
      console.log('platform is not browser');
      return;
    }
    PIXI.utils.skipHello();
    this.app = new PIXI.Application({
      width: 1136,
      height: 640,
    });
    this.app.renderer.backgroundColor = 0xd9d9d9;
    this.app.view.classList.add('img-fluid');
    this.elRef.nativeElement.appendChild(this.app.view);
  }

  ngOnChanges(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.panelInfo.forEach((e) => {
      if (!PIXI.Loader.shared.resources[`${e.panelIcon}.png`]) {
        PIXI.Loader.shared.add(
          `${e.panelIcon}.png`,
          `${environment.staticUrl}pictures/skillIcon/${e.panelIcon}.png`
        );
      }
    });

    PIXI.Loader.shared.load((loader, resources) => {

      this.Grid(
        ...this.getGrid()
      ).forEach((hex, index) => {
        const cont = new PIXI.Container();

        const graphics = new PIXI.Graphics();

        graphics.lineStyle(2, 0x000);

        const point = hex.toPoint();
        const corners = hex.corners().map((corner) => corner.add(point));
        const [firstCorner, ...otherCorners] = corners;

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

          graphics.interactive = true;
          graphics.buttonMode = true;
          graphics.on('pointerdown', () => {
            this.stateChanged.emit(index);
            const scrollMe = document.getElementById('scrollMe');
            if (scrollMe) {
              scrollMe.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          });
        } else {
          //otherwise, simply color with grey
          graphics.beginFill(0x787878, 1);
          graphics.interactive = false;
          graphics.buttonMode = false;
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
          const picX = hex.center().x + hex.toPoint().x, picY = hex.center().y + hex.toPoint().y;

          // generate trapezoid
          //const rect = this.generateRect(hex);
          const rect = new PIXI.Graphics();
          rect.beginFill(0xc7c0ad, 1);
          rect.lineStyle(0, 0xc7c0ad);
          rect.moveTo(hex.toPoint().x + hex.corners()[1].x, hex.toPoint().y + hex.corners()[1].y);
          rect.lineTo(hex.toPoint().x + hex.corners()[2].x, hex.toPoint().y + hex.corners()[2].y);
          rect.lineTo(
            hex.toPoint().x + ((hex.corners()[2].x * 5) + (hex.corners()[3].x * 3)) / 8,
            hex.toPoint().y + ((hex.corners()[2].y * 5) + (hex.corners()[3].y * 3)) / 8
          );
          rect.lineTo(
            hex.toPoint().x + ((hex.corners()[0].x * 3) + (hex.corners()[1].x * 5)) / 8,
            hex.toPoint().y + ((hex.corners()[0].y * 3) + (hex.corners()[1].y * 5)) / 8
          );
          rect.endFill();

          rect.pivot.set(0.5, 0.5);

          //generate icon
          const skillIcon = new PIXI.Sprite(
            resources[`${this.panelInfo[index].panelIcon}.png`]!.texture
          );
          skillIcon.scale.set(1.5);
          skillIcon.anchor.set(0.5);
          skillIcon.position.set(picX, picY - 10);

          // slot cost
          const slot = new PIXI.Text(String(this.cost[index]), { fontFamily: 'Meiryo' });
          slot.anchor.set(0.5, 0.5);
          slot.position.set(picX, picY + hex.width() / 2 * (5 / 8) + 5);

          cont.addChild(rect);
          cont.addChild(skillIcon);
          cont.addChild(slot);
        }

        this.app.stage.addChild(cont);
      });
    });
  }

  getGrid(): Honeycomb.Hex<{ size: number; orientation: string; }>[] {
    const gridArray: Honeycomb.Hex<{ size: number; orientation: string; }>[] = [];

    if (this.isSr) {
      this.srAxis.forEach(e => {
        gridArray.push(this.Hex(e[0], e[1]));
      });
    }
    else {
      this.otherAxis.forEach(e => {
        gridArray.push(this.Hex(e[0], e[1]));
      });
    }

    return gridArray;
  }

  generateRect(hex: Honeycomb.Hex<{ size: number; orientation: string; }>): PIXI.Graphics {
    const rect = new PIXI.Graphics();
    rect.beginFill(0xc7c0ad, 1);
    rect.lineStyle(0, 0xc7c0ad);
    rect.moveTo(hex.toPoint().x + hex.corners()[1].x, hex.toPoint().y + hex.corners()[1].y);
    rect.lineTo(hex.toPoint().x + hex.corners()[2].x, hex.toPoint().y + hex.corners()[2].y);
    rect.lineTo(
      hex.toPoint().x + ((hex.corners()[2].x * 5) + (hex.corners()[3].x * 3)) / 8,
      hex.toPoint().y + ((hex.corners()[2].y * 5) + (hex.corners()[3].y * 3)) / 8
    );
    rect.lineTo(
      hex.toPoint().x + ((hex.corners()[0].x * 3) + (hex.corners()[1].x * 5)) / 8,
      hex.toPoint().y + ((hex.corners()[0].y * 3) + (hex.corners()[1].y * 5)) / 8
    );
    rect.endFill();

    rect.pivot.set(0.5, 0.5);

    return rect;
  }
}
