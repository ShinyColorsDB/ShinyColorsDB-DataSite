import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';
import { CharlistComponent } from '../charlist/charlist.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NgbAccordionModule,
    CharlistComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input()
  showSideBar = false;

  @Input()
  isBigScreen = false;

  @Input()
  charaListId!: string;

  title!: string;

  constructor(private utilsService: UtilitiesService) {}

  ngOnInit(): void {
    this.utilsService.mobileTitle.subscribe((title) => {
      this.title = title;
    });
  }

  onSideBarClick() {
    this.showSideBar = !this.showSideBar;
  }

  onCharlistClick(event: boolean) {
    this.showSideBar = !event;
  }
}
