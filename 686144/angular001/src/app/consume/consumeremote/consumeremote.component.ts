import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'app-consumeremote',
  templateUrl: './consumeremote.component.html',
  styleUrls: ['./consumeremote.component.css']
})
export class ConsumeremoteComponent implements OnInit {
users:any=[]
  constructor(private rm : RemoteService) { }

  ngOnInit() {
    this.rm.getRemoteUsers().subscribe(function(data)
    {
      console.log("recieved from rest API")
      console.log(data)
      this.users=data
console.log("assigned to users")
console.log(this.users)
    })
  }


}
