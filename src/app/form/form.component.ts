import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ServiceService } from '../service/service.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private service: ServiceService,
    private router: Router,
    ) { }

  image1: any;
  image2: any;
  image3: any;
  image4: any;
  image5: any;
  image6: any;
  image7: any;
  image8: any;
  image9: any;
  image10: any;
  image11: any;
  image12: any;
  image13: any;
  image14: any;
  image15: any;
  image16: any;
  image17: any;
  image18: any;
  image19: any;
  image20: any;
  image21: any;

  showElement = false;

  dados = {
    empresa: '',
    cnpj: '',
    pergunta1: '',
    pergunta2: '',
    pergunta3: '',
    pergunta4: '',
    pergunta5: '',
    pergunta6: '',
    pergunta7: '',
    pergunta8: '',
    pergunta9: '',
    pergunta10: '',
    pergunta11: '',
    pergunta12: '',
    pergunta13: '',
    pergunta14: '',
    pergunta15: '',
    pergunta16: '',
    pergunta17: '',
    pergunta18: '',
    pergunta19: '',
    pergunta20: '',
    pergunta21: ''
  }

  pergunta0 = true;
  pergunta1 = false;
  pergunta2 = false;
  pergunta3 = false;
  pergunta4 = false;
  pergunta5 = false;
  pergunta6 = false;
  pergunta7 = false;
  pergunta8 = false;
  pergunta9 = false;
  pergunta10 = false;
  pergunta11 = false;
  pergunta12 = false;
  pergunta13 = false;
  pergunta14 = false;
  pergunta15 = false;
  pergunta16 = false;
  pergunta17 = false;
  pergunta18 = false;
  pergunta19 = false;
  pergunta20 = false;
  pergunta21 = false;


  
  ngOnInit(): void {
    this.image1 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Analytics-amico.png');
    this.image2 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Analytics-bro.png');
    this.image3 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Manage money-bro.png');
    this.image4 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Analytics-rafiki.png');
    this.image5 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Business Plan-amico.png');
    this.image6 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Business Plan-bro.png');
    this.image7 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Business Plan-cuate.png');
    this.image8 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Business Plan-pana.png');
    this.image9 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Manage money-amico.png');
    this.image10 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Data extraction-amico.png');
    this.image11 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Data extraction-bro.png');
    this.image12 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Data extraction-cuate.png');
    this.image13 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Data extraction-rafiki.png');
    this.image14 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Data report-amico.png');
    this.image15 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Data report-bro.png');
    this.image16 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Data report-cuate.png');
    this.image17 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Data report-pana.png');
    this.image18 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Data report-rafiki.png');
    this.image19 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Investment data-bro.png');
    this.image20 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Investment data-cuate.png');
    this.image21 = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Investment data-rafiki.png');

    this.imprimir()
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  imprimir(){
    this.service.listdados().pipe(map((data: any) => data
    )).subscribe(dados => {
      console.log(dados)
    })
  }

  cadastrar(){
    if(
      this.dados.empresa != '' &&
      this.dados.cnpj != '' &&
      this.dados.pergunta1 != '' &&
      this.dados.pergunta2 != '' &&
      this.dados.pergunta3 != '' &&
      this.dados.pergunta4 != '' &&
      this.dados.pergunta5 != '' &&
      this.dados.pergunta6 != '' &&
      this.dados.pergunta7 != '' &&
      this.dados.pergunta8 != '' &&
      this.dados.pergunta9 != '' &&
      this.dados.pergunta10 != '' &&
      this.dados.pergunta11 != '' &&
      this.dados.pergunta12 != '' &&
      this.dados.pergunta13 != '' &&
      this.dados.pergunta14 != '' &&
      this.dados.pergunta15 != '' &&
      this.dados.pergunta16 != '' &&
      this.dados.pergunta17 != '' &&
      this.dados.pergunta18 != '' &&
      this.dados.pergunta19 != '' &&
      this.dados.pergunta20 != '' &&
      this.dados.pergunta21 != '' 
    ){
      this.service.enviardados(this.dados).subscribe(
        (response) => {
          console.log('Dados enviados com sucesso:', response)
        },
        (error) => {
          console.error('Erro ao enviar os dados:', error)
        }
      )
      this.router.navigate(['/confirmacao']);
    }else{
      alert("Preencha todos os dados")
    }
  }

  nome(info:any){
    this.dados.empresa = info
  }

  cnpjempresa(info:any){
    this.dados.cnpj = info
  }

  next0(empresa:any, cnpj:any){
    this.pergunta0 = false
    this.pergunta1 = true

    this.dados.empresa = empresa
    this.dados.cnpj = cnpj

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next1(resposta:any, feedback:any, pontos:any){
    this.pergunta1 = false
    this.pergunta2 = true

    this.dados.pergunta1 = resposta

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next2(info:any, feedback:any, pontos:any){
    this.pergunta2 = false
    this.pergunta3 = true

    this.dados.pergunta2 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next3(info:any, feedback:any, pontos:any){
    this.pergunta3 = false
    this.pergunta4 = true

    this.dados.pergunta3 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next4(info:any, feedback:any, pontos:any){
    this.pergunta4 = false
    this.pergunta5 = true

    this.dados.pergunta4 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next5(info:any, feedback:any, pontos:any){
    this.pergunta5 = false
    this.pergunta6 = true

    this.dados.pergunta5 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next6(info:any, feedback:any, pontos:any){
    this.pergunta6 = false
    this.pergunta7 = true

    this.dados.pergunta6 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next7(info:any, feedback:any, pontos:any){
    this.pergunta7 = false
    this.pergunta8 = true

    this.dados.pergunta7 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next8(info:any, feedback:any, pontos:any){
    this.pergunta8 = false
    this.pergunta9 = true

    this.dados.pergunta8 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next9(info:any, feedback:any, pontos:any){
    this.pergunta9 = false
    this.pergunta10 = true

    this.dados.pergunta9 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next10(info:any, feedback:any, pontos:any){
    this.pergunta10 = false
    this.pergunta11 = true

    this.dados.pergunta10 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next11(info:any, feedback:any, pontos:any){
    this.pergunta11 = false
    this.pergunta12 = true

    this.dados.pergunta11 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next12(info:any, feedback:any, pontos:any){
    this.pergunta12 = false
    this.pergunta13 = true

    this.dados.pergunta12 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next13(info:any, feedback:any, pontos:any){
    this.pergunta13 = false
    this.pergunta14 = true

    this.dados.pergunta13 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next14(info:any, feedback:any, pontos:any){
    this.pergunta14 = false
    this.pergunta15 = true

    this.dados.pergunta14 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next15(info:any, feedback:any, pontos:any){
    this.pergunta15 = false
    this.pergunta16 = true

    this.dados.pergunta15 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next16(info:any, feedback:any, pontos:any){
    this.pergunta16 = false
    this.pergunta17 = true

    this.dados.pergunta16 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next17(info:any, feedback:any, pontos:any){
    this.pergunta17 = false
    this.pergunta18 = true

    this.dados.pergunta17 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next18(info:any, feedback:any, pontos:any){
    this.pergunta18 = false
    this.pergunta19 = true

    this.dados.pergunta18 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next19(info:any, feedback:any, pontos:any){
    this.pergunta19 = false
    this.pergunta20 = true

    this.dados.pergunta19 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);
  }

  next20(info:any, feedback:any, pontos:any){
    this.pergunta20 = false

    this.dados.pergunta20 = info

    this.showElement = false
    setTimeout(() => {
      this.showElement = true;
    }, 500);

    this.service.enviardados(this.dados).subscribe(
      (response) => {
        console.log('Dados enviados com sucesso:', response)
      },
      (error) => {
        console.error('Erro ao enviar os dados:', error)
      }
    )
    this.router.navigate(['/confirmacao']);
  }


}
