import Model, { attr, hasMany } from '@ember-data/model';

export default class BandModel extends Model {
  @attr('string') name;
  @hasMany('song') songs;
}
