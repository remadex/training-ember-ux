import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SongsRoute extends Route {
  @service store;

  queryParams = {
    name: {
      refreshModel: true,
    },
  };

  model(params) {
    const songs = this.store.findAll('song', { include: 'band' });
    return {
      songs,
      query: params.name,
    };
  }
}
