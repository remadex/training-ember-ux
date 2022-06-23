import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DetailBandComponent extends Component {
  @tracked isEditing = false;

  @action
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  @action
  saveBand() {
    this.args.band.set('description', this.args.description);
    this.args.band.save();

    this.isEditing = false;
  }
}
