(function() {

    'use strict';
    // Questão 1

    var tamDestaques = [ 360, 390 ];
    var promocoes = [];

    promocoes[ 0 ] =  
        { titulo: 'Death Note', nome_Arquivo_Foto: 'DeathNoteA110',
        informacao: 'Série Completa', quantidade: 'Formato DVD - 5 discos ',  
        preco_Antigo: 90, preco_Atual: 85 }; 

    promocoes[ 1 ] =  
        { titulo: 'Naruto Gold', nome_Arquivo_Foto: 'NarutoGoldA110',
        informacao: 'Mangá em Português', quantidade: '55 volumes ',  
        preco_Antigo: 1100, preco_Atual: 1000 };
    
    promocoes[ 2 ] = 
        { titulo: 'Naruto Shippuden', nome_Arquivo_Foto: 'NarutoFigA110',
        informacao: 'Action figure em PVC', quantidade: '',  
        preco_Antigo: 250, preco_Atual: 210 };
    

    
    function janelaPromocao( tipo ) {

        var jan = window.open( 
            
            ' ', promocoes[ tipo ].titulo, 
            'location=no, status=no, width=' + tamDestaques[ 0 ] + 
            ', height=' + tamDestaques[ 1 ] + ' ' 
        );

        jan.document.write('<html><head><title>Otaku on Titans</title>');
        jan.document.write('<link href="main.css" rel="stylesheet">');
        jan.document.write('</head><body><section>');
            
        jan.document.write( '<h1>' + promocoes[ tipo ].titulo + '</h1>');
        jan.document.write('<img src=Imagens/' + promocoes[ tipo ].nome_Arquivo_Foto + '.jpg>');
        jan.document.write( '<p>' + promocoes[ tipo ].informacao + '</p>' );
        jan.document.write( '<p>' + promocoes[ tipo ].quantidade + '</p>' );
        jan.document.write( '<p>Preço: De R$ ' + '<span class=line>' + promocoes[ tipo ].preco_Antigo + ',00</span></p>' );
        jan.document.write( '<p>Por R$ ' + promocoes[ tipo ].preco_Atual + ',00</p>' );
        jan.document.write('<form><input type=button value=Fechar onClick=window.close();></form>');
        jan.document.write('</section></body></html>');

    }

    var linksPromo = document.querySelectorAll('.lisDestaq-link'); //pego o conjunto de arrays

    linksPromo[0].addEventListener("click", function(){ janelaPromocao(0); }, false);
    
    linksPromo[1].addEventListener("click", function(){ janelaPromocao(1); }, false);
            
    linksPromo[2].addEventListener("click", function(){ janelaPromocao(2); }, false);

    //outro jeito de fazer:
    //promocoes[ 0 ] = [ 'Death Note', 'DeathNoteA110','Série Completa', 'Formato DVD - 5 discos ', 90, 85 ];
    //promocoes[ 1 ] = [ 'Naruto Gold', 'NarutoGoldA110', 'Mangá em Português', '55 volumes ', 1100, 1000 ];
    //promocoes[ 2 ] = [ 'Naruto Shippuden', 'NarutoFigA110', 'Action figure em PVC', '', 250, 210 ];

    // function JanelaPromocao( tipo ) {

    //     var jan = window.open( 
            
    //         ' ', promocoes[ tipo ][ 0 ], 
    //         'location=no, status=no, width=' + tamDestaques[ 0 ] + 
    //         ', height=' + tamDestaques[ 1 ] + ' ' 
    //     );

    //     jan.document.write('<html><head><title>Otaku on Titans</title>');
    //     jan.document.write('<link href="main.css" rel="stylesheet">');
    //     jan.document.write('</head><body><section>');
            
    //     jan.document.write( '<h1>' + promocoes[ tipo ][0].titulo + '</h1>');
    //     jan.document.write('<img src=Imagens/' + promocoes[ tipo ][ 1 ] + '.jpg>');
    //     jan.document.write( '<p>' + promocoes[ tipo ][ 2 ], '</p>' );
    //     jan.document.write( '<p>' + promocoes[ tipo ][ 3 ], '</p>' );
    //     jan.document.write( '<p>Preço: De R$ ' + '<span class=line>' + promocoes[ tipo ][ 4 ] + ',00</span></p>' );
    //     jan.document.write( '<p>Por R$ ' + promocoes[ tipo ][ 5 ] + ',00</p>' );
    //     jan.document.write('<form><input type=button value=Fechar onClick=window.close();></form>');
    //     jan.document.write('</section></body></html>');

    // }

        // var linksPromo = document.querySelectorAll('.lisDestaq-link'); //pego o conjunto de arrays

//     linksPromo[0].addEventListener("click", function(){ 
//         JanelaPromocao(0); }, false);
    
//     linksPromo[1].addEventListener("click", function(){ 
//         JanelaPromocao(1); }, false);
            
//     linksPromo[2].addEventListener("click", function(){ 
//        JanelaPromocao(2); }, false);

       

    //Questão 2

    
    var catalogoPP = [];

    catalogoPP[0] = { nome_Arquivo_Foto:'NarShipB1T01A300', catalogo_Preco: 60 };
    catalogoPP[1] = { nome_Arquivo_Foto:'NarShipB2T01A300', catalogo_Preco: 60 };
    catalogoPP[2] = { nome_Arquivo_Foto: 'AOT1-4A300', catalogo_Preco: 130 };
    catalogoPP[3] = { nome_Arquivo_Foto: 'AOT5-8A300', catalogo_Preco: 130 };
    catalogoPP[4] = { nome_Arquivo_Foto: 'NarutoBoxPart1A300', catalogo_Preco: 600 };
    catalogoPP[5] = { nome_Arquivo_Foto: 'RyukFigA300', catalogo_Preco: 250 };

    function mostraCatalogo( codigo ){

        var imgPP = document.getElementById( 'imgProd' );
        var precoPP = document.getElementById( 'precoProd' );

        imgPP.src = 'Imagens/' + catalogoPP[ codigo ].nome_Arquivo_Foto + '.jpg';
        precoPP.innerHTML = 'Preço: R$ ' + catalogoPP[ codigo ].catalogo_Preco + ',00';  
    }

    
    var itemCatalogo = document.querySelectorAll('.linkCatalogo'); //vários arrays dentro de um
   
    itemCatalogo[0].addEventListener("click", function(){ mostraCatalogo(0); }, false);
    itemCatalogo[1].addEventListener("click", function(){ mostraCatalogo(1); }, false);
    itemCatalogo[2].addEventListener("click", function(){ mostraCatalogo(2); }, false);
    itemCatalogo[3].addEventListener("click", function(){ mostraCatalogo(3); }, false);
    itemCatalogo[4].addEventListener("click", function(){ mostraCatalogo(4); }, false);
    itemCatalogo[5].addEventListener("click", function(){ mostraCatalogo(5); }, false);
    

    //outro jeito de fazer:
    // var catalogoPP = [];

    // catalogoPP[0] = ['NarShipB1T01A300', 60 ];
    // catalogoPP[1] = ['NarShipB2T01A300', 60 ];
    // catalogoPP[2] = ['AOT1-4A300', 130 ];
    // catalogoPP[3] = ['AOT5-8A300', 130 ];
    // catalogoPP[4] = ['NarutoBoxPart1A300', 600 ];
    // catalogoPP[5] = ['RyukFigA300', 250 ];

    // function mostraCatalogo( codigo ){

    //     var imgPP = document.getElementById( 'imgProd' );
    //     var precoPP = document.getElementById( 'precoProd' );

    //     imgPP.src = 'Imagens/' + catalogoPP[ codigo ][ 0 ] + '.jpg';
    //     precoPP.innerHTML = 'Preço: R$ ' + catalogoPP[ codigo ][ 1 ] + ',00';  
    // }

    
    // var itemCatalogo = document.querySelectorAll('.linkCatalogo'); //vários arrays dentro de um
    // if(itemCatalogo){

    //     itemCatalogo[0].addEventListener("click", function(){ mostraCatalogo(0); }, false);
    //     itemCatalogo[1].addEventListener("click", function(){ mostraCatalogo(1); }, false);
    //     itemCatalogo[2].addEventListener("click", function(){ mostraCatalogo(2); }, false);
    //     itemCatalogo[3].addEventListener("click", function(){ mostraCatalogo(3); }, false);
    //     itemCatalogo[4].addEventListener("click", function(){ mostraCatalogo(4); }, false);
    //     itemCatalogo[5].addEventListener("click", function(){ mostraCatalogo(5); }, false);
    // }

})();
