import { Component, OnInit, VERSION } from '@angular/core';
import { People } from './people.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Estudo de ordenação com TypeScript em relação ao Linq';

  orderByNome: any[] = [];
  orderById: any[] = [];
  orderByTag: any[] = [];
  wherePedro: any[] = [];
  select: any[] = [];
  groupByTags: any = [];
  firstOrDefault: any = [];
  aggregate: any[] = [];

  JorderByNome: string;
  JorderById: string;
  JorderByTag: string;
  JwherePedro: string;
  Jselect: string;
  JgroupByTags: string;
  JfirstOrDefault: string;
  Jaggregate: string;
  JtodasAsPessoas: string;

  ngOnInit(): void {
    this.LinqVersusTypeScript();
  }

  LinqVersusTypeScript(): void {
    debugger;
    const todasAsPessoas: Array<People> = [
      {
        id: '1',
        name: 'João',
        tags: 'esperto'
      },
      {
        id: '2',
        name: 'Pedro',
        tags: 'brincalhão'
      },
      {
        id: '3',
        name: 'Marcelo',
        tags: 'brincalhão'
      },
      {
        id: '4',
        name: 'Jairo',
        tags: 'esperto'
      }
    ];
    this.JtodasAsPessoas = JSON.stringify(todasAsPessoas);

    this.orderByNome = todasAsPessoas.sort((x, y) =>
      x.name > y.name ? 1 : -1
    );
    this.JorderByNome = JSON.stringify(this.orderByNome);
    console.log('orderByNome = ', this.orderByNome);

    this.orderById = todasAsPessoas.sort((x, y) => (x.id > y.id ? 1 : -1));
    this.JorderById = JSON.stringify(this.orderById);
    console.log('orderById = ', this.orderById);

    this.orderByTag = todasAsPessoas.sort((x, y) => (x.tags > y.tags ? 1 : -1));
    this.JorderByTag = JSON.stringify(this.orderByTag);
    console.log('orderByTag = ', this.orderByTag);

    this.wherePedro = todasAsPessoas.filter(x => x.name == 'Pedro');
    this.JwherePedro = JSON.stringify(this.wherePedro);
    console.log('wherePedro = ', this.wherePedro);

    this.groupByTags = todasAsPessoas.reduce((g: any, people: People) => {
      g[people.tags] == g[people.tags] || [];
      g[people.tags].push(people);
      return g;
    });
    this.JgroupByTags = JSON.stringify(this.groupByTags);
    console.log('groupByTags = ', this.groupByTags);

    this.firstOrDefault = todasAsPessoas.find(x => x.name == 'Pedro');
    this.JfirstOrDefault = JSON.stringify(this.firstOrDefault);
    console.log('firstOrDefault = ', this.firstOrDefault);

    this.aggregate = todasAsPessoas
      .map(x => x.name)
      .reduce((g: any, name: string) => {
        g += name;
        return g;
      }, '');
    this.Jaggregate = JSON.stringify(this.aggregate);

    this.select = todasAsPessoas.map(x => {
      ' LineRecord: (' + x.id + ',  ' + x.name + ' ) ';
    });
    this.Jselect = JSON.stringify(this.select);
    console.log('select = ', this.select);

    console.log('firstOrDefault = ', this.aggregate);
  }
}
