import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('postFormTitle', {static: false}) inputRef: ElementRef

  formTitle: string = ''
  formDescription: string = ''

  constructor() { }

  ngOnInit() {
  }

  addPost() {
    if ( this.formTitle.trim() && this.formDescription.trim() ) {
      const newPost: Post = {
        title: this.formTitle,
        text: this.formDescription
      }

      this.onAdd.emit(newPost)

      this.formTitle = this.formDescription = ''
    }
  }

  focusTitle(){
    console.log(this.inputRef)
    this.inputRef.nativeElement.focus()
  }
}
