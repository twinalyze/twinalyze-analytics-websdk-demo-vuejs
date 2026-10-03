export const products = [
  {id:1,slug:'solace-lamp',name:'Solace Lamp',category:'Lighting',price:92,badge:'Studio pick',symbol:'◒',tone:'peach',description:'A sculptural dimmable lamp for quiet corners and focused work.'},
  {id:2,slug:'arc-speaker',name:'Arc Speaker',category:'Audio',price:138,badge:'New',symbol:'◉',tone:'mint',description:'Compact wireless sound with tactile controls and a twelve-hour battery.'},
  {id:3,slug:'terra-carafe',name:'Terra Carafe',category:'Tableware',price:58,badge:'Set of 3',symbol:'◫',tone:'sky',description:'A softly textured carafe and two tumblers for daily rituals.'},
  {id:4,slug:'drift-tray',name:'Drift Tray',category:'Organization',price:34,badge:'Everyday',symbol:'⌁',tone:'lilac',description:'A curved ceramic tray for keys, jewelry, and small essentials.'},
  {id:5,slug:'morrow-clock',name:'Morrow Clock',category:'Workspace',price:66,badge:'Quiet design',symbol:'◷',tone:'sand',description:'A silent desk clock with a soft-touch frame and calm face.'},
  {id:6,slug:'field-notebooks',name:'Field Notebooks',category:'Stationery',price:28,badge:'Pair',symbol:'▥',tone:'rose',description:'Two lay-flat notebooks with recycled paper and linen covers.'},
  {id:7,slug:'halo-charger',name:'Halo Charger',category:'Technology',price:74,badge:'Smart essential',symbol:'◎',tone:'blue',description:'A weighted wireless charging dock with a calm status light.'},
  {id:8,slug:'meadow-planters',name:'Meadow Planters',category:'Green living',price:46,badge:'Duo',symbol:'♧',tone:'green',description:'Two matte planters for herbs, succulents, and compact plants.'}
];
export const findProduct = (slug) => products.find((p)=>p.slug===slug);
