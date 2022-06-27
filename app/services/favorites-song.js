import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

export default class FavoritesSongService extends Service {
  @tracked items = A([]);

  add(item) {
    this.items.pushObject(item);
  }

  remove(item) {
    this.items.removeObject(item);
  }
}
