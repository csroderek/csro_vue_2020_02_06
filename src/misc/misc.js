export default {
  getDateTime() {
    let now = new Date();
    let date =
      now.getFullYear().toString() +
      "-" +
      now
        .getMonth()
        .toString()
        .padStart(2, "0") +
      "-" +
      now
        .getDate()
        .toString()
        .padStart(2, "0");

    let time =
      now
        .getHours()
        .toString()
        .padStart(2, "0") +
      ":" +
      now
        .getMonth()
        .toString()
        .padStart(2, "0") +
      ":" +
      now
        .getSeconds()
        .toString()
        .padStart(2, "0");
    return date + " " + time;
  }
};
