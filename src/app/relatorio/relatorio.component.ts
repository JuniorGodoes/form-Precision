import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  constructor(private service: ServiceService) { }

  filtro:boolean = true
  relatorio:boolean = false
  infos:any = []
  empresas:any = []
  empresaescolhida:String = ''
  Resposta1 = ''
  Resposta2 = ''
  Resposta3 = ''
  Resposta4 = ''
  Resposta5 = ''
  Resposta6 = ''
  Resposta7 = ''
  Resposta8 = ''
  Resposta9 = ''
  Resposta10 = ''
  Resposta11 = ''
  Resposta12 = ''
  Resposta13 = ''
  Resposta14 = ''
  Resposta15 = ''
  Resposta16 = ''
  Resposta17 = ''
  Resposta18 = ''
  Resposta19 = ''
  Resposta20 = ''
  Resposta21 = ''

  ngOnInit(): void {
    this.service.listdados().pipe(map((data:any) => data
    )).subscribe(dados => {
      this.infos = dados
      console.log(this.infos)

      this.infos.forEach((element:any) => {
        this.empresas.push(element.empresa)
      });

      console.log(this.empresas)
    })

  }

  gerar(){
    this.filtro = false
    this.relatorio = true
    this.Resposta1 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta1
    this.Resposta2 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta2
    this.Resposta3 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta3
    this.Resposta4 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta4
    this.Resposta5 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta5
    this.Resposta6 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta6
    this.Resposta7 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta7
    this.Resposta8 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta8
    this.Resposta9 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta9
    this.Resposta10 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta10
    this.Resposta11 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta11
    this.Resposta12 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta12
    this.Resposta13 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta13
    this.Resposta14 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta14
    this.Resposta15 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta15
    this.Resposta16 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta16
    this.Resposta17 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta17
    this.Resposta18 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta18
    this.Resposta19 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta19
    this.Resposta20 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta20
    this.Resposta21 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pergunta21
  }

  voltar(){
    this.filtro = true
    this.relatorio = false
  }

}
