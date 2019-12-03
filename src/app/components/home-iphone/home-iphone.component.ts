import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-home-iphone',
  templateUrl: './home-iphone.component.html',
  styleUrls: ['./home-iphone.component.css']
})

export class HomeIphoneComponent implements OnInit {
  
  constructor(
    
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.navigate([], {relativeTo:this.activatedRoute});
  }
 

  onGoToDetailIphone(){
    //this.router.navigate(['detail'],{relativeTo:this.activatedRoute});
    //this.isPageDetailIphone = !this.isPageDetailIphone;
    //console.log (this.isPageDetailIphone);
  }
}
