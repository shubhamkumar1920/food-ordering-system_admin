import { Component, OnInit } from '@angular/core';
import { VwuserService} from '../../shared/vwuser.service';
import { Reguser} from '../../shared/reguser.model';

@Component({
  selector: 'app-reguser',
  templateUrl: './reguser.component.html',
  styleUrls: ['./reguser.component.css']
})
export class ReguserComponent implements OnInit {
  public users = [];
  constructor(private uservice: VwuserService) { }

  ngOnInit() {
    this.getRegusers();
  }
  getRegusers() {
    this.uservice.getuser().subscribe((res) => {
    this.users = res as Reguser[];
    console.log(this.users);
    });
  }
}
