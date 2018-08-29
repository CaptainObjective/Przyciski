const generujPytanie=()=>{
    const pytanie=losujPytanie();

    
    const sprawdz=(e=false)=>{
        for (id of dom.id) {
            id.removeEventListener('click', sprawdz)
        }
        // console.log(e.target.id);
            let czas=performance.now()-t0;
            historia.push({
                pytanie: pytanie.tekst,
                klikniete: (e) ? e.target.id:'nic',
                poprawna: pytanie.poprawna,
                czas:czas
            });
        if(!e){
            alert('Koniec czasu\nTwój wynik: ' + nrpytania);
            console.log(historia);
            poczatek();
        }
        else if (e.target.id==pytanie.poprawna){
            // console.log('dobrze');
            nrpytania++;
            generujPytanie();// TODO: jakaś animacja by bylo widać ze się pytanie zmienilo;
        }else{
            alert('Nie do końca dobrze\nTwój wynik: '+nrpytania);
            console.log(historia);
            poczatek();
        }
        clearTimeout(timer);
    }

    dom.id[0].innerHTML=pytanie.tekst;
    for(id of dom.id){
    id.addEventListener('click', sprawdz);
    }
    const timer=setTimeout(sprawdz, level*1000);
    let t0=performance.now();
}