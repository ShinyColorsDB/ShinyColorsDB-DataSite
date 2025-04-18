import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';
import { CharlistComponent } from '../charlist/charlist.component';
//import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterModule,
    CommonModule,
    NgbAccordionModule,
    CharlistComponent,
    //SettingsComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  showSideBar = false;

  @Input()
  isBigScreen = false;

  @Input()
  charaListId!: string;

  title!: string;

  private offcanvasService = inject(NgbOffcanvas);

  constructor(private utilsService: UtilitiesService) { }

  ngOnInit(): void {
    this.utilsService.mobileTitle.subscribe((title) => {
      this.title = title;
    });
  }

  onSideBarClick() {
    this.showSideBar = !this.showSideBar;
  }

  onCharlistClick(event: boolean) {
    this.offcanvasService.dismiss();
  }

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { panelClass: 'bg-light', position: 'end' });
  }
}
