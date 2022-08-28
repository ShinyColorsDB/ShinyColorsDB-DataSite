import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import * as PIXI from 'pixi.js';
import * as Honeycomb from 'honeycomb-grid';

@Component({
  selector: 'app-panel-info',
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.css'],
})
export class PanelInfoComponent implements OnInit {
  @Input()
  panelInfo!: any[];

  @Output()
  stateChanged = new EventEmitter<number>();

  app: PIXI.Application;

  constructor(private elRef: ElementRef) {
    this.app = new PIXI.Application({
      width: 1136,
      height: 640,
    });
    this.app.renderer.backgroundColor = 0xd9d9d9;
    this.app.view.classList.add('img-fluid');
    this.elRef.nativeElement.appendChild(this.app.view);
  }

  ngOnInit(): void {
    this.panelInfo.forEach((e) => {
      if (!PIXI.Loader.shared.resources[`${e.panelIcon}.png`]) {
        PIXI.Loader.shared.add(
          `${e.panelIcon}.png`,
          `${environment.staticUrl}pictures/skillIcon/${e.panelIcon}.png`
        );
      }
    });

    PIXI.Loader.shared.load((loader, resources) => {
      const Hex = Honeycomb.extendHex({ size: 90, orientation: 'flat' });
      const Grid = Honeycomb.defineGrid(Hex);

      Grid(
        Hex(5, 1.05),
        Hex(4, 1.05),
        Hex(4, 2.05),
        Hex(3, 0.05),
        Hex(3, 1.05),
        Hex(3, 2.05),
        Hex(2, 0.05),
        Hex(2, 1.05),
        Hex(2, 2.05),
        Hex(2, 3.05),
        Hex(1, 0.05),
        Hex(1, 1.05),
        Hex(1, 2.05)
      ).forEach((hex, index) => {
        const graphics = new PIXI.Graphics();

        graphics.lineStyle(2, 0x000);

        const point = hex.toPoint();
        const corners = hex.corners().map((corner) => corner.add(point));
        const [firstCorner, ...otherCorners] = corners;

        const cont = new PIXI.Container();
        if (this.panelInfo.length > index) {
          //set slot color based on number
          switch (this.panelInfo[index].panelIsGold) {
            case 0:
              graphics.beginFill(0xffffff, 1);
              break;
            case 1:
              graphics.beginFill(0xffd700, 1);
              break;
            case 2:
              graphics.beginFill(0xff94a2, 1);
              break;
          }

          // if slot used, change to interactive
          graphics.interactive = true;
          graphics.buttonMode = true;
          graphics.on('pointerdown', () => {
            this.stateChanged.emit(index);
            document.getElementById('scrollMe')?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          });
        } else {
          //otherwise, simply color with grey
          graphics.beginFill(0x787878, 1);
        }

        graphics.on('mouseover', () => {
          graphics.alpha = 1;
        });
        graphics.on('mouseout', () => {
          graphics.alpha = 1;
        });

        // move the "pencil" to the first corner
        graphics.moveTo(firstCorner.x, firstCorner.y);
        // draw lines to the other corners
        otherCorners.forEach(({ x, y }) => graphics.lineTo(x, y));
        // finish at the first corner
        graphics.lineTo(firstCorner.x, firstCorner.y);

        graphics.endFill();

        cont.addChild(graphics);

        if (this.panelInfo.length > index) {
          const skillIcon = new PIXI.Sprite(
            resources[`${this.panelInfo[index].panelIcon}.png`]!.texture
          );
          skillIcon.scale.set(1.5);
          skillIcon.anchor.set(0.5);
          skillIcon.position.set(
            hex.center().x + hex.toPoint().x,
            hex.center().y + hex.toPoint().y + 2
          );
          cont.addChild(skillIcon);
        }

        /**
        const slot = new PIXI.Text(String(index), { fontFamily: 'Meiryo' });
        slot.position.set(hex.toPoint().x, hex.toPoint().y);
        cont.addChild(slot);
        */
        this.app.stage.addChild(cont);
      });
    });
  }
}
