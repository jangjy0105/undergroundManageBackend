const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  noticeName: {type: String},
  noticeContent: {type: String},
  date: {
    type: Date,
    default: Date.now
  }
})

const Notices = mongoose.model('notices', noticeSchema);

module.exports = {Notices}