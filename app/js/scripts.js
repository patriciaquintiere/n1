// get products
function viewProducts(){
  $.ajax({
    url: "../data.json",
    dataType: "json",
    success: function(products){
      $(products).each(function(index, product){
        // html content blocks
        var contentProduct = '';
        // init block product
        contentProduct += '<div class="block product">\n';
        // link product
        contentProduct += '<a href="'+product.productUrl+'">';
        // product url image
        contentProduct += ' <img '+'src="/' + product.productImagerl + '" alt="Foto '+product.productName+'" />\n';
        // product info
        contentProduct += ' <p class="info-product">\n';
        // product name
        contentProduct += '   <span class="name">' + product.productName + '</span>';
        // product especification
        contentProduct += '   <span class="especification">' + product.productEspecification + '</span>';
        // product description
        contentProduct += ' </p>\n';
        // product price tag
        contentProduct += ' <div class="price">\n';
        // product price
        var formatProductPrice = formataValor(product.productPrice);
        contentProduct += ' <span>R$ </span>';
        contentProduct += ' <span class="current-price">'+formatProductPrice+'</span>';
        // end block price
        contentProduct += ' </div>';
        // end block link product
        contentProduct += '</a>';
        // end block product
        contentProduct += '</div>';

        $(".newproducts .container-products").append(contentProduct);
      });
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      $(".newproducts .container-products").append('<div class="block">Desculpe, não foi possível localizar os produtos.</p>');
    }
  });
}
