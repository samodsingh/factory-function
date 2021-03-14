  function mobile(model_no) {
      return{
          model: model_no,
          price: function(){
              return "price is Rs. 3000";
          }
      };
  }
  var sumsung = mobile('galaxy');
  var nokia = mobile('3310');
  document.write(sumsung.model + " "+sumsung.price( ) +"<br>");
  document.write(nokia.model + " "+sumsung.price( ) +"<br>");

