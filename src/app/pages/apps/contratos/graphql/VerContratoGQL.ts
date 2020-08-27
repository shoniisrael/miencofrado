import { Injectable} from "@angular/core";
import {Query} from 'apollo-angular';
import gql from "graphql-tag";

import { Contrato } from 'src/app/models/contratoalquiler.model';

export interface Response {
  contrato: Contrato;
}

@Injectable({
  providedIn: "root",
})
export class VerContratoGQL extends Query<Response> {
  document = gql`
    query {
      contrato_alquiler_by_pk(id: 10) {
        area
        descripcion
        devuelto
        fecha_entrega
        fecha_inicio
        lugar_obra
        metros
        numero
        observacion
        pago_cancelado
        transporte_devolucion
        transporte_entrega
        valor_total
        articulo_alquilers {
          articulo {
            nombre_producto
          }
          cantidad_devuelto
          cantidad_entregado
          especificaciones_producto
        }
        cliente {
          cedula
          direccion
          direccion2
          email
          nombre
          nombre2
          observacion
          telf1
          telf2
          telf3
        }
        detalle_pagos {
          fecha
          observacion
          saldo
          valor
        }
        estado_actual {
          descripcion
        }
      }
    }
  `;
}
