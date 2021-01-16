import { Component, OnInit } from '@angular/core';
import { Playlists } from '../playlists'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  lists: Playlists[] = [
    {
      name: 'slow happy',
      songs: [
        {          
          title: 'Push My Luck',
          artist: 'The Chainsmokers'
        },
        {          
          title: 'Fingers',
          artist: 'Zayn'
        }
      ]
    }
  ]

  new_playlist_name: string
  new_playlist: Playlists
  new_artist: string
  new_title: string
  chosen_playlist: string

  constructor() { }

  ngOnInit(): void {
  }

  get_song(search_query) {

  }

  add_playlist() {
    this.new_playlist = {
      name: this.new_playlist_name,
      songs: []
    }
    this.lists.push(this.new_playlist)
    this.new_playlist = null
    this.new_playlist_name = null
  }

  add_track() {
    if(this.chosen_playlist) {
      this.lists.forEach((list, index) => {
        if(list.name == this.chosen_playlist.toLowerCase()) {
          let song_obj = {
            title: this.new_title,
            artist: this.new_artist
          }

          this.lists[index].songs.push(song_obj)
          this.chosen_playlist = null
          this.new_artist = null
          this.new_title = null
        }
      })
    }

  }

}
