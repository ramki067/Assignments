

var myFunc01 = function() {
    var i = 0;
    const str = "Welcome to Node JS";
    while (i < str.length) {
      (function(i) {
        setTimeout(function() {
          console.log(str.charAt(i))
        }, 1000 * i)
      })(i++)
    }
  };
  
  myFunc01();