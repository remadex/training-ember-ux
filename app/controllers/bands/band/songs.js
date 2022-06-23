/* eslint-disable ember/no-computed-properties-in-native-classes */
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { empty } from '@ember/object/computed';

export default class BandsBandSongsController extends Controller {
  @service store;
  @service router;

  @tracked
  isAddingSong = false;
  @tracked selectSong = {
    title: '',
  };

  @empty('selectSong.title') isAddButtonDisabled;

  @action
  addingSong() {
    this.isAddingSong = true;
  }

  @action
  async addSong(e) {
    e.preventDefault();
    console.log(this.selectSong);

    let record = await this.store.createRecord('song', {
      title: this.selectSong.title,
      rating: 0,
      band: this.model,
    });
    await record.save();

    this.isAddingSong = false;
    this.selectSong = {
      name: '',
    };
  }

  @action
  cancelSong() {
    this.selectSong = {
      name: '',
    };
    this.isAddingSong = false;
  }

  @action
  setMaxRating(song) {
    song.set('rating', 10);
    song.save();
  }

  @action
  setRating(rating, song) {
    console.log('Action du controller');
    console.log(rating, song);

    song.set('rating', rating);
    song.save();
  }
}
