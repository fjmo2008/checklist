var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      titulo: 'Check List',
      fondo: 'alert-light',
      items1: [
        {id: 'id11', valor: 0, error: '', item: 'Alarma acustica de aislamiento tierra panel interior'},
        {id: 'id12', valor: 0, error: '', item: 'Cables de tierra existentes y clavijas, pinzas en buen estado todas las mesas, camas y aparatos con toma de tierra'},
        {id: 'id13', valor: 0, error: '', item: 'Comprobación lámpara quirófano (luz y movimiento)'},
        {id: 'id14', valor: 0, error: '', item: 'Comprobación luces interiores'},
        {id: 'id15', valor: 0, error: '', item: 'Cables de tierra conectados: a mesa y carro de anestesia'},
        {id: 'id16', valor: 0, error: '', item: 'Mando, mesa operaciones'},
        {id: 'id17', valor: 0, error: '', item: 'Verificación de variación de presión al abrir puerta'}
      ],
      items2: [
        {id: 'id21', valor: 0, error: '', item: 'Comprobación de cuadros gases'},
        {id: 'id22', valor: 0, error: '', item: 'Estado de suelos'},
        {id: 'id23', valor: 0, error: '', item: 'Termostatos en posición auto'},
        {id: 'id24', valor: 0, error: '', item: 'Comprobación de luces, mecanismos, estanterias'},
        {id: 'id25', valor: 0, error: '', item: 'Lavabos, cuartos de baño, fregaderos'}
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

  var date = new Date();
  var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  var optSimple = {
    format: 'dd-mm-yyyy',
    todayHighlight: true,
    orientation: 'bottom right',
    autoclose: true,
    container: '#sandbox'
  };
  
  var optComponent = {
    format: 'mm-dd-yyyy',
    container: '#datePicker',
    orientation: 'auto top',
    todayHighlight: true,
    autoclose: true
  };
  