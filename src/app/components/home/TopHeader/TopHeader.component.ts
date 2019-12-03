import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-TopHeader',
  templateUrl: './TopHeader.component.html',
  styleUrls: ['./TopHeader.component.css']
})
export class TopHeaderComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  OnGotoHomeIphone(){
    this.router.navigate(['/homeIphone']);
  }
  
  OnGotoHomeIpab(){
    this.router.navigate(['/homeIpab']);
  }

  OnGoToHomeMac(){
    this.router.navigate(['/homeMac']);
  }
}
