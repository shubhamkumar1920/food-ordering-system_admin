import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/order.model';
import { OrderService } from 'src/app/shared/order.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-bookhistory',
  templateUrl: './bookhistory.component.html',
  styleUrls: ['./bookhistory.component.css']
})
export class BookhistoryComponent implements OnInit {
  public userDetails;
  public email = '';
  public orders = [];
  constructor(private userService: UserService, private orderservice: OrderService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
        this.email = this.userDetails.email;
        this.getorder();
      },
      err => {}
    );
  }
  getorder() {
    console.log(this.email);
    this.orderservice.getuserorder(this.email).subscribe((res) => {
      this.orders = res as Order[];
    });

  }
}
