import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SongsController extends Controller {
  @service favoritesSong;
  queryParams = ['name', 'rating']; // On précise le queryParams qui va exister

  @tracked name = 'asc'; // Valeur par défaut de mon queryParams
  @tracked rating = 'asc'; // Valeur par défaut de mon queryParams

  get directionName() {
    // Avoir la prochaine direction de mon queryparams
    return this.model.queryName == 'asc' ? 'desc' : 'asc';
  }

  get directionRating() {
    // Avoir la prochaine direction de mon queryparams
    return this.model.queryRating == 'asc' ? 'desc' : 'asc';
  }

  get filteredSongs() {
    let songs = this.model.songs;

    if (this.name) {
      if (this.name == 'asc') {
        return songs.sortBy('title');
      } else {
        return songs.sortBy('title').reverse();
      }
    }
    if (this.rating) {
      if (this.rating == 'asc') {
        return songs.sortBy('rating');
      } else {
        return songs.sortBy('rating').reverse();
      }
    }

    return songs;
  }

  @action
  deleteSong(song) {
    if (this.favoritesSong.items.includes(song)) {
      this.favoritesSong.remove(song);
    }
    song.destroyRecord();
  }

  @action
  toggleFavorite(song) {
    if (this.favoritesSong.items.includes(song)) {
      this.favoritesSong.remove(song);
    } else {
      this.favoritesSong.add(song);
    }
  }
}
