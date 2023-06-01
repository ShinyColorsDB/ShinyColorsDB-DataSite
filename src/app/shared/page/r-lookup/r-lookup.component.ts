import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';

@Component({
  selector: 'app-r-lookup',
  templateUrl: './r-lookup.component.html',
  styleUrls: ['./r-lookup.component.css'],
  host: {
    class: 'col-lg-10 col-md-8 col-sm-12 overflow-auto h-100 container-fluid ',
  }
})
export class RLookupComponent implements OnInit {

  //skillForm!: FormGroup;

  constructor(/*private fb: FormBuilder,*/ private scApiService: ShinyColorsApiService) {
    //this.skillForm = this.fb.group({
    //  skillName: [null]
    //});
  }

  ngOnInit(): void {
  }

}
