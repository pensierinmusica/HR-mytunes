var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    this.get('songQueue').on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song) {
      this.get('songQueue').add(song);
      this.get('songQueue').playFirst();
    }, this);

    params.library.on('dequeue', function(song) {
      this.get('songQueue').remove(song);
    }, this);
  }

});
