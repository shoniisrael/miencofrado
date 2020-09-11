import { ChangeDetectorRef, Component, OnInit, Input } from "@angular/core";
import icGroup from "@iconify/icons-ic/twotone-group";
import icPageView from "@iconify/icons-ic/twotone-pageview";
import icCloudOff from "@iconify/icons-ic/twotone-cloud-off";
import icTimer from "@iconify/icons-ic/twotone-timer";
import { defaultChartOptions } from "../../../../@vex/utils/default-chart-options";
// import { Order, tableSalesData } from "../../../static-data/table-sales-data";
import { TableColumn } from "../../../../@vex/interfaces/table-column.interface";
import icMoreVert from "@iconify/icons-ic/twotone-more-vert";

import { Observable, ReplaySubject } from "rxjs";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { filter } from "rxjs/operators";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { map } from "rxjs/operators";

//Modelo
import { Cliente } from "src/app/models/cliente.model";
import { queryGetClientes } from "src/app/services/clientes";
import { DeleteClienteGQL } from "../../apps/clientes/graphql/DeleteClienteGQL";
import { CustomerCreateUpdateComponent } from "../../apps/clientes/customer-create-update/customer-create-update.component";
import { MatTableDataSource } from "@angular/material/table";

//Modelo
// import { CustomerCreateUpdateComponent } from "./customer-create-update/customer-create-update.component";xdxd
import { Contrato } from "src/app/models/contratoalquiler.model";
import { queryGetContratos } from "src/app/services/contratos";
import { DeleteContratoGQL } from "../../apps/contratos/graphql/DeleteContratoGQL";
import { isNull } from "util";

export type Query = {
  cliente: Cliente[];
};
const GetClientes = queryGetClientes;

export type Query2 = {
  contrato_alquiler: Contrato[];
};
const GetContratos = queryGetContratos;

@Component({
  selector: "vex-dashboard-analytics",
  templateUrl: "./dashboard-analytics.component.html",
  styleUrls: ["./dashboard-analytics.component.scss"],
})
export class DashboardAnalyticsComponent implements OnInit {
  //clientes
  subject$: ReplaySubject<Cliente[]> = new ReplaySubject<Cliente[]>(1);
  data$: Observable<Cliente[]> = this.subject$.asObservable();
  data: Observable<Cliente[]>;
  customers: Cliente[];
  numClientes: number;

  //contratos
  subject2$: ReplaySubject<Contrato[]> = new ReplaySubject<Contrato[]>(1);
  data2$: Observable<Contrato[]> = this.subject2$.asObservable();
  data2: Observable<Contrato[]>;
  customers2: Contrato[];
  numContratos: number;

  // @Input()
  tableColumns: TableColumn<Contrato>[] = [
    { label: "# NUMERO", property: "numero", type: "text", visible: true },   
    {
      label: "LUGAR OBRA",
      property: "lugar_obra",
      type: "text",
      visible: true,
    }   
    
  ];

  //estadisticas
  metrosAlquilados: number;
  valorTotal: number;
  porCobrar: number;
  porDevolver: number;

  dataSource: MatTableDataSource<Cliente> | null;

  // tableColumns: TableColumn<Order>[] = [
  //   {
  //     label: "",
  //     property: "status",
  //     type: "badge",
  //   },
  //   {
  //     label: "PRODUCT",
  //     property: "name",
  //     type: "text",
  //   },
  //   {
  //     label: "$ PRICE",
  //     property: "price",
  //     type: "text",
  //     cssClasses: ["font-medium"],
  //   },
  //   {
  //     label: "DATE",
  //     property: "timestamp",
  //     type: "text",
  //     cssClasses: ["text-secondary"],
  //   },
  // ];

  tableData: Contrato[];

  series: ApexAxisChartSeries = [
    {
      name: "Subscribers",
      data: [28, 40, 36, 0, 52, 38, 60, 55, 67, 33, 89, 44],
    },
  ];

  userSessionsSeries: ApexAxisChartSeries = [
    {
      name: "Users",
      data: [10, 50, 26, 50, 38, 60, 50, 25, 61, 80, 40, 60],
    },
    {
      name: "Sessions",
      data: [5, 21, 42, 70, 41, 20, 35, 50, 10, 15, 30, 50],
    },
  ];

  salesSeries: ApexAxisChartSeries = [
    {
      name: "Sales",
      data: [28, 40, 36, 0, 52, 38, 60, 55, 99, 54, 38, 87],
    },
  ];

  pageViewsSeries: ApexAxisChartSeries = [
    {
      name: "Page Views",
      data: [405, 800, 200, 600, 105, 788, 600, 204],
    },
  ];

  uniqueUsersSeries: ApexAxisChartSeries = [
    {
      name: "Unique Users",
      data: [356, 806, 600, 754, 432, 854, 555, 1004],
    },
  ];

  uniqueUsersOptions = defaultChartOptions({
    chart: {
      type: "area",
      height: 100,
    },
    colors: ["#ff9800"],
  });

  icGroup = icGroup;
  icPageView = icPageView;
  icCloudOff = icCloudOff;
  icTimer = icTimer;
  icMoreVert = icMoreVert;

  constructor(private cd: ChangeDetectorRef, private apollo: Apollo) {}

  getData() {
    this.data = this.apollo
      .watchQuery<Query>({ query: GetClientes })
      .valueChanges.pipe(map(({ data }) => data.cliente));
    return this.data;
  }

  getData2() {
    this.data2 = this.apollo
      .watchQuery<Query2>({ query: GetContratos })
      .valueChanges.pipe(map(({ data }) => data.contrato_alquiler));
    return this.data2;
  }

  ngOnInit() {
    this.numClientes = 0;
    this.numContratos = 0;

    this.getData().subscribe((customers) => {
      this.subject$.next(customers);
      this.numClientes = customers.length;
    });

    this.getData2().subscribe((customers2) => {
      this.subject2$.next(customers2);
      this.numContratos = customers2.length;
      this.tableData = customers2;
      console.log(this.tableData);
      this.metrosAlquilados = customers2.reduce((sum, value) => {
        let y: number = +value.metros;
        if (!isNaN(y)) {
          sum = sum + y;
        }
        return sum;
      }, 0);
      this.valorTotal = customers2.reduce((sum, value) => {
        if (value.valor_total !== null) {
          let aux: string = value.valor_total.toString();
          aux = aux.substr(1);
          let y: number = +aux;
          if (!isNaN(y)) {
            sum = sum + y;
          }
        }

        return sum;
      }, 0);
      this.porCobrar = customers2.reduce((sum, value) => {
        if (!value.pago_cancelado) {
          sum = sum + 1;
        }

        return sum;
      }, 0);
      this.porDevolver = customers2.reduce((sum, value) => {
        if (!value.devuelto) {
          sum = sum + 1;
        }

        return sum;
      }, 0);
    });
  }
}
