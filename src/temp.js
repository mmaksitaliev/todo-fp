const moment = require("moment");

const now = moment()
  .add(3, "minute")
  .add(1, "second");

console.log("diff", now.diff(moment(), "minutes"));

console.log(moment(now).toString());
