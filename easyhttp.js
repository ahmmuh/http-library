function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make HTTP GET request

easyHTTP.prototype.get = function(url) {
  this.http.open("GET", url, true);
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      console.log(self.http.responseText);
    } else {
      console.log("Error:" + self.http.status);
    }
  };
  this.http.send();
};
// Make HTTP POST request

easyHTTP.prototype.post = function(url, data) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("content-type", "application/json");

  let self = this;
  this.http.onload = function() {
    console.log(self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};
// Make HTTP PUT request

easyHTTP.prototype.put = function(url, data) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("content-type", "application/json");

  let self = this;
  this.http.onload = function() {
    console.log(self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};
// Make HTTP DELETE request

easyHTTP.prototype.delete = function(url) {
  this.http.open("GET", url, true);
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      console.log("post deleted");
    } else {
      console.log("Error:" + self.http.status);
    }
  };
  this.http.send();
};
