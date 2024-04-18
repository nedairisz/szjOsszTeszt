import { szOTeszt } from "./tesztFuggveny.js"

export function szamjegyekOsszege(szam){
    let osszeg = 0
    if (szam<0){
        szam=-szam
    }

    while (szam > 0) {
        let szamJegy = szam % 10
        osszeg = osszeg + szamJegy
        szam = Math.floor(szam /10)
    }
    //console.log(osszeg)
    return osszeg
    
}

szamjegyekOsszege(312)

szOTeszt()