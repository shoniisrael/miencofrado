(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9Gk2":function(e,o){o.__esModule=!0,o.default={body:'<path opacity=".3" d="M4 18h16V6H4v12zm7.5-11c2.49 0 4.5 2.01 4.5 4.5c0 .88-.26 1.69-.7 2.39l2.44 2.43l-1.42 1.42l-2.44-2.44c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7z" fill="currentColor"/><path d="M11.49 16c.88 0 1.7-.26 2.39-.7l2.44 2.44l1.42-1.42l-2.44-2.43c.44-.7.7-1.51.7-2.39C16 9.01 13.99 7 11.5 7S7 9.01 7 11.5S9.01 16 11.49 16zm.01-7a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" fill="currentColor"/>',width:24,height:24}},Abzj:function(e,o,c){"use strict";c.d(o,"a",(function(){return _}));var r=c("ofXK"),a=c("YUcS"),t=c("VX/1"),i=c("tyNb"),n=c("bTqV"),l=c("NFeN"),d=c("J0XA"),u=c("68Yx"),s=c("fXoL");let _=(()=>{class e{}return e.\u0275mod=s.Pb({type:e}),e.\u0275inj=s.Ob({factory:function(o){return new(o||e)},imports:[[r.c,a.a,t.b,i.i,n.c,l.b,d.a,u.a]]}),e})()},Kb9X:function(e,o,c){"use strict";c.d(o,"a",(function(){return t}));var r=c("lTCR"),a=c.n(r);const t=a.a`
  query MyQuery {
    contrato_alquiler {
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
      id
      lugar_obra
      metros
      numero
      observacion
      area
      descripcion
      transporte_entrega
      transporte_devolucion
      fecha_inicio
      fecha_entrega
      devuelto
      pago_cancelado
      valor_total
      estado_actual {
        id
        descripcion
      }
    }
  }
`;a.a`
  query MyQuery {
    contrato_alquiler {
      cliente {
        nombre
        cedula
        direccion
        direccion2
        email
        id
        nombre2
        observacion
        telf1
        telf2
        telf3
      }
      detalle_alquilers {
        descripcion
        fecha_entrega
        fecha_inicio
        devuelto
        pago_cancelado
        articulo_alquilers {
          cantidad_devuelto
          cantidad_entregado
          articulo {
            nombre_producto
            codigo_producto
            costo_max_sugerido
            costo_min_sugerido
            id
          }
          detalle_id
          especificaciones_producto
          id
        }
        transporte_devolucion
        transporte_entrega
        valor_total
      }
      fecha
      id
      lugar_obra
      metros
      numero
      observacion
      area
      estado_actual {
        id
        descripcion
      }
    }
  }
`,a.a`
  query MyQuery {
    contrato_alquiler_by_pk(id: 10) {
      area
      cliente_id
      descripcion
      devuelto
      estado_id
      fecha_entrega
      fecha_inicio
      id
      lugar_obra
      metros
      numero
      observacion
      pago_cancelado
      transporte_devolucion
      transporte_entrega
      valor_total
    }
  }
`},MzEE:function(e,o){o.__esModule=!0,o.default={body:'<path opacity=".3" d="M19.21 12.04l-1.53-.11l-.3-1.5A5.484 5.484 0 0 0 12 6C9.94 6 8.08 7.14 7.12 8.96l-.5.95l-1.07.11A3.99 3.99 0 0 0 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3c0-1.55-1.22-2.86-2.79-2.96zM12 17l-4-4h2.55v-3h2.91v3H16l-4 4z" fill="currentColor"/><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4l4-4h-2.55z" fill="currentColor"/>',width:24,height:24}},XkRS:function(e,o,c){"use strict";c.d(o,"a",(function(){return a}));var r=c("lTCR");const a=c.n(r).a`
  query allPosts {
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
  }
`}}]);