(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{qLM4:function(t,o,c){"use strict";c.r(o),c.d(o,"InvoiceModule",(function(){return A}));var n=c("ofXK"),e=c("tyNb"),a=c("6qw8"),b=c.n(a),i=c("YA1h"),r=c.n(i),d=c("y3Ys"),l=c("jtHE"),s=c("fXoL"),p=c("dNgK"),u=c("/IUn"),X=c("lTCR"),W=c.n(X);let f=(()=>{class t extends u.d{constructor(){super(...arguments),this.document=W.a`
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
  `}}return t.\u0275fac=function(o){return v(o||t)},t.\u0275prov=s.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const v=s.Zb(f);var g=c("XiUz"),m=c("VX/1");function h(t,o){if(1&t&&(s.Xb(0,"span"),s.Gc(1),s.Wb()),2&t){const t=s.jc().$implicit;s.Fb(1),s.Ic(" +",t.cantidad_entregado," ")}}function G(t,o){if(1&t&&(s.Xb(0,"span"),s.Gc(1),s.Wb()),2&t){const t=s.jc().$implicit;s.Fb(1),s.Ic(" -",t.cantidad_devuelto," ")}}function F(t,o){if(1&t&&(s.Xb(0,"label"),s.Ec(1,h,2,1,"span",23),s.Ec(2,G,2,1,"span",23),s.Wb()),2&t){const t=o.$implicit;s.Fb(1),s.oc("ngIf",0!=t.cantidad_entregado),s.Fb(1),s.oc("ngIf",0!=t.cantidad_devuelto)}}function _(t,o){if(1&t&&(s.Xb(0,"tr"),s.Xb(1,"td",27),s.Gc(2),s.Wb(),s.Xb(3,"td",27),s.Ec(4,F,3,2,"label",21),s.Wb(),s.Xb(5,"td",27),s.Gc(6),s.Wb(),s.Xb(7,"td",27),s.Gc(8),s.Wb(),s.Wb()),2&t){const t=o.$implicit;s.Fb(2),s.Ic(" ",t.articulo.nombre_producto," "),s.Fb(2),s.oc("ngForOf",t.historial_devolucions),s.Fb(2),s.Ic(" ",t.cantidad_entregado," "),s.Fb(2),s.Ic(" ",t.cantidad_devuelto," ")}}function E(t,o){1&t&&(s.Xb(0,"span"),s.Gc(1,"SI"),s.Wb())}function I(t,o){1&t&&(s.Xb(0,"span"),s.Gc(1,"No"),s.Wb())}function y(t,o){1&t&&(s.Xb(0,"span"),s.Gc(1,"SI"),s.Wb())}function O(t,o){1&t&&(s.Xb(0,"span"),s.Gc(1,"No"),s.Wb())}function x(t,o){if(1&t&&(s.Xb(0,"label"),s.Gc(1),s.Wb()),2&t){const t=o.$implicit;s.Fb(1),s.Ic(" + ",t.valor," ")}}const L=[{path:"",component:(()=>{class t{constructor(t,o,c,n,e){this.snackbar=t,this.verContratoGQL=o,this.datePipe=c,this.route=n,this.router=e,this.subject$=new l.a(1),this.icMail=b.a,this.icPhone=r.a,this.contrato={},this.id=1,this.route.params.subscribe(t=>{console.log(t.id),this.id=t.id}),this.contrato.cliente={},this.contrato.estado_actual={},this.getData().subscribe(({data:t})=>{this.contrato=t.contrato_alquiler_by_pk,console.log(this.contrato),this.openSnackbar("Contrato Recuperado Exitosamente")},t=>{console.log("Error al Recuperado el Contrato",t),this.openSnackbar("Error al Recuperado el Contrato")})}getData(){return this.verContratoGQL.mutate({id:this.id})}ngOnInit(){}openSnackbar(t){this.snackbar.open(t,"cerrar",{duration:3e3,horizontalPosition:"right"})}}return t.\u0275fac=function(o){return new(o||t)(s.Rb(p.a),s.Rb(f),s.Rb(n.e),s.Rb(e.a),s.Rb(e.f))},t.\u0275cmp=s.Lb({type:t,selectors:[["vex-invoice"]],decls:113,vars:33,consts:[[1,"p-gutter","container"],[1,"card","p-16"],["fxLayout","row"],["fxFlex","50%"],["src","assets/img/logo.png",1,"h-40"],[1,"mt-12"],[1,"mt-0"],[1,"title","m-0"],[1,"text-secondary"],[1,"m-0"],["fxFlex","50%","fxLayout","column","fxLayoutAlign","start end",1,"text-right","body-1"],[1,"display-2","m-0"],[1,"mt-6"],[1,"text-secondary","body-2"],[1,"text-left","pl-4"],[1,"body-2","text-secondary","mt-0"],["inline","true","size","1.25em",1,"mr-2",3,"icon"],[1,"m-0","mt-3"],["fxFlex","auto",1,"card"],[1,"table","w-full","mt-24"],[1,"body-2","text-secondary"],[4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center",1,"px-6","py-4","border-b"],[4,"ngIf"],[1,"subheading-2","font-medium","pr-6"],[1,"text-secondary","text-right"],[1,"pl-12"],[1,"py-6","border-b"]],template:function(t,o){1&t&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"div",2),s.Xb(3,"div",3),s.Sb(4,"img",4),s.Xb(5,"div",5),s.Xb(6,"h4",6),s.Gc(7," INFORMACION DEL CLIENTE "),s.Wb(),s.Xb(8,"h3",7),s.Gc(9),s.kc(10,"titlecase"),s.kc(11,"titlecase"),s.Wb(),s.Xb(12,"div",8),s.Xb(13,"p",9),s.Gc(14),s.Wb(),s.Xb(15,"p",9),s.Gc(16),s.Wb(),s.Xb(17,"p",9),s.Gc(18),s.Wb(),s.Xb(19,"p",9),s.Gc(20),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(21,"div",10),s.Xb(22,"h1",11),s.Gc(23),s.Wb(),s.Xb(24,"table",12),s.Xb(25,"tbody"),s.Xb(26,"tr"),s.Xb(27,"td",13),s.Gc(28,"FECHA DE ALQUILER"),s.Wb(),s.Xb(29,"td",14),s.Gc(30),s.Wb(),s.Wb(),s.Xb(31,"tr"),s.Xb(32,"td",13),s.Gc(33,"FECHA DE ENTREGA"),s.Wb(),s.Xb(34,"td",14),s.Gc(35),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(36,"div",5),s.Xb(37,"h4",15),s.Gc(38,"LOSAS Y ENCOFRADOS"),s.Wb(),s.Xb(39,"h3",7),s.Gc(40,"EL PROGRESO"),s.Wb(),s.Xb(41,"div",8),s.Xb(42,"p",9),s.Gc(43,"Panamericana Norte Km 4 - El Pisque"),s.Wb(),s.Xb(44,"p",9),s.Sb(45,"ic-icon",16),s.Xb(46,"span"),s.Gc(47,"0980 671 071"),s.Wb(),s.Gc(48," - "),s.Xb(49,"span"),s.Gc(50,"0959 583 032"),s.Wb(),s.Wb(),s.Xb(51,"p",9),s.Sb(52,"ic-icon",16),s.Xb(53,"span"),s.Gc(54,"03-2 865 599"),s.Wb(),s.Wb(),s.Xb(55,"p",17),s.Sb(56,"ic-icon",16),s.Xb(57,"span"),s.Gc(58,"ferreteria_elprogreso@gmail.com"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(59,"div",2),s.Xb(60,"div",18),s.Xb(61,"table",19),s.Xb(62,"thead"),s.Xb(63,"tr"),s.Xb(64,"td",20),s.Gc(65,"PRODUCTO O SERVICIO"),s.Wb(),s.Xb(66,"td",20),s.Gc(67,"HISTORIAL"),s.Wb(),s.Xb(68,"td",20),s.Gc(69,"ENTREGADO"),s.Wb(),s.Xb(70,"td",20),s.Gc(71,"DEVUELTO"),s.Wb(),s.Wb(),s.Wb(),s.Xb(72,"tbody"),s.Ec(73,_,9,4,"tr",21),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(74,"div",2),s.Xb(75,"div",3),s.Xb(76,"div",5),s.Xb(77,"div",18),s.Xb(78,"div",22),s.Xb(79,"h2",7),s.Gc(80,"DETALLES"),s.Wb(),s.Wb(),s.Xb(81,"div",8),s.Xb(82,"p",9),s.Gc(83,"Valor / m"),s.Xb(84,"sup"),s.Gc(85,"2"),s.Wb(),s.Gc(86),s.Wb(),s.Xb(87,"p",9),s.Gc(88),s.Wb(),s.Xb(89,"p",9),s.Gc(90," Flete Entrega: "),s.Ec(91,E,2,0,"span",23),s.Ec(92,I,2,0,"span",23),s.Wb(),s.Xb(93,"p",9),s.Gc(94," Flete Devolucion: "),s.Ec(95,y,2,0,"span",23),s.Ec(96,O,2,0,"span",23),s.Wb(),s.Xb(97,"p",9),s.Gc(98),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(99,"div",3),s.Xb(100,"div",5),s.Xb(101,"table",24),s.Xb(102,"tbody"),s.Xb(103,"tr"),s.Xb(104,"td",25),s.Gc(105,"ABONO"),s.Wb(),s.Xb(106,"td",26),s.Ec(107,x,2,1,"label",21),s.Wb(),s.Wb(),s.Xb(108,"tr"),s.Xb(109,"td",25),s.Gc(110,"TOTAL"),s.Wb(),s.Xb(111,"td",26),s.Gc(112),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&t&&(s.Fb(1),s.oc("@fadeInUp",void 0),s.Fb(8),s.Jc(" ",s.lc(10,29,o.contrato.cliente.nombre)," ",s.lc(11,31,o.contrato.cliente.nombre2)," "),s.Fb(5),s.Ic("C\xe9dula: ",o.contrato.cliente.cedula,""),s.Fb(2),s.Jc(" Direcci\xf3n de la obra: ",o.contrato.cliente.direccion," - ",o.contrato.cliente.direccion2," "),s.Fb(2),s.Ic("Email: ",o.contrato.cliente.email,""),s.Fb(2),s.Kc(" Celular: ",o.contrato.cliente.telf1," - ",o.contrato.cliente.telf2," - ",o.contrato.cliente.telf3," "),s.Fb(3),s.Ic(" CONTRATO DE ALQUILER # ",o.contrato.numero," "),s.Fb(7),s.Hc(o.contrato.fecha_inicio),s.Fb(5),s.Hc(o.contrato.fecha_entrega),s.Fb(10),s.oc("icon",o.icPhone),s.Fb(7),s.oc("icon",o.icPhone),s.Fb(4),s.oc("icon",o.icMail),s.Fb(4),s.oc("@fadeInUp",void 0),s.Fb(13),s.oc("ngForOf",o.contrato.articulo_alquilers),s.Fb(4),s.oc("@fadeInUp",void 0),s.Fb(9),s.Ic(": ",o.contrato.metros,""),s.Fb(2),s.Jc(" Area: ",o.contrato.area," - ",o.contrato.cliente.direccion2," "),s.Fb(3),s.oc("ngIf",o.contrato.transporte_entrega),s.Fb(1),s.oc("ngIf",!o.contrato.transporte_entrega),s.Fb(3),s.oc("ngIf",o.contrato.transporte_devolucion),s.Fb(1),s.oc("ngIf",!o.contrato.transporte_devolucion),s.Fb(2),s.Ic(" Observaciones: ",o.contrato.observacion," "),s.Fb(9),s.oc("ngForOf",o.contrato.detalle_pagos),s.Fb(5),s.Ic(" ",o.contrato.valor_total," "))},directives:[g.c,g.a,g.b,m.a,n.m,n.n],pipes:[n.v],styles:["@media print{.p-gutter[_ngcontent-%COMP%]{padding:0!important}.card[_ngcontent-%COMP%]{box-shadow:none!important}}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:var(--padding);padding-right:var(--padding)}"],data:{animation:[d.a]}}),t})(),data:{toolbarShadowEnabled:!0,containerEnabled:!0}}];let C=(()=>{class t{}return t.\u0275mod=s.Pb({type:t}),t.\u0275inj=s.Ob({factory:function(o){return new(o||t)},imports:[[e.i.forChild(L)],e.i]}),t})();var R=c("YUcS");let A=(()=>{class t{}return t.\u0275mod=s.Pb({type:t}),t.\u0275inj=s.Ob({factory:function(o){return new(o||t)},imports:[[n.c,C,R.a,m.b]]}),t})()}}]);