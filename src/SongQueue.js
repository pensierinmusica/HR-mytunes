var SongQueue = Songs.extend({

  initialize: function(){
  },
  playFirst: function(){
    this.at(0).play();
  }
});