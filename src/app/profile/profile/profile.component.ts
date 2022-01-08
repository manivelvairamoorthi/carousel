import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private notifyService: NotificationService) { }

  imageArray: any = [
    { id: "1", path: "../../assets/images/Home Screen.png" },
    { id: "2", path: "../../assets/images/Profile details.png" },
    { id: "3", path: "../../assets/images/Gesture Screen (1).png" }
  ]
  ngOnInit(): void {
  }

  remove(data: any, i: any) {
    this.imageArray.splice(i, 1);
    this.notifyService.showSuccess("profile deleted successfully !!")
  }

}
