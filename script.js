window.onload = function(){
    var first = 'A ';
    var adj = ['dos cabezas ', 'nuclear ', 'hambre ', 'loco ','pasota'];
    var noun = ['gato ','sal ','perro ', 'marcador ', 'conducir ', 'risas ' ];
    var action = ['vete por ahi ', 'yo no voy ', 'algun día ' , 'pateate '];
    var possetion = ['camión ', 'tren ', 'coche ', 'rifle ', 'escopeta '];
    var where = ['en la plaza','en el porche','en mi casa', 'en la luna'];
    var rdm1 = Math.floor((Math.random() * adj.length) );
    var rdm2 = Math.floor((Math.random() * noun.length) );
    var rdm3 = Math.floor((Math.random() * action.length) );
    var rdm4 = Math.floor((Math.random() * possetion.length) );
    var rdm5 = Math.floor((Math.random() * where.length) );
    
    document.querySelector('#theexcuse').innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5]; 
    
  }
