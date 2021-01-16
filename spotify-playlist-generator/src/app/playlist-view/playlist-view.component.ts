import { Component, OnInit, Input } from '@angular/core';
import { Playlists } from '../playlists'

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.sass']
})
export class PlaylistViewComponent implements OnInit {

  constructor() { }

  @Input() lists: Playlists[]

  ngOnInit(): void {
  }

}
