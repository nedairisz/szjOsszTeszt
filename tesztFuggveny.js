import { szamjegyekOsszege } from "./fuggveny.js";

export function szOTeszt(){
/* let szam=321
    let vart=6
    let kapott=szamjegyekOsszege(szam)
    console.assert{vart===szamjegyekOsszege(szam), `n: ${szam} vart: ${vart} kapott: ${szamjegyekOsszege(szam)} HIBA!`} */

    const tesztESETEK = [
        {
            szam: 0,
            vart: 0
        },{
            szam:-11,
            vart: 2
        },{
            szam:321,
            vart: 6
        },{
            szam: 4.44,
            vart: 12
        },{
            szam: 44.4,
            vart: 12
        },{
            szam:1,
            vart:1
        },{
            szam:2,
            vart:2
        },{
            szam:3,
            vart:3
        },{
            szam:4,
            vart:4
        },{
            szam:5,
            vart:5
        },{
            szam:6,
            vart:6
        },{
            szam:7,
            vart:7
        },{
            szam:8,
            vart:8
        },{
            szam:9,
            vart:9
        },{
            szam:Number.MAX_SAFE_INTEGER,
            vart:76
        },{
            szam: Number.MIN_SAFE_INTEGER,
            vart:76
        }
    ]

    /* tesztESETEK.forEach((tesztEset, index) =>{
        let eredmeny = szamjegyekOsszege(tesztEset.szam)
        console.assert(
            tesztEset.vart === eredmeny,
            "%o",
            `n: ${tesztEset.n} vart:${tesztEset.vart} kapott:${eredmeny}`,
            `HIBA! a ${index}. tesztesetnél`
        );
    }) */

    tesztESETEK.forEach((teszt) =>{
        
        console.assert(
            teszt.vart === szamjegyekOsszege(teszt.szam),
            "%o",
            `n: ${teszt.szam} vart:${teszt.vart} kapott: ${szamjegyekOsszege(teszt.szam)}`,
            `HIBA! `
        );
    })   
}

