import { Component, OnInit } from "@angular/core";
import icMail from "@iconify/icons-ic/twotone-mail";
import icPhone from "@iconify/icons-ic/twotone-phone";
import { fadeInUp400ms } from "../../../../../@vex/animations/fade-in-up.animation";
//data
import { Observable, ReplaySubject } from "rxjs";
import { map } from "rxjs/operators";

import { Contrato } from "src/app/models/contratoalquiler.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { VerContratoGQL } from "../graphql/VerContratoGQL";
import { DatePipe } from "@angular/common";
import { Cliente } from "src/app/models/cliente.model";
import { EstadoActual } from 'src/app/models/estadoactual.model';

@Component({
  selector: "vex-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"],
  animations: [fadeInUp400ms],
})
export class InvoiceComponent implements OnInit {
  subject$: ReplaySubject<Contrato> = new ReplaySubject<Contrato>(1);
  icMail = icMail;
  icPhone = icPhone;
  data: Observable<Contrato>;
  contrato = {} as Contrato;

  constructor(
    private snackbar: MatSnackBar,
    private verContratoGQL: VerContratoGQL,
    private datePipe: DatePipe
  ) {}

  getData() {
    return this.verContratoGQL.mutate({
      id: 10
    });
  }

  ngOnInit() {
    this.contrato.cliente = {} as Cliente;
    this.contrato.estado_actual = {} as EstadoActual;
    // this.contrato.detalle_pagos = {} as any;
    
    this.getData().subscribe(
      ({ data }) => {
        // console.log(data);
        this.contrato = data.contrato_alquiler_by_pk;
        console.log(this.contrato);
        // this.subject$.next(data);
        this.openSnackbar("Contrato Recuperado Exitosamente");
      },
      (error) => {
        console.log("Error al Recuperado el Contrato", error);
        this.openSnackbar("Error al Recuperado el Contrato");
      }
    );
  }

  openSnackbar(mensaje: string) {
    this.snackbar.open(mensaje, "cerrar", {
      duration: 3000,
      horizontalPosition: "right",
    });
  }
}
