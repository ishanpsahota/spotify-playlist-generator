import axios from 'axios'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify-search',
  templateUrl: './spotify-search.component.html',
  styleUrls: ['./spotify-search.component.sass']
})
export class SpotifySearchComponent implements OnInit {

  search_query: string
  results: any
  found_results: Boolean

  constructor() {
    
   }

  ngOnInit(): void {
  }

  show_results() {

    axios.get(`https://www.youtube.com/results?search_query=${this.search_query}&page&utm_source=opensearch`)
    .then((results) => {
      this.found_results = true
      this.results = results
      console.log(results)
    }).catch(err => {
      this.found_results = false
      this.results = err
      console.log(err)
    })

  }

}
