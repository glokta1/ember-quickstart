import Route from '@ember/routing/route';

export default class FootballersRoute extends Route {
  model() {
    return ['Lionel Messi', 'Kevin de Bruyne', 'Eden Hazard'];
  }
}
