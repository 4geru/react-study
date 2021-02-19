/* actions */

module.exports = {

  UPVOTE: 'UPVOTE',

  DOWNVOTE: 'DOWNVOTE',

  SWITCHTHEMA: 'SWITCHTHEMA',

  upvote: function() {
    return {
      type: this.UPVOTE
    }
  },

  downvote: function() {
    return {
      type: this.DOWNVOTE
    }
  },

  switchthema: function() {
    return {
      type: this.SWITCHTHEMA
    }
  }
}
