import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
posts:Post[]=[]
  constructor(private service:PostService, private router:Router) { }
  displayedColumns = ['id', 'userId', 'title', 'body', 'action'];
  dataSource:Post[]=[];
  ngOnInit() {

   
this.service.getPosts().subscribe(data=>{
this.posts=data;
this.dataSource=this.posts;
})

  }

  editrecord(id){
    this.router.navigate(['create', id]);
  }
deleterecord(id){
  this.service.deletePost(id).subscribe(data=>{
this.service.getPosts().subscribe(data=>{
  this.posts=data;
  alert("Record deleted successfully");
this.dataSource=this.posts;
})
  })
}

}
