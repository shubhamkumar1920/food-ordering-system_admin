import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  public category = [];
  public id = '';
  constructor(private userService: UserService, private router: Router, private catservice: CategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategory();
    this.userService.getUserProfile().subscribe(
      res => {
        // tslint:disable-next-line: no-string-literal
        this.userDetails = res['reguser'];
      },
      err => {}
    );
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
  onLogout() {
    this.userService.deleteToken();
    this.ngOnInit();
    location.reload();
    this.router.navigateByUrl('/userprofile/home');
  }
  onFood(catname) {
    this.router.navigate(['userprofile/food', { id: catname }]);
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
      this.category = res as Category[];
    });
  }
}
