import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SongsController extends Controller {
  @service favoritesSong;
  queryParams = ['name']; // On précise le queryParams qui va exister

  @tracked name = 'asc'; // Valeur par défaut de mon queryParams

  get direction() {
    // Avoir la prochaine direction de mon queryparams
    return this.model.query == 'asc' ? 'desc' : 'asc';
  }

  get filteredSongs() {
    let songs = this.model.songs;

    if (this.name == 'asc') {
      return songs.sortBy('title');
    } else {
      return songs.sortBy('title').reverse();
    }
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
