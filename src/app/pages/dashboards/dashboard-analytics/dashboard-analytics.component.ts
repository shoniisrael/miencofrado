import { ChangeDetectorRef, Component, OnInit, Input } from "@angular/core";
import icGroup from "@iconify/icons-ic/twotone-group";
import icPageView from "@iconify/icons-ic/twotone-pageview";
import icCloudOff from "@iconify/icons-ic/twotone-cloud-off";
import icTimer from "@iconify/icons-ic/twotone-timer";
import { defaultChartOptions } from "../../../../@vex/utils/default-chart-options";
import { Order, tableSalesData } from "../../../static-data/table-sales-data";
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

export type Query = {
  cliente: Cliente[];
};
const GetClientes = queryGetClientes;

@Component({
  selector: "vex-dashboard-analytics",
  templateUrl: "./dashboard-analytics.component.html",
  styleUrls: ["./dashboard-analytics.component.scss"],
})
export class DashboardAnalyticsComponent implements OnInit {
  subject$: ReplaySubject<Cliente[]> = new ReplaySubject<Cliente[]>(1);
  data$: Observable<Cliente[]> = this.subject$.asObservable();
  data: Observable<Cliente[]>;
  customers: Cliente[];

  numClientes: number;

  @Input()
  columns: TableColumn<Cliente>[] = [
    {
      label: "Checkbox",
      property: "checkbox",
      type: "checkbox",
      visible: true,
    },
    { label: "cedula", property: "cedula", type: "text", visible: true },
    { label: "nombre", property: "nombre", type: "text", visible: true },
    { label: "nombre2", property: "nombre2", type: "text", visible: true },
    { label: "email", property: "email", type: "text", visible: false },
    { label: "telf1", property: "telf1", type: "text", visible: true },
    { label: "telf2", property: "telf2", type: "text", visible: true },
    { label: "telf3", property: "telf3", type: "text", visible: false },
    { label: "direccion", property: "direccion", type: "text", visible: true },
    {
      label: "direccion2",
      property: "direccion2",
      type: "text",
      visible: false,
    },
    {
      label: "observacion",
      property: "observacion",
      type: "text",
      visible: true,
    },
    { label: "Actions", property: "actions", type: "button", visible: true },
  ];

  dataSource: MatTableDataSource<Cliente> | null;

  tableColumns: TableColumn<Order>[] = [
    {
      label: "",
      property: "status",
      type: "badge",
    },
    {
      label: "PRODUCT",
      property: "name",
      type: "text",
    },
    {
      label: "$ PRICE",
      property: "price",
      type: "text",
      cssClasses: ["font-medium"],
    },
    {
      label: "DATE",
      property: "timestamp",
      type: "text",
      cssClasses: ["text-secondary"],
    },
  ];
  tableData = tableSalesData;

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

  ngOnInit() {
    this.numClientes = 0;
    this.getData().subscribe((customers) => {
      this.subject$.next(customers);
      // console.log(customers);
      // console.log(customers.length);
      this.numClientes = customers.length;
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter<Cliente[]>(Boolean)).subscribe((customers) => {
      this.customers = customers;
      this.dataSource.data = customers;
    });

    // setTimeout(() => {
    // const temp = [
    //   {
    //     name: "Subscribers",
    //     data: [55, 213, 55, 0, 213, 55, 33, 55],
    //   },
    //   {
    //     name: "",
    //   },
    // ];
    // }, 3000);
  }
}
