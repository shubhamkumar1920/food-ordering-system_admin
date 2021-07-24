import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public category = [];
  public id = '';

  constructor(private router: Router, private catservice: CategoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
      this.category = res as Category[];
    });
  }

  onFood(catname) {
    this.router.navigate(['userprofile/food', { id: catname }]);
  }
}
