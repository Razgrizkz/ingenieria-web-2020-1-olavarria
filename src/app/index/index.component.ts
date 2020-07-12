import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [NgbCarouselConfig]
})
export class IndexComponent implements OnInit {
	images = [
	'../assets/img/index/homepage2.jpg',
	'../assets/img/index/homepage3.jpg',
	'../assets/img/index/homepage4.jpg',
	'../assets/img/index/homepage5.jpg'
	]

  constructor(config: NgbCarouselConfig) {
  	config.showNavigationArrows = false;
  	config.showNavigationIndicators = false;
  }

  ngOnInit() {
  }

}
