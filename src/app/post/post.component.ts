import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title;
  @Input() content;
  @Input() loveIts;
  @Input() createdAt;

  constructor() { }

  ngOnInit() {
  }

  addLoveIts(nb)
  {
    this.loveIts += nb;
  }

}
