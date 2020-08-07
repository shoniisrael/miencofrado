import { Component, OnInit } from "@angular/core";
import icMail from "@iconify/icons-ic/twotone-mail";
import icPhone from "@iconify/icons-ic/twotone-phone";
import { fadeInUp400ms } from "../../../../../@vex/animations/fade-in-up.animation";
import { Observable, ReplaySubject } from "rxjs";

import { Contrato } from "src/app/models/contratoalquiler.model";
import { map } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";
import { VerContratoGQL } from "../graphql/VerContratoGQL";
import { DatePipe } from "@angular/common";

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
  constructor(
    private snackbar: MatSnackBar,
    private verContratoGQL: VerContratoGQL,
    private datePipe: DatePipe
  ) {}

  // contrato_alquiler_by_pk:
  // area: "28"
  // articulo_alquilers: []
  // cliente: {
    //     cedula: "111111"
    //     direccion: "ambato"
    //     direccion2: "ambato"
    //     email: "correo@hasjnd"
    //     nombre: "vale"
    //     nombre2: "fernanda"
    //     observacion: null
    //     telf1: "55565"
    //     telf2: null
    //     telf3: null    
    // }
  // descripcion: null
  // detalle_pagos: [
    //     fecha 
    //     observacion 
    //     saldo 
    //     valor
  // ]
  // devuelto: null
  // estado_actual: {descripcion: "INICIADO"}
  // fecha_entrega: null
  // fecha_inicio: null
  // lugar_obra: "mi casa"
  // metros: "26"
  // numero: 5
  // observacion: "ninguna"
  // pago_cancelado: null
  // transporte_devolucion: null
  // transporte_entrega: null
  // valor_total: null

  getData() {
    this.verContratoGQL
      .mutate({
        // articulo_alquilers: this.verticalContratoFormGroup.value
      })
      .subscribe(
        ({ data }) => {
          console.log(data);
          // this.subject$.next(data);
          this.openSnackbar("Contrato Recuperado Exitosamente");
        },
        (error) => {
          console.log("Error al Recuperado el Contrato", error);
          this.openSnackbar("Error al Recuperado el Contrato");
        }
      );
  }

  ngOnInit() {
    this.getData();
  }

  openSnackbar(mensaje: string) {
    this.snackbar.open(mensaje, "cerrar", {
      duration: 3000,
      horizontalPosition: "right",
    });
  }
}
