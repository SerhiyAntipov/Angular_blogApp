import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  posts: Post[] = [
    {title: 'Where does it come from?',text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', id: 1},
    {title: 'Where can I get some?',text: 'It is a long established fact that a reader will be distracted by the readable content', id: 2}
  ]

  updatePosts(newPost: Post){
    this.posts.unshift(newPost)

    console.log('newPost', newPost)
  }
}
