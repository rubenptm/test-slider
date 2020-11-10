import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides') slides: IonSlides;

  indexChanged: string='Current slide index: 0';
  
  slideOpts = {        
    initialSlide: 0,
    speed: 600,
    spaceBetween: 20,
    slidesPerView: 'auto',    
    slidesOffsetBefore: 30,
    slidesOffsetAfter: 30    
  };

  constructor() {}

  slideChange() {		    
		this.slides.getActiveIndex().then(index => {      
      this.indexChanged = 'Current slide index:'+index;
    });
  }

}
