import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-monster-card',
  standalone: true,
  templateUrl: './monster-card.html',
  styleUrls: ['./monster-card.scss']
})
export class MonsterCardComponent {
  @Input() imagen = '';
  @Input() titulo = '';
  @Input() texto = '';
  @Input() mensaje = 'No deberías haber entrado...';

  mostrarMensaje() {
    alert(this.mensaje);
  }
}