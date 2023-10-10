import autoTable from 'jspdf-autotable';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { map } from 'rxjs/operators';
import * as echarts from 'echarts';
import jsPDF from 'jspdf';
import { ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  @ViewChild('content', {static: false}) el!: ElementRef;

  constructor(private service: ServiceService) { }

  filtro:boolean = true
  relatorio:boolean = false
  perguntaserespostas:boolean = false
  organizacao:boolean = false
  demonstrativos:boolean = false
  analises:boolean = false
  precificacao:boolean = false
  seguranca:boolean = false
  diagnostico:boolean = false
  dashboard:boolean = false
  infos:any = []
  empresas:any = []
  empresaescolhida:String = ''
  cnpj = 0
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
  Feedback1 = ''
  Feedback2 = ''
  Feedback3 = ''
  Feedback4 = ''
  Feedback5 = ''
  Feedback6 = ''
  Feedback7 = ''
  Feedback8 = ''
  Feedback9 = ''
  Feedback10 = ''
  Feedback11 = ''
  Feedback12 = ''
  Feedback13 = ''
  Feedback14 = ''
  Feedback15 = ''
  Feedback16 = ''
  Feedback17 = ''
  Feedback18 = ''
  Feedback19 = ''
  Feedback20 = ''
  Feedback21 = ''

  pontuacaofinancas = 0
  registrofinanceiro = 0
  relatorios = 0
  graficos = 0
  resultado = 0
  indicadores = 0
  precificacaoempresa = 0
  reservafinanceira = 0

  ngOnInit(): void {
    this.service.listdados().pipe(map((data:any) => data
    )).subscribe(dados => {
      this.infos = dados
      console.log(this.infos)

      this.infos.forEach((element:any) => {
        this.empresas.push(element.empresa)
      });

    })

  }

  mudarempresa(){
    this.cnpj = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).cnpj
  }

  todas(){
    this.perguntaserespostas = true
    this.organizacao = false
    this.demonstrativos = false
    this.analises = false
    this.precificacao = false
    this.seguranca = false
    this.diagnostico = false
    this.dashboard = false
  }

  somenteorganizacao(){
    this.perguntaserespostas = false
    this.organizacao = true
    this.demonstrativos = false
    this.analises = false
    this.precificacao = false
    this.seguranca = false
    this.diagnostico = false
    this.dashboard = false
  }

  somentedemonstrativos(){
    this.perguntaserespostas = false
    this.organizacao = false
    this.demonstrativos = true
    this.analises = false
    this.precificacao = false
    this.seguranca = false
    this.diagnostico = false
    this.dashboard = false
  }

  somenteanalises(){
    this.perguntaserespostas = false
    this.organizacao = false
    this.demonstrativos = false
    this.analises = true
    this.precificacao = false
    this.seguranca = false
    this.diagnostico = false
    this.dashboard = false
  }

  somenteprecificacao(){
    this.perguntaserespostas = false
    this.organizacao = false
    this.demonstrativos = false
    this.analises = false
    this.precificacao = true
    this.seguranca = false
    this.diagnostico = false
    this.dashboard = false
  }

  somenteseguranca(){
    this.perguntaserespostas = false
    this.organizacao = false
    this.demonstrativos = false
    this.analises = false
    this.precificacao = false
    this.seguranca = true
    this.diagnostico = false
    this.dashboard = false
  }

  somentediagnostico(){
    this.perguntaserespostas = false
    this.organizacao = false
    this.demonstrativos = false
    this.analises = false
    this.precificacao = false
    this.seguranca = false
    this.diagnostico = true
    this.dashboard = false
  }

  somentegraficos(){
    this.perguntaserespostas = false
    this.organizacao = false
    this.demonstrativos = false
    this.analises = false
    this.precificacao = false
    this.seguranca = false
    this.diagnostico = false
    this.dashboard = true


    setTimeout(() => {
      const myChart = echarts.init(document.getElementById('grafico'));
      const myChart2 = echarts.init(document.getElementById('grafico2'));
  
      // Configurações do gráfico
      const options = {
          xAxis: {
            data: ['Separação das Finanças', 'Registros Financeiros', 'Relatorios', 'Gráficos']
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              data: [this.pontuacaofinancas, this.registrofinanceiro, this.relatorios, this.graficos],
              barGap: '20%',
              barCategoryGap: '40%'
            },
            {
              type: 'bar',
              data: [100, 100, 100, 100]
            }
          ]
      };
      myChart.setOption(options)
    
    
      const tipo = {
          xAxis: {
            data: ['Resultado', 'Indicadores', 'Precificação', 'Reserva Financeira']
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              data: [this.resultado, this.indicadores, this.precificacaoempresa, this.reservafinanceira],
              barGap: '20%',
              barCategoryGap: '40%'
            },
            {
              type: 'bar',
              data: [100, 100, 100, 100]
            }
          ]
      };
      myChart2.setOption(tipo)
    }, 100);

    

  }

  gerar(){
    this.filtro = false
    this.relatorio = true
    this.perguntaserespostas = true
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

    this.Feedback1 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback1
    this.Feedback2 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback2
    this.Feedback3 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback3
    this.Feedback4 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback4
    this.Feedback5 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback5
    this.Feedback6 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback6
    this.Feedback7 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback7
    this.Feedback8 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback8
    this.Feedback9 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback9
    this.Feedback10 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback10
    this.Feedback11 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback11
    this.Feedback12 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback12
    this.Feedback13 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback13
    this.Feedback14 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback14
    this.Feedback15 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback15
    this.Feedback16 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback16
    this.Feedback17 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback17
    this.Feedback18 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback18
    this.Feedback19 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback19
    this.Feedback20 = this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).feedback20

    this.pontuacaofinancas += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos1
    this.pontuacaofinancas += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos2
    this.pontuacaofinancas += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos3
    this.pontuacaofinancas = ((this.pontuacaofinancas/12) * 100)

    this.registrofinanceiro += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos4
    this.registrofinanceiro += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos5
    this.registrofinanceiro += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos6
    this.registrofinanceiro += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos7
    this.registrofinanceiro = ((this.registrofinanceiro/16) * 100)

    this.relatorios += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos8
    this.relatorios += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos9
    this.relatorios = ((this.relatorios/8) * 100)

    this.graficos += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos10
    this.graficos = ((this.graficos/4) * 100)

    this.resultado += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos11
    this.resultado += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos12
    this.resultado = ((this.resultado/8) * 100)

    this.indicadores += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos13
    this.indicadores += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos14
    this.indicadores = ((this.indicadores/8) * 100)

    this.precificacaoempresa += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos15
    this.precificacaoempresa += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos16
    this.precificacaoempresa += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos17
    this.precificacaoempresa = ((this.precificacaoempresa/12) * 100)

    this.reservafinanceira += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos18
    this.reservafinanceira += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos19
    this.reservafinanceira += this.infos.find((dados:any) => dados.empresa == this.empresaescolhida ).pontos20
    this.reservafinanceira = ((this.reservafinanceira/12) * 100)
  }

  voltar(){
    this.filtro = true
    this.relatorio = false

    this.pontuacaofinancas = 0
    this.registrofinanceiro = 0
    this.relatorios = 0
    this.graficos = 0
    this.resultado = 0
    this.indicadores = 0
    this.precificacaoempresa = 0
    this.reservafinanceira = 0
  }

  // generatePDF() {
  //   html2canvas(document.getElementById("content")!).then(canvas => {

  //     let imgData = canvas.toDataURL('image/png');
  //     let imgWidth = 200; // Largura em mm de um a4
  //     let pageHeight = 270; // Altura em mm de um a4
  
  //     let imgHeight = canvas.height * imgWidth / canvas.width;
  //     let heightLeft = imgHeight;
  //     let position = 0;
  //     let pdf = new jsPDF('p', 'mm');
  //     let fix_imgWidth = 0; // Vai subindo e descendo esses valores ate ficar como queres
  //     let fix_imgHeight = 15; // Vai subindo e descendo esses valores ate ficar como queres
  
  //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;
  
  //     while (heightLeft >= 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth + fix_imgWidth, imgHeight + fix_imgHeight);
  //       heightLeft -= pageHeight;
  //     }
  
  //     pdf.save('output.pdf');
  //   });
  // }

  generatePDF() {
    html2canvas(document.getElementById("content")!).then(canvas => {
  
      let imgData = canvas.toDataURL('image/png');
      let imgWidth = 280; // Largura em mm de uma página A4 no modo paisagem
      let pageHeight = 190; // Altura em mm de uma página A4 no modo paisagem
  
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      let pdf = new jsPDF('l', 'mm'); // Alterado para paisagem (landscape) e milímetros
  
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
  
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
  
      pdf.save('output.pdf');
    });
  }
  









  

}


