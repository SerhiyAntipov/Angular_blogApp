import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default
  // changeDetection: ChangeDetectionStrategy.OnPush
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked
{

  @Input() myPost: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('postLengthInfo', {static: true}) infoRef: ElementRef

  constructor() {

  }

  removePost(){
    this.onRemove.emit(this.myPost.id)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes ', changes)
  }

  ngOnInit() {
    // console.log(this.infoRef.nativeElement)
    // console.log('ngOnInit')
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked')
  }
}
