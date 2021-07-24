import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/food.model';
import { OrderService } from 'src/app/shared/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/shared/food.service';
import { UserService } from 'src/app/shared/user.service';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookfood',
  templateUrl: './bookfood.component.html',
  styleUrls: ['./bookfood.component.css']
})
export class BookfoodComponent implements OnInit {
  userDetails;
  public id = '';
  public selectedFood = new Food();
  myDate = new Date();
  public mydate;
  constructor(private route: ActivatedRoute, private fservice: FoodService , private userService: UserService ,
              private orderService: OrderService, private datepipe: DatePipe , private router: Router) {
      this.mydate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getfood(this.id);
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
      },
      err => {
        this.router.navigate(['/login', { id: this.id }]);
      }
    );
  }
  getfood(id) {
    this.fservice.getfoodid(id).subscribe((res) => {
      this.selectedFood = res as Food;
    }, (err) => {});

  }
  onSubmit(form: NgForm) {
    form.value.price = form.value.fprice * form.value.quan;
    form.value.date = this.mydate;
    this.orderService.insertOrder(form.value).subscribe(
      data => console.log('Success'),
      error => console.error('Error')
    );
    alert('Your Booking is Confirmed');
    this.router.navigateByUrl('userprofile/bookhistory');
  }
}
