(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0I5b":function(t,e){e.__esModule=!0,e.default={body:'<path d="M15 11V5l-3-3l-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" fill="currentColor"/>',width:24,height:24}},"5Az/":function(t,e,i){"use strict";i.r(e),i.d(e,"AioTableModule",(function(){return ue}));var o=i("ofXK"),c=i("YUcS"),n=i("M9IT"),r=i("+0xr"),a=i("Dh3D"),l=i("bSwM"),s=i("NFeN"),b=i("bTqV"),u=i("STbY"),m=i("3Pt+"),d=i("Qu3c"),f=i("d3UM"),h=i("jaxi"),p=i("7lCJ"),g=i("68Yx"),v=i("J0XA"),y=i("VX/1"),C=i("tyNb"),x=i("mrSG"),S=i("kmnG"),I=i("0EQZ"),F=i("y3Ys"),X=i("UOrl"),W=i("pN9m"),k=i.n(W),$=i("e3EN"),w=i.n($),M=i("sF+I"),E=i.n(M),z=i("7wwx"),G=i.n(z),j=i("+4LO"),L=i.n(j),A=i("SqwC"),D=i.n(A),H=i("nlA0"),P=i.n(H),N=i("YA1h"),V=i.n(N),R=i("6qw8"),O=i.n(R),T=i("ZkIM"),_=i.n(T),U=i("jtHE"),Q=i("VfN6"),Y=i("pLZG"),q=i("lJxs");class B{constructor(t){this.id=t.id,this.cedula=t.cedula,this.direccion=t.direccion,this.direccion2=t.direccion2,this.email=t.email,this.nombre=t.nombre,this.nombre2=t.nombre2,this.observacion=t.observacion,this.telf1=t.telf1,this.telf2=t.telf2,this.telf3=t.telf3}get name(){let t="";return this.nombre&&this.nombre2?t=this.nombre+" "+this.nombre2:this.nombre?t=this.nombre:this.nombre2&&(t=this.nombre2),t}set name(t){}get address(){return`${this.direccion}, ${this.direccion2}`}set address(t){}}var Z=i("lTCR"),J=i.n(Z);const K=J.a`
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
`;var tt=i("0IaG"),et=i("+Chm"),it=i.n(et),ot=i("5mnX"),ct=i.n(ot),nt=i("yHIK"),rt=i.n(nt),at=i("MzEE"),lt=i.n(at),st=i("KaaH"),bt=i.n(st),ut=i("kSvQ"),mt=i.n(ut),dt=i("0I5b"),ft=i.n(dt),ht=i("EPGw"),pt=i.n(ht),gt=i("fXoL"),vt=i("dNgK"),yt=i("/IUn");let Ct=(()=>{class t extends yt.d{constructor(){super(...arguments),this.document=J.a`
    mutation MyMutation(
      $cedula: String!
      $direccion: String!
      $direccion2: String!
      $email: String!
      $nombre: String!
      $nombre2: String!
      $observacion: String!
      $telf1: String!
      $telf2: String!
      $telf3: String!
    ) {
      insert_cliente_one(
        object: {
          cedula: $cedula,
          direccion: $direccion ,
          direccion2: $direccion2 ,
          email: $email ,
          nombre: $nombre ,
          nombre2: $nombre2 ,
          observacion: $observacion,
          telf1: $telf1,
          telf2: $telf2,
          telf3: $telf3
        }
      ) {
        id
      }
    }
  `}}return t.\u0275fac=function(e){return xt(e||t)},t.\u0275prov=gt.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const xt=gt.Zb(Ct);let St=(()=>{class t extends yt.d{constructor(){super(...arguments),this.document=J.a`
    mutation MyMutation(
      $id: Int!
      $cedula: String!
      $direccion: String!
      $direccion2: String!
      $email: String!
      $nombre: String!
      $nombre2: String!
      $observacion: String!
      $telf1: String!
      $telf2: String!
      $telf3: String!
    ) {
      update_cliente(
        _set: {
          cedula: $cedula
          direccion: $direccion
          direccion2: $direccion2
          email: $email
          nombre: $nombre
          nombre2: $nombre2
          observacion: $observacion
          telf1: $telf1
          telf2: $telf2
          telf3: $telf3
        }
        where: { id: { _eq: $id } }
      ) {
        returning {
          id
        }
      }
    }
  `}}return t.\u0275fac=function(e){return It(e||t)},t.\u0275prov=gt.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const It=gt.Zb(St);var Ft=i("XiUz"),Xt=i("f0Cb"),Wt=i("qFsG");function kt(t,e){if(1&t&&(gt.Xb(0,"h2",24),gt.Gc(1),gt.Wb()),2&t){const t=gt.jc();gt.Fb(1),gt.Ic(" ",t.form.get("nombre").value+" "+t.form.get("nombre2").value," ")}}function $t(t,e){1&t&&(gt.Xb(0,"h2",24),gt.Gc(1," Nuevo Cliente "),gt.Wb())}function wt(t,e){1&t&&(gt.Xb(0,"button",25),gt.Gc(1," CREAR CLIENTE "),gt.Wb())}function Mt(t,e){1&t&&(gt.Xb(0,"button",25),gt.Gc(1," GUARDAR CAMBIOS "),gt.Wb())}let Et=(()=>{class t{constructor(t,e,i,o,c,n){this.defaults=t,this.dialogRef=e,this.fb=i,this.snackBar=o,this.createClienteGQL=c,this.updateClienteGQL=n,this.mode="create",this.icMoreVert=it.a,this.icClose=ct.a,this.icPrint=rt.a,this.icDownload=lt.a,this.icDelete=w.a,this.icPerson=bt.a,this.icMyLocation=mt.a,this.icLocationCity=ft.a,this.icEditLocation=pt.a,this.icPhone=V.a}ngOnInit(){this.defaults?this.mode="update":this.defaults={},this.form=this.fb.group({id:[t.id++],cedula:[this.defaults.cedula||""],direccion:[this.defaults.direccion||""],direccion2:[this.defaults.direccion2||""],email:[this.defaults.email||""],nombre:[this.defaults.nombre||""],nombre2:[this.defaults.nombre2||""],observacion:[this.defaults.observacion||""],telf1:[this.defaults.telf1||""],telf2:[this.defaults.telf2||""],telf3:[this.defaults.telf3||""]})}save(){"create"===this.mode?this.createCustomer():"update"===this.mode&&this.updateCustomer()}onlyNumberKey(t){return 8==t.charCode||0==t.charCode?null:t.charCode>=48&&t.charCode<=57}openSnackbar(t){this.snackBar.open(t,"cerrar",{duration:3e3,horizontalPosition:"right"})}validateForm(t){if(this.validarCedula(t.cedula)){if(t.nombre.length>0&&null!=t.nombre&&null!=t.nombre)return!0;this.openSnackbar("Nombre no v\xe1lido")}return!1}createCustomer(){let t;t=this.form.value,this.validateForm(t)&&this.createClienteGQL.mutate({cedula:t.cedula,direccion:t.direccion,direccion2:t.direccion2,email:t.email,nombre:t.nombre,nombre2:t.nombre2,observacion:t.observacion,telf1:t.telf1,telf2:t.telf2,telf3:t.telf3}).subscribe(({})=>{this.openSnackbar("Cliente Guardado Exitosamente"),this.dialogRef.close(t)},t=>{console.log("Error al Guardar el cliente",t),this.openSnackbar("Error al Guardar el cliente")})}validarCedula(t){if(13==t.length&&"001"==t.substring(10,13)&&(t=t.substring(0,10)),10==t.length){let e=t.substring(0,2);if(parseInt(e)>=1&&parseInt(e)<=24){let e=parseInt(t.substring(9,10)),i=parseInt(t.substring(1,2))+parseInt(t.substring(3,4))+parseInt(t.substring(5,6))+parseInt(t.substring(7,8)),o=parseInt(t.substring(0,1));o*=2,o>9&&(o-=9);let c=parseInt(t.substring(2,3));c*=2,c>9&&(c-=9);let n=parseInt(t.substring(4,5));n*=2,n>9&&(n-=9);let r=parseInt(t.substring(6,7));r*=2,r>9&&(r-=9);let a=parseInt(t.substring(8,9));a*=2,a>9&&(a-=9);let l=i+(o+c+n+r+a),s=String(l).substring(0,1),b=10*(parseInt(s)+1)-l;if(10==b&&(b=0),b==e)return!0;this.openSnackbar("la cedula:"+t+" es incorrecta")}else this.openSnackbar("Esta cedula no pertenece a ninguna region")}else this.openSnackbar("A esa c\xe9dula le falta o le sobran n\xfameros ");return!1}updateCustomer(){let t;t=this.form.value,t.id=this.defaults.id,this.validateForm(t)&&this.updateClienteGQL.mutate({id:t.id,cedula:t.cedula,direccion:t.direccion,direccion2:t.direccion2,email:t.email,nombre:t.nombre,nombre2:t.nombre2,observacion:t.observacion,telf1:t.telf1,telf2:t.telf2,telf3:t.telf3}).subscribe(({})=>{this.openSnackbar("Cliente Guardado Exitosamente"),this.dialogRef.close(t)},t=>{console.log("Error al Guardar el cliente",t),this.openSnackbar("Error al Guardar el cliente")})}isCreateMode(){return"create"===this.mode}isUpdateMode(){return"update"===this.mode}}return t.id=100,t.\u0275fac=function(e){return new(e||t)(gt.Rb(tt.a),gt.Rb(tt.g),gt.Rb(m.d),gt.Rb(vt.a),gt.Rb(Ct),gt.Rb(St))},t.\u0275cmp=gt.Lb({type:t,selectors:[["vex-customer-create-update"]],decls:65,vars:15,consts:[[3,"formGroup","ngSubmit"],["fxLayout","row","fxLayoutAlign","start center","mat-dialog-title",""],["class","headline m-0","fxFlex","auto",4,"ngIf"],["mat-dialog-close","","mat-icon-button","","type","button",1,"text-secondary"],[3,"icIcon"],[1,"-mx-6","text-border"],["fxLayout","column"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap.gt-sm","24px"],["fxFlex","",1,"mt-6"],["cdkFocusInitial","","formControlName","nombre","matInput","","required",""],["matPrefix","",1,"mr-3",3,"icIcon"],["formControlName","nombre2","matInput",""],["fxFlex",""],["formControlName","cedula","matInput","","type","text","required","",3,"keypress"],["formControlName","email","matInput","","type","email"],["formControlName","telf1","matInput","","type","number"],["formControlName","telf2","matInput","","type","number"],["formControlName","telf3","matInput","","type","number"],["formControlName","direccion","matInput",""],["formControlName","direccion2","matInput",""],["formControlName","observacion","matInput",""],["align","end"],["mat-button","","mat-dialog-close","","type","button"],["color","primary","mat-button","","type","submit",4,"ngIf"],["fxFlex","auto",1,"headline","m-0"],["color","primary","mat-button","","type","submit"]],template:function(t,e){1&t&&(gt.Xb(0,"form",0),gt.fc("ngSubmit",(function(){return e.save()})),gt.Xb(1,"div",1),gt.Ec(2,kt,2,1,"h2",2),gt.Ec(3,$t,2,0,"h2",2),gt.Xb(4,"button",3),gt.Sb(5,"mat-icon",4),gt.Wb(),gt.Wb(),gt.Sb(6,"mat-divider",5),gt.Xb(7,"mat-dialog-content",6),gt.Xb(8,"div",7),gt.Xb(9,"mat-form-field",8),gt.Xb(10,"mat-label"),gt.Gc(11,"Nombre"),gt.Wb(),gt.Sb(12,"input",9),gt.Sb(13,"mat-icon",10),gt.Wb(),gt.Xb(14,"mat-form-field",8),gt.Xb(15,"mat-label"),gt.Gc(16,"Apellido"),gt.Wb(),gt.Sb(17,"input",11),gt.Sb(18,"mat-icon",10),gt.Wb(),gt.Wb(),gt.Xb(19,"div",7),gt.Xb(20,"mat-form-field",12),gt.Xb(21,"mat-label"),gt.Gc(22,"C\xe9dula"),gt.Wb(),gt.Xb(23,"input",13),gt.fc("keypress",(function(t){return e.onlyNumberKey(t)})),gt.Wb(),gt.Sb(24,"mat-icon",10),gt.Wb(),gt.Xb(25,"mat-form-field",12),gt.Xb(26,"mat-label"),gt.Gc(27,"Email"),gt.Wb(),gt.Sb(28,"input",14),gt.Sb(29,"mat-icon",10),gt.Wb(),gt.Wb(),gt.Xb(30,"div",7),gt.Xb(31,"mat-form-field",12),gt.Xb(32,"mat-label"),gt.Gc(33,"telf1"),gt.Wb(),gt.Sb(34,"input",15),gt.Sb(35,"mat-icon",10),gt.Wb(),gt.Xb(36,"mat-form-field",12),gt.Xb(37,"mat-label"),gt.Gc(38,"telf2"),gt.Wb(),gt.Sb(39,"input",16),gt.Sb(40,"mat-icon",10),gt.Wb(),gt.Xb(41,"mat-form-field",12),gt.Xb(42,"mat-label"),gt.Gc(43,"telf3"),gt.Wb(),gt.Sb(44,"input",17),gt.Sb(45,"mat-icon",10),gt.Wb(),gt.Wb(),gt.Xb(46,"mat-form-field"),gt.Xb(47,"mat-label"),gt.Gc(48,"Direccion"),gt.Wb(),gt.Sb(49,"input",18),gt.Sb(50,"mat-icon",10),gt.Wb(),gt.Xb(51,"mat-form-field"),gt.Xb(52,"mat-label"),gt.Gc(53,"Direccion 2"),gt.Wb(),gt.Sb(54,"input",19),gt.Sb(55,"mat-icon",10),gt.Wb(),gt.Xb(56,"mat-form-field"),gt.Xb(57,"mat-label"),gt.Gc(58,"Notas"),gt.Wb(),gt.Sb(59,"textarea",20),gt.Wb(),gt.Wb(),gt.Xb(60,"mat-dialog-actions",21),gt.Xb(61,"button",22),gt.Gc(62,"CANCELAR"),gt.Wb(),gt.Ec(63,wt,2,0,"button",23),gt.Ec(64,Mt,2,0,"button",23),gt.Wb(),gt.Wb()),2&t&&(gt.oc("formGroup",e.form),gt.Fb(2),gt.oc("ngIf",e.form.get("nombre").value||e.form.get("nombre2").value),gt.Fb(1),gt.oc("ngIf",!e.form.get("nombre").value&&!e.form.get("nombre2").value),gt.Fb(2),gt.oc("icIcon",e.icClose),gt.Fb(8),gt.oc("icIcon",e.icPerson),gt.Fb(5),gt.oc("icIcon",e.icPerson),gt.Fb(6),gt.oc("icIcon",e.icMyLocation),gt.Fb(5),gt.oc("icIcon",e.icLocationCity),gt.Fb(6),gt.oc("icIcon",e.icPhone),gt.Fb(5),gt.oc("icIcon",e.icPhone),gt.Fb(5),gt.oc("icIcon",e.icPhone),gt.Fb(5),gt.oc("icIcon",e.icEditLocation),gt.Fb(5),gt.oc("icIcon",e.icEditLocation),gt.Fb(8),gt.oc("ngIf",e.isCreateMode()),gt.Fb(1),gt.oc("ngIf",e.isUpdateMode()))},directives:[m.u,m.n,m.h,Ft.c,Ft.b,tt.h,o.n,b.b,tt.d,s.a,y.a,Xt.a,tt.e,Ft.d,S.c,Ft.a,S.g,m.c,Wt.b,m.m,m.g,m.s,S.h,m.q,tt.c],styles:[""]}),t})(),zt=(()=>{class t extends yt.d{constructor(){super(...arguments),this.document=J.a`
    mutation MyMutation($id: Int!) {
        delete_cliente_by_pk(id: $id) {
        id
      }
    }
  `}}return t.\u0275fac=function(e){return Gt(e||t)},t.\u0275prov=gt.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const Gt=gt.Zb(zt);var jt=i("ZuBe"),Lt=i("uwSD"),At=i("Z998"),Dt=i("C0s9"),Ht=i("znSr");function Pt(t,e){1&t&&(gt.Xb(0,"span"),gt.Gc(1,"Clientes"),gt.Wb())}function Nt(t,e){1&t&&(gt.Xb(0,"span"),gt.Gc(1,"s"),gt.Wb())}function Vt(t,e){1&t&&(gt.Xb(0,"span"),gt.Gc(1,"s"),gt.Wb())}function Rt(t,e){if(1&t&&(gt.Xb(0,"span"),gt.Gc(1),gt.Ec(2,Nt,2,0,"span",8),gt.Gc(3," seleccionado"),gt.Ec(4,Vt,2,0,"span",8),gt.Wb()),2&t){const t=gt.jc();gt.Fb(1),gt.Ic("",t.selection.selected.length," Cliente"),gt.Fb(1),gt.oc("ngIf",t.selection.selected.length>1),gt.Fb(2),gt.oc("ngIf",t.selection.selected.length>1)}}function Ot(t,e){if(1&t){const t=gt.Yb();gt.Xb(0,"div",36),gt.Xb(1,"button",37),gt.fc("click",(function(){gt.vc(t);const e=gt.jc();return e.deleteCustomers(e.selection.selected)})),gt.Sb(2,"mat-icon",14),gt.Wb(),gt.Wb()}if(2&t){const t=gt.jc();gt.Fb(2),gt.oc("icIcon",t.icDelete)}}function Tt(t,e){if(1&t){const t=gt.Yb();gt.Xb(0,"th",38),gt.Xb(1,"mat-checkbox",39),gt.fc("change",(function(e){gt.vc(t);const i=gt.jc();return e?i.masterToggle():null})),gt.Wb(),gt.Wb()}if(2&t){const t=gt.jc();gt.Fb(1),gt.oc("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())}}function _t(t,e){if(1&t){const t=gt.Yb();gt.Xb(0,"td",40),gt.Xb(1,"mat-checkbox",41),gt.fc("change",(function(i){gt.vc(t);const o=e.$implicit,c=gt.jc();return i?c.selection.toggle(o):null}))("click",(function(e){return gt.vc(t),e.stopPropagation()})),gt.Wb(),gt.Wb()}if(2&t){const t=e.$implicit,i=gt.jc();gt.Fb(1),gt.oc("checked",i.selection.isSelected(t))}}function Ut(t,e){if(1&t&&(gt.Xb(0,"th",46),gt.Gc(1),gt.Wb()),2&t){const t=gt.jc(2).$implicit;gt.Fb(1),gt.Ic(" ",t.label," ")}}function Qt(t,e){if(1&t&&(gt.Xb(0,"td",47),gt.Gc(1),gt.Wb()),2&t){const t=e.$implicit,i=gt.jc(2).$implicit;gt.oc("ngClass",i.cssClasses),gt.Fb(1),gt.Ic(" ",t[i.property]," ")}}function Yt(t,e){if(1&t&&(gt.Vb(0,43),gt.Ec(1,Ut,2,1,"th",44),gt.Ec(2,Qt,2,2,"td",45),gt.Ub()),2&t){const t=gt.jc().$implicit;gt.oc("matColumnDef",t.property)}}function qt(t,e){if(1&t&&(gt.Vb(0),gt.Ec(1,Yt,3,1,"ng-container",42),gt.Ub()),2&t){const t=e.$implicit;gt.Fb(1),gt.oc("ngIf","text"===t.type)}}function Bt(t,e){1&t&&gt.Sb(0,"th",48)}function Zt(t,e){if(1&t){const t=gt.Yb();gt.Xb(0,"td",49),gt.Xb(1,"div",50),gt.Xb(2,"a",51),gt.fc("click",(function(e){return gt.vc(t),e.stopPropagation()})),gt.Sb(3,"mat-icon",52),gt.Wb(),gt.Xb(4,"a",53),gt.fc("click",(function(e){return gt.vc(t),e.stopPropagation()})),gt.Sb(5,"mat-icon",52),gt.Wb(),gt.Xb(6,"a",53),gt.fc("click",(function(e){return gt.vc(t),e.stopPropagation()})),gt.Sb(7,"mat-icon",52),gt.Wb(),gt.Wb(),gt.Wb()}if(2&t){const t=gt.jc();gt.Fb(3),gt.oc("icIcon",t.icPhone),gt.Fb(2),gt.oc("icIcon",t.icMail),gt.Fb(2),gt.oc("icIcon",t.icMap)}}function Jt(t,e){1&t&&gt.Sb(0,"th",48)}const Kt=function(t){return{customer:t}};function te(t,e){if(1&t){const t=gt.Yb();gt.Xb(0,"td",54),gt.Xb(1,"button",55),gt.fc("click",(function(e){return gt.vc(t),e.stopPropagation()})),gt.Sb(2,"mat-icon",14),gt.Wb(),gt.Wb()}if(2&t){const t=e.$implicit,i=gt.jc(),o=gt.tc(42);gt.Fb(1),gt.oc("matMenuTriggerData",gt.qc(3,Kt,t))("matMenuTriggerFor",o),gt.Fb(1),gt.oc("icIcon",i.icMoreHoriz)}}function ee(t,e){1&t&&gt.Sb(0,"tr",56)}function ie(t,e){if(1&t){const t=gt.Yb();gt.Xb(0,"tr",57),gt.fc("click",(function(){gt.vc(t);const i=e.$implicit;return gt.jc().updateCustomer(i)})),gt.Wb()}2&t&&gt.oc("@fadeInUp",void 0)}function oe(t,e){if(1&t){const t=gt.Yb();gt.Xb(0,"button",58),gt.fc("click",(function(i){gt.vc(t);const o=e.$implicit;return gt.jc().toggleColumnVisibility(o,i)})),gt.Xb(1,"mat-checkbox",59),gt.fc("click",(function(e){return gt.vc(t),e.stopPropagation()}))("ngModelChange",(function(i){return gt.vc(t),e.$implicit.visible=i})),gt.Gc(2),gt.Wb(),gt.Wb()}if(2&t){const t=e.$implicit;gt.Fb(1),gt.oc("ngModel",t.visible),gt.Fb(1),gt.Ic(" ",t.label," ")}}function ce(t,e){if(1&t){const t=gt.Yb();gt.Xb(0,"button",60),gt.fc("click",(function(){gt.vc(t);const i=e.customer;return gt.jc().updateCustomer(i)})),gt.Sb(1,"mat-icon",14),gt.Xb(2,"span"),gt.Gc(3,"Modificar"),gt.Wb(),gt.Wb(),gt.Xb(4,"button",60),gt.fc("click",(function(){gt.vc(t);const i=e.customer;return gt.jc().deleteCustomer(i)})),gt.Sb(5,"mat-icon",14),gt.Xb(6,"span"),gt.Gc(7,"Eliminar"),gt.Wb(),gt.Wb()}if(2&t){const t=gt.jc();gt.Fb(1),gt.oc("icIcon",t.icEdit),gt.Fb(4),gt.oc("icIcon",t.icDelete)}}const ne=function(){return["App","Clientes"]},re=K,ae=[{path:"",component:(()=>{let t=class{constructor(t,e,i,o){this.dialog=t,this.apollo=e,this.deleteClienteGQL=i,this.router=o,this.layoutCtrl=new m.e("boxed"),this.subject$=new U.a(1),this.data$=this.subject$.asObservable(),this.columns=[{label:"Checkbox",property:"checkbox",type:"checkbox",visible:!0},{label:"cedula",property:"cedula",type:"text",visible:!0},{label:"nombre",property:"nombre",type:"text",visible:!0},{label:"nombre2",property:"nombre2",type:"text",visible:!0},{label:"email",property:"email",type:"text",visible:!1},{label:"telf1",property:"telf1",type:"text",visible:!0},{label:"telf2",property:"telf2",type:"text",visible:!0},{label:"telf3",property:"telf3",type:"text",visible:!1},{label:"direccion",property:"direccion",type:"text",visible:!0},{label:"direccion2",property:"direccion2",type:"text",visible:!1},{label:"observacion",property:"observacion",type:"text",visible:!0},{label:"Actions",property:"actions",type:"button",visible:!0}],this.pageSize=10,this.pageSizeOptions=[5,10,20,50],this.selection=new I.c(!0,[]),this.searchCtrl=new m.e,this.icPhone=V.a,this.icMail=O.a,this.icMap=_.a,this.icEdit=k.a,this.icSearch=E.a,this.icDelete=w.a,this.icAdd=G.a,this.icFilterList=L.a,this.icMoreHoriz=D.a,this.icFolder=P.a}get visibleColumns(){return this.columns.filter(t=>t.visible).map(t=>t.property)}getData(){return this.data=this.apollo.watchQuery({query:re}).valueChanges.pipe(Object(q.a)(({data:t})=>t.cliente)),this.data}ngOnInit(){this.getData().subscribe(t=>{this.subject$.next(t)}),this.dataSource=new r.k,this.data$.pipe(Object(Y.a)(Boolean)).subscribe(t=>{this.customers=t,this.dataSource.data=t}),this.searchCtrl.valueChanges.pipe(Object(Q.b)(this)).subscribe(t=>this.onFilterChange(t))}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}createCustomer(){this.dialog.open(Et).afterClosed().subscribe(t=>{t&&(this.customers.unshift(new B(t)),this.subject$.next(this.customers))})}updateCustomer(t){this.dialog.open(Et,{data:t}).afterClosed().subscribe(t=>{if(t){const e=this.customers.findIndex(e=>e.id===t.id);this.customers[e]=new B(t),this.subject$.next(this.customers)}})}deleteCustomer(t){this.deleteClienteGQL.mutate({id:t.id}).subscribe(),this.customers.splice(this.customers.findIndex(e=>e.id===t.id),1),this.selection.deselect(t),this.subject$.next(this.customers)}deleteCustomers(t){t.forEach(t=>this.deleteCustomer(t))}onFilterChange(t){this.dataSource&&(t=(t=t.trim()).toLowerCase(),this.dataSource.filter=t)}toggleColumnVisibility(t,e){e.stopPropagation(),e.stopImmediatePropagation(),t.visible=!t.visible}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(t=>this.selection.select(t))}trackByProperty(t,e){return e.property}};return t.\u0275fac=function(e){return new(e||t)(gt.Rb(tt.b),gt.Rb(yt.b),gt.Rb(zt),gt.Rb(C.f))},t.\u0275cmp=gt.Lb({type:t,selectors:[["vex-aio-table"]],viewQuery:function(t,e){var i;1&t&&(gt.Ac(n.a,!0),gt.Ac(a.a,!0)),2&t&&(gt.sc(i=gt.gc())&&(e.paginator=i.first),gt.sc(i=gt.gc())&&(e.sort=i.first))},inputs:{columns:"columns"},features:[gt.Eb([{provide:S.b,useValue:{appearance:"standard"}}])],decls:44,vars:28,consts:[["fxLayout","column","fxLayoutAlign","center start",1,"pb-16"],[1,"w-full","flex","justify-between"],[1,"title","mt-0","mb-1"],[3,"crumbs"],[1,"-mt-6"],[1,"card","overflow-auto","-mt-16"],["fxLayout","row","fxLayoutAlign","start center",1,"bg-app-bar","px-6","h-16","border-b","sticky","left-0"],["fxFlex","none","fxHide.xs","",1,"title","my-0","ltr:pr-4","rtl:pl-4","ltr:mr-4","rtl:ml-4","ltr:border-r","rtl:border-l"],[4,"ngIf"],["class","mr-4 pr-4 border-r","fxFlex","none",4,"ngIf"],["fxFlex","400px","fxFlex.lt-md","auto","fxHide.xs","","fxLayout","row","fxLayoutAlign","start center",1,"bg-card","rounded-full","border","px-4"],["size","20px",3,"icIcon"],["placeholder","Buscar...","type","search",1,"px-4","py-3","border-0","outline-none","w-full","bg-transparent",3,"formControl"],["color","primary","fxFlex","none","mat-mini-fab","","matTooltip","Crear Cliente","type","button",1,"ml-4",3,"click"],[3,"icIcon"],["fxFlex",""],["fxFlex","none","fxHide.gt-xs","","mat-icon-button","","type","button",1,"ml-4"],["fxFlex","none","mat-icon-button","","matTooltip","Editar Columnas","type","button",1,"ml-4",3,"matMenuTriggerFor"],["mat-table","","matSort","",1,"w-full",3,"dataSource"],["matColumnDef","checkbox"],["mat-header-cell","",4,"matHeaderCellDef"],["class","w-4","mat-cell","",4,"matCellDef"],[4,"ngFor","ngForOf","ngForTrackBy"],["matColumnDef","contact"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","actions"],["class","w-10 text-secondary","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","hover:bg-hover trans-ease-out cursor-pointer","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"sticky","left-0",3,"pageSizeOptions","pageSize"],["xPosition","before","yPosition","below"],["columnFilterMenu","matMenu"],["class","checkbox-item mat-menu-item",3,"click",4,"ngFor","ngForOf"],["actionsMenu","matMenu"],["matMenuContent",""],["fxFlex","none",1,"mr-4","pr-4","border-r"],["color","primary","mat-icon-button","","matTooltip","Delete selected","type","button",3,"click"],["mat-header-cell",""],["color","primary",3,"checked","indeterminate","change"],["mat-cell","",1,"w-4"],["color","primary",3,"checked","change","click"],[3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["class","uppercase","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass",4,"matCellDef"],["mat-header-cell","","mat-sort-header","",1,"uppercase"],["mat-cell","",3,"ngClass"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"flex"],["mat-icon-button","",1,"w-8","h-8","leading-none","flex","items-center","justify-center","hover:bg-hover",3,"click"],["size","18px",3,"icIcon"],["mat-icon-button","",1,"w-8","h-8","leading-none","flex","items-center","justify-center","ml-1","hover:bg-hover",3,"click"],["mat-cell","",1,"w-10","text-secondary"],["mat-icon-button","","type","button",3,"matMenuTriggerData","matMenuTriggerFor","click"],["mat-header-row",""],["mat-row","",1,"hover:bg-hover","trans-ease-out","cursor-pointer",3,"click"],[1,"checkbox-item","mat-menu-item",3,"click"],["color","primary",3,"ngModel","click","ngModelChange"],["mat-menu-item","",3,"click"]],template:function(t,e){if(1&t&&(gt.Xb(0,"vex-page-layout"),gt.Xb(1,"vex-page-layout-header",0),gt.Xb(2,"div",1),gt.Xb(3,"div"),gt.Xb(4,"h1",2),gt.Gc(5,"Lista de Clientes"),gt.Wb(),gt.Sb(6,"vex-breadcrumbs",3),gt.Wb(),gt.Wb(),gt.Wb(),gt.Xb(7,"vex-page-layout-content",4),gt.Xb(8,"div",5),gt.Xb(9,"div",6),gt.Xb(10,"h2",7),gt.Ec(11,Pt,2,0,"span",8),gt.Ec(12,Rt,5,3,"span",8),gt.Wb(),gt.Ec(13,Ot,3,1,"div",9),gt.Xb(14,"div",10),gt.Sb(15,"ic-icon",11),gt.Sb(16,"input",12),gt.Wb(),gt.Xb(17,"button",13),gt.fc("click",(function(){return e.createCustomer()})),gt.Sb(18,"mat-icon",14),gt.Wb(),gt.Sb(19,"span",15),gt.Xb(20,"button",16),gt.Sb(21,"mat-icon",14),gt.Wb(),gt.Xb(22,"button",17),gt.Sb(23,"mat-icon",14),gt.Wb(),gt.Wb(),gt.Xb(24,"table",18),gt.Vb(25,19),gt.Ec(26,Tt,2,2,"th",20),gt.Ec(27,_t,2,1,"td",21),gt.Ub(),gt.Ec(28,qt,2,1,"ng-container",22),gt.Vb(29,23),gt.Ec(30,Bt,1,0,"th",24),gt.Ec(31,Zt,8,3,"td",25),gt.Ub(),gt.Vb(32,26),gt.Ec(33,Jt,1,0,"th",24),gt.Ec(34,te,3,5,"td",27),gt.Ub(),gt.Ec(35,ee,1,0,"tr",28),gt.Ec(36,ie,1,1,"tr",29),gt.Wb(),gt.Sb(37,"mat-paginator",30),gt.Wb(),gt.Wb(),gt.Wb(),gt.Xb(38,"mat-menu",31,32),gt.Ec(40,oe,3,2,"button",33),gt.Wb(),gt.Xb(41,"mat-menu",31,34),gt.Ec(43,ce,8,2,"ng-template",35),gt.Wb()),2&t){const t=gt.tc(39);gt.Fb(2),gt.Jb("container","boxed"===e.layoutCtrl.value)("px-gutter","fullwidth"===e.layoutCtrl.value),gt.Fb(4),gt.oc("crumbs",gt.pc(27,ne)),gt.Fb(1),gt.Jb("container","boxed"===e.layoutCtrl.value)("px-gutter","fullwidth"===e.layoutCtrl.value),gt.Fb(4),gt.oc("ngIf",e.selection.isEmpty()),gt.Fb(1),gt.oc("ngIf",e.selection.hasValue()),gt.Fb(1),gt.oc("ngIf",e.selection.hasValue()),gt.Fb(2),gt.oc("icIcon",e.icSearch),gt.Fb(1),gt.oc("formControl",e.searchCtrl),gt.Fb(2),gt.oc("icIcon",e.icAdd),gt.Fb(3),gt.oc("icIcon",e.icSearch),gt.Fb(1),gt.oc("matMenuTriggerFor",t),gt.Fb(1),gt.oc("icIcon",e.icFilterList),gt.Fb(1),gt.oc("@stagger",void 0)("dataSource",e.dataSource),gt.Fb(4),gt.oc("ngForOf",e.columns)("ngForTrackBy",e.trackByProperty),gt.Fb(7),gt.oc("matHeaderRowDef",e.visibleColumns),gt.Fb(1),gt.oc("matRowDefColumns",e.visibleColumns),gt.Fb(1),gt.oc("pageSizeOptions",e.pageSizeOptions)("pageSize",e.pageSize),gt.Fb(3),gt.oc("ngForOf",e.columns)}},directives:[jt.a,Lt.a,Ft.c,Ft.b,At.a,Dt.a,Ft.a,Ht.b,o.n,y.a,m.c,m.m,m.f,b.b,d.a,s.a,u.d,r.j,a.a,r.c,r.e,r.b,o.m,r.g,r.i,n.a,u.e,u.a,r.d,l.a,r.a,a.b,o.k,Ht.a,b.a,r.f,r.h,m.p,u.b],styles:[""],data:{animation:[F.a,X.a]}}),t=Object(x.a)([Object(Q.a)()],t),t})(),data:{toolbarShadowEnabled:!0}}];let le=(()=>{class t{}return t.\u0275mod=gt.Pb({type:t}),t.\u0275inj=gt.Ob({factory:function(e){return new(e||t)},imports:[[C.i.forChild(ae)],C.i]}),t})();var se=i("QibW");let be=(()=>{class t{}return t.\u0275mod=gt.Pb({type:t}),t.\u0275inj=gt.Ob({factory:function(e){return new(e||t)},imports:[[o.c,m.r,c.a,tt.f,Wt.c,b.c,s.b,se.c,f.b,u.c,y.b,vt.b,Xt.b]]}),t})(),ue=(()=>{class t{}return t.\u0275mod=gt.Pb({type:t}),t.\u0275inj=gt.Ob({factory:function(e){return new(e||t)},imports:[[o.c,le,p.a,c.a,v.a,be,n.b,r.l,a.c,l.b,s.b,b.c,u.c,y.b,m.i,d.b,m.r,g.a,f.b,h.a]]}),t})()},EPGw:function(t,e){e.__esModule=!0,e.default={body:'<path opacity=".3" d="M14.11 14H8V7.91l.59-.59L11.91 4C8.61 4.05 6 6.6 6 10.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.79 6-9.14v-.08l-3.3 3.3l-.59.58z" fill="currentColor"/><path d="M18.17 4.91L17.1 3.84l-5.55 5.55v1.08h1.08l5.54-5.56zM16 2.74l1.29-1.29c.58-.59 1.52-.59 2.11-.01l.01.01l1.15 1.15c.59.59.59 1.54 0 2.12l-.68.68l-.02.02l-.58.58l-6 6H10V8.74l6-6zm-2.28-.55l-.55.55l-1.27 1.27c-3.3.05-5.9 2.6-5.9 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.79 6-9.14v-.1l1.8-1.8c.13.6.2 1.24.2 1.9c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8c0-4.98 3.8-8.2 8-8.2c.58 0 1.16.06 1.72.18z" fill="currentColor"/><path opacity=".3" d="M18.17 4.91L17.1 3.84l-5.55 5.55v1.08h1.08z" fill="currentColor"/>',width:24,height:24}},MzEE:function(t,e){e.__esModule=!0,e.default={body:'<path opacity=".3" d="M19.21 12.04l-1.53-.11l-.3-1.5A5.484 5.484 0 0 0 12 6C9.94 6 8.08 7.14 7.12 8.96l-.5.95l-1.07.11A3.99 3.99 0 0 0 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3c0-1.55-1.22-2.86-2.79-2.96zM12 17l-4-4h2.55v-3h2.91v3H16l-4 4z" fill="currentColor"/><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4l4-4h-2.55z" fill="currentColor"/>',width:24,height:24}},kSvQ:function(t,e){e.__esModule=!0,e.default={body:'<path d="M13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06A8.994 8.994 0 0 0 13 3.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z" fill="currentColor"/><circle cx="12" cy="12" opacity=".3" r="2" fill="currentColor"/><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z" fill="currentColor"/>',width:24,height:24}},yHIK:function(t,e){e.__esModule=!0,e.default={body:'<path opacity=".3" d="M8 5h8v3H8z" fill="currentColor"/><circle cx="18" cy="11.5" r="1" fill="currentColor"/><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z" fill="currentColor"/><path opacity=".3" d="M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2v-2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1z" fill="currentColor"/>',width:24,height:24}}}]);