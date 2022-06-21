/* eslint-disable ember/no-computed-properties-in-native-classes */
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { empty } from '@ember/object/computed';

export default class BandsController extends Controller {
  @service store;
  @service router;

  @tracked
  isAddingBand = false;
  @tracked selectBand = {
    name: '',
  };

  @empty('selectBand.name') isAddButtonDisabled;

  @action
  addingBand() {
    this.isAddingBand = true;
  }

  @action
  async addBand(e) {
    e.preventDefault();
    console.log(this.selectBand);

    let record = await this.store.createRecord('band', this.selectBand);
    await record.save(); // On vient d'enregistrer au backend notre nouvelle entrée

    this.isAddingBand = false;
    this.selectBand = {
      name: '',
    };

    this.router.transitionTo('bands.band.songs', record.id); // On est redirigé vers le groupe créé,

    // console.log(this.model);
  }

  @action
  cancelBand() {
    this.selectBand = {
      name: '',
    };
    this.isAddingBand = false;
  }
}
