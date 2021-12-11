import { Injectable } from '@angular/core';
import { Post } from './post.model';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
post:Post[]=[];
baseURL="https://jsonplaceholder.typicode.com";
  constructor(private http:HttpClient) {}
   
getPosts(){
return this.http.get<Post[]>(`${this.baseURL}/posts`)
}

getsinglePost(id){
  return this.http.get<Post>(`${this.baseURL}/posts/${id}`)
}
addPost(formdata:Post){
  return this.http.post<Post>(`${this.baseURL}/posts`, formdata)
}
updatePost(formdata){
  return this.http.put<Post>(`${this.baseURL}/posts`, formdata)

}

deletePost(id){
 return this.http.delete(`${this.baseURL}/posts/${id}`)
}

}
