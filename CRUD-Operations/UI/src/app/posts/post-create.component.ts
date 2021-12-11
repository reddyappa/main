import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../shared/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../shared/post.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm:FormGroup;
  post:Post;
  id:number;
  mode:string="Create";
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private service:PostService, private router:Router) { }

  ngOnInit() {
this.route.paramMap.subscribe(params=>{
  const id= +params.get("id");
  this.id=id;
  if(this.id){
this.mode="Edit";
  }
  else{
this.mode="Create";
  }

this.service.getsinglePost(id).subscribe(data=>{
const {id, userId, title, body} =data;

this.postForm.setValue({
id, userId, title, body
})

})

})


    this.postForm=this.fb.group({
      "id":[null],
      "userId":[null],
      "title":['', Validators.required],
      "body":['', Validators.required],
    })
    
  }
  onsumbit(form:FormGroup){


    if(!form.valid){
      return;
    }
    else{
      if(this.mode=="Create"){
      this.service.addPost(form.value).subscribe(data=>{
        alert("Record Save successfully");
        this.router.navigate(['/list'])
      })
      }
      else{
        console.log("update");
      }
    }
    
  }

}
