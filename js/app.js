var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      titulo: 'Check List',
      items1: [
        {id: ['id11a','id11b'], item: 'Alarma acustica de aislamiento tierra panel interior'},
        {id: ['id12a','id12b'], item: 'Cables de tierra existentes y clavijas, pinzas en buen estado todas las mesas, camas y aparatos con toma de tierra'},
        {id: ['id13a','id13b'], item: 'Comprobación lámpara quirófano (luz y movimiento)'},
        {id: ['id14a','id14b'], item: 'Comprobación luces interiores'},
        {id: ['id15a','id15b'], item: 'Cables de tierra conectados: a mesa y carro de anestesia'},
        {id: ['id16a','id16b'], item: 'Mando, mesa operaciones'},
        {id: ['id17a','id17b'], item: 'Verificación de variación de presión al abrir puerta'}
      ],
      items2: [
        {id: ['id21a','id21b'], item: 'Comprobación de cuadros gases'},
        {id: ['id22a','id22b'], item: 'Estado de suelos'},
        {id: ['id23a','id23b'], item: 'Termostatos en posición auto'},
        {id: ['id24a','id24b'], item: 'Comprobación de luces, mecanismos, estanterias'},
        {id: ['id25a','id25b'], item: 'Lavabos, cuartos de baño, fregaderos'}
      ],
      frutas: [
          {nombre:'Manzana', cantidad:10},
          {nombre:'Pera', cantidad:0},
          {nombre:'Platano', cantidad:5}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
      agregarFruta() {
        this.frutas.push({
          nombre: this.nuevaFruta,
          cantidad : 0
        });
        this.nuevaFruta = '';
      }
    },
    computed: {
      sumarFrutas() {
        this.total = 0;
        for(fruta of this.frutas) {
          this.total += fruta.cantidad;
        }
        return this.total;
      }
    }
  })

