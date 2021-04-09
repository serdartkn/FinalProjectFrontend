import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
  //bu pipe verdiğmiz fiyat ile yine vereceğimiz oran neticesinde kdv hesaplıyor.****
  //burada value degıstırıceğimiz deger(örneğin,unitprice),
  //ve eğer parametre alması gerekiyorsa rate yazan yer parametreyi(rate biizm verdiğimiz isim) vereceğimiz değer. (eğer parametre almıyorsa sadece value olacak)
  //2 veya daha fazla parametre vereceğimiz zaman rate:number x:number y:number diyebiliriz.
  //bönüş tipimizde number
  transform(value: number, rate: number): number { 
    return value+(value*rate/100);
  }

}
