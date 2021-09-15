let colors = ['yellow', 'blue', 'red', 'orange'];

let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (let p = 0; p < colors.length; p++) {
    console.log(colors[p]);
}

colors.forEach(element => console.log(element));

/* Vragen:
1.  while loop: 5 regels
    for loop 3 regels
2.  1 regel
3.  makkelijker leesbaar omdat er minder code is.
*/

let kleuren = { kleur1: 'rood', kleur2: 'blauw', kleur3: 'geel', kleur4: 'oranje', kleur5: 'zwart' };

for (let kleur in kleuren) {
    console.log(kleur + ': ' + kleuren[kleur]);
}