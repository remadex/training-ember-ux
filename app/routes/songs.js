import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SongsRoute extends Route {
  @service store;

  queryParams = {
    name: {
      refreshModel: true,
    },
    rating: {
      refreshModel: true,
    },
  };

  model(params) {
    const songs = this.store.findAll('song', { include: 'band' });
    return {
      songs,
      queryName: params.name,
      queryRating: params.rating,
    };
  }
}
