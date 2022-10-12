import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-delete-restuarent',
  templateUrl: './delete-restuarent.component.html',
  styleUrls: ['./delete-restuarent.component.css']
})
export class DeleteRestuarentComponent implements OnInit {
restId:any;
  constructor(private activatedRoute:ActivatedRoute,private api:RestuarantApiService,private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.restId = data['id']
      console.log(data);
      console.log(data.id);
    })
    this.api.deleteRestuarant(this.restId).subscribe(()=>{
      alert('Requeted Restuarent Details are deleted sucesfully!!!');
      this.route.navigateByUrl('')
    })

  }

}
