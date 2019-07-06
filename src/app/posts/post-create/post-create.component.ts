import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']

})

export class PostCreateComponent{
  enteredValue = '';
  newPost = 'No content';


  onAddPost(postInput: HTMLTextAreaElement){
      console.log(postInput);
      this.newPost = this.enteredValue;

    }

}
