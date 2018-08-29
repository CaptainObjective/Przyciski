const losujPytanie=()=>{
    const liczba_kategorii=1;
    let trudnosc= Math.floor(losuj(0,nrpytania)/10);
    let kategoria=losuj(0,1)+trudnosc;
    (kategoria>liczba_kategorii)?kategoria=liczba_kategorii:false;//TO jeszcze może trzeba będzię poprawić
    // console.log (kategoria,trudnosc);


    switch (kategoria){
        case 0:
            return new Cyferki;
            break;
        case 1:
            return new Kolorki;
            break;
    }

}