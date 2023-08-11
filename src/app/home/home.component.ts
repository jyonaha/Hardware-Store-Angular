import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, NgFor, NgIf, CommonModule],
})
export class HomeComponent {

  constructor(private router: Router) { }

  verDetalhes(imovelId: string) {
    this.router.navigate(['/detalhes', imovelId]);
  }

  toogleFavorito(index: number): void {
    this.produtos[index].favorito = !this.produtos[index].favorito
  }


  nome: string = 'João';
  sobrenome: string = 'Yonaha';
  data: any = new Date();
  produtos: Array<any> = [
    {
      id: 1,
      titulo: 'RTX 4070 TI Ventus',
      foto: 'https://i.ibb.co/zXf5ytz/4070TI.jpg',
      info1: 'Resolução máxima digital: 7680x4320',
      info2: 'Memória:	12GB GDDR6X',
      info3: 'Clock: 2310 MHz',
      preco: 5699,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Ryzen 97950X',
      foto: 'https://i.ibb.co/NtgwHTK/R97950X.jpg',
      info1: 'Núcleos de CPU: 16',
      info2: 'Threads: 32',
      info3: 'Socket: AM5',
      preco: 6801,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Kingston Fury Beast',
      foto: 'https://i.ibb.co/LN44SYc/ram.jpg',
      info1: 'Velocidades: 3200 MHz',
      info2: 'Fator de forma: DDR4',
      info3: 'Capacidades: 2x 16GB (Kit 32GB)',
      preco: 619,
      favorito: false
    },
    {
      id: 4,
      titulo: 'Asus Rog Crosshair X670E',
      foto: 'https://i.ibb.co/yqfhspJ/PLACAM-E.jpg',
      info1: 'AMD Socket AM5',
      info2: 'Memória: 4 x DIMM, máx. 128 GB, DDR5',
      info3: 'Slots de expansão: 2 x slots PCIe 5.0 x16',
      preco: 8299,
      favorito: false
    },
    {
      id: "5",
      titulo: 'Samsung Odyssey Ark',
      foto: 'https://i.ibb.co/xYBsF9y/monitorgiga.jpg',
      info1: 'Taxa de Atualização: 165Hz, 1ms',
      info2: 'Resoluçao: 4k',
      info3: 'Painel: Curvo VA',
      preco: 20519,
      favorito: true
    },
    {
      id: "6",
      titulo: 'Asus Rog Strix Z790-A Gaming',
      foto: 'https://i.ibb.co/Bfd58Sx/placamaeintel.jpg',
      info1: 'INTEL Socket LGA 1700',
      info2: 'Memória: 4 x DIMM, máx. 128 GB, DDR4',
      info3: 'Slots de expansão:1 x slot PCIe 5.0 x16',
      preco: 3882,
      favorito: true
    },
    {
      id: "7",
      titulo: 'I9-13900F',
      foto: 'https://i.ibb.co/KGWMmF7/i9-13th.jpg',
      info1: 'Núcleos de CPU: 24',
      info2: 'Threads: 32',
      info3: 'Socket: LGA1700',
      preco: 3699,
      favorito: true
    },
    {
      id: "8",
      titulo: 'RX 7900 XT',
      foto: 'https://i.ibb.co/w7bvS7M/7900XT.jpg',
      info1: ' Resolução máxima digital: 7680 x 4320',
      info2: 'Memória: 20GB GDDR6X',
      info3: 'Clock: 2450 MHz',
      preco: 6568,
      favorito: true
    },
    {
      id: "9",
      titulo: 'RTX 4070 TI Galax',
      foto: 'https://i.ibb.co/wyG8CQm/4070tigalax.jpg',
      info1: 'Resolução máxima digital: 7680x4320',
      info2: 'Memória:	12GB GDDR6X',
      info3: 'Clock: 2685MHz',
      preco: 6839,
      favorito: true
    }
  ];
}
