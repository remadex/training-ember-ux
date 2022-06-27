import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class FavoritesController extends Controller {
  @service favoritesSong;

  @action deleteFavorite(song) {
    this.favoritesSong.remove(song);
  }
}
