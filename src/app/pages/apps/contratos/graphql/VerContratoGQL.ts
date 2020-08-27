import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

import { Contrato } from "src/app/models/contratoalquiler.model";
import { Observable } from "apollo-link";

export interface Response {
  contrato_alquiler_by_pk: Contrato;
}

@Injectable({
  providedIn: "root",
})
export class VerContratoGQL extends Mutation<Response> {
  document = gql`
    query ( $id: Int!){     
      contrato_alquiler_by_pk(id: $id) {
        id
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
          id
          articulo {
            id
            nombre_producto
          }
          historial_devolucions {
            id
            cantidad_devuelto
            cantidad_entregado
            cantidad
            fecha
          }
          cantidad_devuelto
          cantidad_entregado
          especificaciones_producto
        }
        cliente {
          id
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
          id
          fecha
          observacion
          saldo
          valor
        }
        detalle_pagos {
          id
          fecha
          observacion
          saldo
          valor
        }
        estado_actual {
          id
          descripcion
        }
      }
    }
  `;
}
