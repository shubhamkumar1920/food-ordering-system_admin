import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/shared/food.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Food } from 'src/app/shared/food.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  public id = '';
  public foods = [];
  public apiurl = 'http://localhost:3000';
  constructor(private route: ActivatedRoute, private router: Router, private fservice: FoodService, private sanitizer: DomSanitizer) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  getFOoddetails(id) {
    this.fservice.getfoodcatid(id).subscribe((res) => {
      this.foods = res as Food[];
    });
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getFOoddetails(this.id);
  }
  getSafeUrl(fpic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + fpic);
  }
  onBook(id) {
    this.router.navigate(['/userprofile/bookfood', { id: id }]);
  }
}
