import"./chunk-UAI4LITN.js";import{a as x,b as L,g as J,i as K,j as Q,k,m as X,o as Y,r as Z,w as z}from"./chunk-7FXAGPRQ.js";import{Cb as l,Db as g,Eb as H,Fb as N,Gb as F,Hb as A,Ja as s,Ka as w,Kb as W,Lb as j,X as P,Y as _,_b as $,aa as T,ab as y,cb as m,eb as I,fa as b,fb as R,ga as C,kb as a,lb as r,mb as f,na as E,oa as S,pb as D,qb as p,qc as U,rb as h,rc as M,sc as G,vc as q,xc as B}from"./chunk-IIFBWGPF.js";import{a as O}from"./chunk-6MDQTQU3.js";var ee=[{routerLink:"calendar",icon:"fas fa-home",label:"Dashboard"},{routerLink:"appointment",icon:"fa-solid fa-address-book",label:"Citas"}];var pe=i=>[i],ue=()=>({exact:!0});function fe(i,t){i&1&&(a(0,"div",7),l(1,"Panel"),r())}function ge(i,t){if(i&1){let c=D();a(0,"button",8),p("click",function(){E(c);let e=h();return S(e.closeSidenav())}),f(1,"i",9),r()}}function he(i,t){if(i&1&&(a(0,"span",14),l(1),r()),i&2){let c=h().$implicit;s(),g(c.label)}}function be(i,t){if(i&1&&(a(0,"li",10)(1,"a",11),f(2,"i",12),y(3,he,2,1,"span",13),r()()),i&2){let c=t.$implicit,n=h();s(),m("routerLink",j(5,pe,c.routerLink))("routerLinkActiveOptions",W(7,ue)),s(),R(c.icon),s(),m("ngIf",n.collapsed)}}var ne=(()=>{let t=class t{constructor(){this.collapsed=!1,this.navData=ee}toogleCollapse(){this.collapsed=!this.collapsed}closeSidenav(){this.collapsed=!1}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b({type:t,selectors:[["app-sidebar"]],hostVars:2,hostBindings:function(e,o){e&2&&I("sidebar",!0)},decls:8,vars:4,consts:[[1,"sidenav",3,"ngClass"],[1,"logo-container"],[1,"logo",3,"click"],["class","logo-text",4,"ngIf"],["class","btn-close",3,"click",4,"ngIf"],[1,"sidenav-nav"],["class","sidenav-nav-item",4,"ngFor","ngForOf"],[1,"logo-text"],[1,"btn-close",3,"click"],["aria-hidden","true",1,"fa","fa-times"],[1,"sidenav-nav-item"],["routerLinkActive","active",1,"sidenave-nav-link",3,"routerLink","routerLinkActiveOptions"],[1,"sidenav-link-icon"],["class","sidenav-link-text",4,"ngIf"],[1,"sidenav-link-text"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"button",2),p("click",function(){return o.toogleCollapse()}),l(3,"Dr"),r(),y(4,fe,2,0,"div",3)(5,ge,2,0,"button",4),r(),a(6,"ul",5),y(7,be,4,8,"li",6),r()()),e&2&&(m("ngClass",o.collapsed?"sidebar-collapsed":""),s(4),m("ngIf",o.collapsed),s(),m("ngIf",o.collapsed),s(2),m("ngForOf",o.navData))},dependencies:[U,M,G,K,Q],styles:[".sidenav[_ngcontent-%COMP%]{background-color:#2c3e50;display:flex;flex-direction:column;transition:width .3s ease;z-index:1;top:0;width:5rem;height:90vh;box-shadow:.063rem 0 1.35rem #8690a3}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.938rem;width:10%}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{background:#fff;text-align:center;width:3rem;min-width:3rem;border-radius:.313rem;padding:.313rem;font-size:24px;cursor:pointer;border:none}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]{margin-left:1.5rem;font-size:24px;font-weight:700;color:#fff}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{margin-left:auto;cursor:pointer;width:2rem;height:2rem;border-radius:50%;background-color:transparent;border:none}.sidenav[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%]{color:#fff;font-size:24px}.sidebar-collapsed[_ngcontent-%COMP%]{width:250px}.sidenav-nav[_ngcontent-%COMP%]{list-style:none;padding:.938rem;margin:0;display:flex;flex-direction:column;align-items:center;height:calc(100% - 3.65rem);cursor:pointer}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]{width:100%;margin-bottom:.625rem}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]   .sidenave-nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;height:3rem;color:#f3f3f3;text-decoration:none;border-radius:.625rem;transition:color .3s ease}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]   .sidenave-nav-link[_ngcontent-%COMP%]   .sidenav-link-icon[_ngcontent-%COMP%]{font-size:22px;width:2rem;min-width:2rem;margin:0 .5rem;text-align:center}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]   .sidenave-nav-link[_ngcontent-%COMP%]   .sidenav-link-text[_ngcontent-%COMP%]{margin-left:1.5rem}.sidenav-nav[_ngcontent-%COMP%]   .sidenav-nav-item[_ngcontent-%COMP%]:hover   .sidenave-nav-link[_ngcontent-%COMP%]{background-color:#fff;color:#000}.active[_ngcontent-%COMP%]{background-color:#fff}.active[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(.sidenav-link-icon, .sidenav-link-text)[_ngcontent-%COMP%]{color:#000}"]});let i=t;return i})();var V=(()=>{let t=class t{ngOnInit(){console.log("BodyComponent has been loaded")}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b({type:t,selectors:[["app-body"]],hostVars:2,hostBindings:function(e,o){e&2&&I("body",!0)},decls:1,vars:0,template:function(e,o){e&1&&f(0,"router-outlet")},dependencies:[J]});let i=t;return i})();var ie=(()=>{let t=class t{ngOnInit(){console.log("DashboardHomeComponent initialized")}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b({type:t,selectors:[["app-home"]],decls:3,vars:0,consts:[[1,"layout"]],template:function(e,o){e&1&&(a(0,"div",0),f(1,"app-sidebar")(2,"app-body"),r())},dependencies:[ne,V]});let i=t;return i})();var oe=(()=>{let t=class t{constructor(n){this.http=n,this.apiUrl="http://localhost:3001/api/reservations"}getAppointments(n=new Date().toISOString().split("T")[0]){let e=`${this.apiUrl}/by-date`;return this.http.post(e,{selected_date:n},{headers:new x({"Content-Type":"application/json"})})}createReservation(n){let e=`${this.apiUrl}/create`;return this.http.post(e,n,{headers:new x({"Content-Type":"application/json"})})}updateReservation(n,e){let o=`${this.apiUrl}/update/${n}`;return this.http.put(o,e,{headers:new x({"Content-Type":"application/json"})})}cancelReservation(n){let e=`${this.apiUrl}/delete/${n}`;return this.http.delete(e,{headers:new x({"Content-Type":"application/json"})})}};t.\u0275fac=function(e){return new(e||t)(T(L))},t.\u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var xe=i=>({"background-color":i});function Ee(i,t){if(i&1){let c=D();a(0,"tr",22)(1,"td"),l(2),r(),a(3,"td"),l(4),r(),a(5,"td"),l(6),r(),a(7,"td"),l(8),r(),a(9,"td"),l(10),r(),a(11,"td")(12,"button",23),p("click",function(){let e=E(c).$implicit,o=h();return S(o.viewElement(e))}),l(13,"Ver Info"),r(),a(14,"button",24),p("click",function(){let e=E(c).$implicit,o=h();return S(o.liberarEspacio(e))}),l(15,"Liberar Espacio"),r(),a(16,"button",25),p("click",function(){let e=E(c).$implicit,o=h();return S(o.agendarEspacio(e))}),l(17,"Agendar Espacio"),r()()()}if(i&2){let c=t.$implicit,n=t.index,e=h();m("ngStyle",j(6,xe,c.rowColor||"transparent")),s(2),g(n+1),s(2),g(c.full_name||"N/A"),s(2),g(c.phone_number||"N/A"),s(2),g(e.formatDate(c.selected_date)||"N/A"),s(2),g(e.formatTime(c.selected_schedule)||"N/A")}}var re=(()=>{let t=class t{constructor(n,e){this.appointmentServices=n,this.cdr=e,this.appointments=[],this.displayedColumns=["position","name","date","timedate","actions"],this.isEditing=!1,this.currentDate=new Date().toISOString().split("T")[0],this.selectedElement={id:0,full_name:"",selected_date:"",selected_schedule:"",phone_number:0}}ngOnInit(){this.loadAppointments(this.currentDate)}loadAppointments(n){this.appointmentServices.getAppointments(n).subscribe({next:e=>{this.appointments=e},error:e=>{console.error("Error al obtener las reservas:",e),alert("No se pudieron cargar las citas.")}})}viewElement(n){if(n){this.selectedElement=O({},n),this.selectedElement.selected_date=new Date(n.selected_date).toISOString().split("T")[0],this.isEditing=!1;let e=document.getElementById("infoModal");new bootstrap.Modal(e).show()}}editElement(){this.isEditing=!0}saveElement(){if(this.selectedElement){let n=this.appointments.findIndex(e=>e.id===this.selectedElement.id);if(n!==-1){this.appointments[n]=O({},this.selectedElement),this.isEditing=!1;let e=this.selectedElement.id,o=O({},this.selectedElement);this.appointmentServices.updateReservation(e,o).subscribe({next:()=>{alert("Cita actualizada exitosamente."),this.cdr.detectChanges()},error:d=>{console.error("Error al actualizar la cita:",d),alert("No se pudo actualizar la cita.")}})}}}liberarEspacio(n){let e=n.id;this.appointmentServices.cancelReservation(e).subscribe({next:()=>{alert("Cita cancelada exitosamente.");let o=this.appointments.findIndex(d=>d.id===n.id);o!==-1&&(this.appointments[o].rowColor="#ffcccc"),this.cdr.detectChanges()},error:o=>{console.error("Error al cancelar la cita:",o),alert("No se pudo cancelar la cita.")}})}agendarEspacio(n){alert("Cita confirmada exitosamente."),n.rowColor="#ccffcc",this.cdr.detectChanges()}trackByPosition(n,e){return e.id}formatTime(n){let e=new Date("1970-01-01T"+n);return isNaN(e.getTime())?(console.error("Hora no v\xE1lida:",n),""):e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}formatDate(n){let e=new Date(n);return isNaN(e.getTime())?"":e.toISOString().split("T")[0]}};t.\u0275fac=function(e){return new(e||t)(w(oe),w($))},t.\u0275cmp=b({type:t,selectors:[["app-appointment"]],decls:45,vars:9,consts:[[1,"container","mt-4"],[1,"table","table-striped"],["scope","col"],[3,"ngStyle",4,"ngFor","ngForOf","ngForTrackBy"],["id","infoModal","tabindex","-1","aria-labelledby","infoModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","infoModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Cerrar",1,"btn-close"],[1,"modal-body"],[1,"mb-3"],["for","patientName",1,"form-label"],["type","text","id","patientName",1,"form-control",3,"ngModelChange","ngModel","readonly"],["for","appointmentDate",1,"form-label"],["type","date","id","appointmentDate",1,"form-control",3,"ngModelChange","ngModel","readonly"],["for","appointmentTime",1,"form-label"],["type","time","id","appointmentTime",1,"form-control",3,"ngModelChange","ngModel","readonly"],[1,"modal-footer"],["type","button",1,"btn","btn-primary","me-2",3,"click"],["type","button",1,"btn","btn-success","me-2",3,"click","disabled"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],[3,"ngStyle"],[1,"btn","btn-info","btn-sm","me-2",3,"click"],[1,"btn","btn-danger","btn-sm","me-2",3,"click"],[1,"btn","btn-success","btn-sm",3,"click"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),l(5,"No."),r(),a(6,"th",2),l(7,"Nombre Completo"),r(),a(8,"th",2),l(9,"Numero Telefonico"),r(),a(10,"th",2),l(11,"Fecha Cita"),r(),a(12,"th",2),l(13,"Hora de la Cita"),r(),a(14,"th",2),l(15,"Acciones"),r()()(),a(16,"tbody"),y(17,Ee,18,8,"tr",3),r()()(),a(18,"div",4)(19,"div",5)(20,"div",6)(21,"div",7)(22,"h5",8),l(23,"Informaci\xF3n del Paciente"),r(),f(24,"button",9),r(),a(25,"div",10)(26,"div",11)(27,"label",12),l(28,"Nombre Completo"),r(),a(29,"input",13),A("ngModelChange",function(u){return F(o.selectedElement.full_name,u)||(o.selectedElement.full_name=u),u}),r()(),a(30,"div",11)(31,"label",14),l(32,"Fecha de Cita"),r(),a(33,"input",15),A("ngModelChange",function(u){return F(o.selectedElement.selected_date,u)||(o.selectedElement.selected_date=u),u}),r()(),a(34,"div",11)(35,"label",16),l(36,"Hora de la Cita"),r(),a(37,"input",17),A("ngModelChange",function(u){return F(o.selectedElement.selected_schedule,u)||(o.selectedElement.selected_schedule=u),u}),r()()(),a(38,"div",18)(39,"button",19),p("click",function(){return o.editElement()}),l(40,"Editar"),r(),a(41,"button",20),p("click",function(){return o.saveElement()}),l(42,"Guardar"),r(),a(43,"button",21),l(44,"Cerrar"),r()()()()()),e&2&&(s(17),m("ngForOf",o.appointments)("ngForTrackBy",o.trackByPosition),s(12),N("ngModel",o.selectedElement.full_name),m("readonly",!o.isEditing),s(4),N("ngModel",o.selectedElement.selected_date),m("readonly",!o.isEditing),s(4),N("ngModel",o.selectedElement.selected_schedule),m("readonly",!o.isEditing),s(4),m("disabled",!o.isEditing))},dependencies:[M,q,X,Y,Z],styles:[".table-container[_ngcontent-%COMP%]{max-width:800px;margin:0 auto}.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}button[_ngcontent-%COMP%]{margin-right:8px}"]});let i=t;return i})();var ae=(()=>{let t=class t{constructor(n){this.http=n,this.apiUrl="https://citasmedicas-woad.vercel.app/api/reservations"}getAppointments(n=new Date().toISOString().split("T")[0]){let e=`${this.apiUrl}/by-date`;return this.http.post(e,{selected_date:n},{headers:new x({"Content-Type":"application/json"})})}};t.\u0275fac=function(e){return new(e||t)(T(L))},t.\u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function Me(i,t){if(i&1&&(a(0,"div",17)(1,"div",18)(2,"div",19)(3,"div",20)(4,"strong"),l(5),r()()(),a(6,"div",21)(7,"div",22)(8,"h5",23),l(9),r(),a(10,"p",24),l(11),r()()()()()),i&2){let c=t.$implicit,n=h();s(5),g(n.formatTime(c.selected_schedule)),s(4),g(c.full_name),s(2),g(n.formatDate(c.selected_date))}}var le=(()=>{let t=class t{constructor(n){this.medicalServices=n,this.events=[],this.paginatedEvents=[],this.currentDate=new Date().toISOString().split("T")[0],this.pageNumber=1,this.pageSize=6}ngOnInit(){}loadAppointments(n){this.medicalServices.getAppointments(n).subscribe({next:e=>{let o=e.filter(d=>new Date(d.selected_date).toISOString().split("T")[0]===n);this.events=this.sortEventsByTime(o),this.updatePaginatedEvents()},error:e=>{e.status===404?alert("No se encontraron citas para esta fecha."):alert("Error al obtener las reservas. Int\xE9ntelo m\xE1s tarde."),console.error("Error al obtener las reservas:",e)}})}sortEventsByTime(n){return n.sort((e,o)=>{let d=new Date(e.selected_schedule).getHours(),u=new Date(o.selected_schedule).getHours();return d-u})}updatePaginatedEvents(){let n=(this.pageNumber-1)*this.pageSize,e=n+this.pageSize;this.paginatedEvents=this.events.slice(n,e)}changeDate(n){let e=new Date(this.currentDate);e.setDate(e.getDate()+n),this.currentDate=e.toISOString().split("T")[0],this.loadAppointments(this.currentDate)}changePage(n){n<1||n>Math.ceil(this.events.length/this.pageSize)||(this.pageNumber=n,this.updatePaginatedEvents())}refreshSchedule(){this.loadAppointments(this.currentDate)}formatTime(n){let e=new Date("1970-01-01T"+n);return isNaN(e.getTime())?(console.error("Hora no v\xE1lida:",n),""):e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}formatDate(n){let e=new Date(n);return isNaN(e.getTime())?"":e.toISOString().split("T")[0]}};t.\u0275fac=function(e){return new(e||t)(w(ae))},t.\u0275cmp=b({type:t,selectors:[["app-calendar"]],decls:25,vars:4,consts:[[1,"container","schedule-tracker","mt-5"],[1,"d-flex","justify-content-between","align-items-center","mb-4"],[1,"font-weight-bold","text-primary"],[1,"d-flex","align-items-center"],[1,"btn","btn-secondary","mr-2",3,"click"],[1,"bi","bi-chevron-left"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"bi","bi-arrow-clockwise"],[1,"btn","btn-secondary",3,"click"],[1,"bi","bi-chevron-right"],[1,"text-center","my-4","font-italic"],[1,"schedule-list"],["class","schedule-item mb-3",4,"ngFor","ngForOf"],[1,"pagination","mt-4","d-flex","justify-content-center"],[1,"btn","btn-outline-primary","mr-2",3,"click","disabled"],[1,"my-auto"],[1,"btn","btn-outline-primary","ml-2",3,"click"],[1,"schedule-item","mb-3"],[1,"row"],[1,"col-3","text-center"],[1,"time-block","bg-light","p-2","rounded"],[1,"col-9"],[1,"event-block","bg-white","p-3","border","rounded","shadow-sm"],[1,"font-weight-bold"],[1,"mb-0"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"h2",2),l(3,"Agenda del D\xEDa"),r(),a(4,"div",3)(5,"button",4),p("click",function(){return o.changeDate(-1)}),f(6,"i",5),l(7," Ayer "),r(),a(8,"button",6),p("click",function(){return o.refreshSchedule()}),f(9,"i",7),l(10," Actualizar "),r(),a(11,"button",8),p("click",function(){return o.changeDate(1)}),l(12," Ma\xF1ana "),f(13,"i",9),r()()(),a(14,"h4",10),l(15),r(),a(16,"div",11),y(17,Me,12,3,"div",12),r(),a(18,"div",13)(19,"button",14),p("click",function(){return o.changePage(o.pageNumber-1)}),l(20," Anterior "),r(),a(21,"span",15),l(22),r(),a(23,"button",16),p("click",function(){return o.changePage(o.pageNumber+1)}),l(24," Siguiente "),r()()()),e&2&&(s(15),H("Fecha seleccionada: ",o.currentDate,""),s(2),m("ngForOf",o.paginatedEvents),s(2),m("disabled",o.pageNumber<=1),s(3),H("P\xE1gina ",o.pageNumber,""))},dependencies:[M],styles:[".schedule-item[_ngcontent-%COMP%]:hover{background-color:#fff;cursor:pointer}.time-block[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700}.event-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:.5rem}.event-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:25px;transition:background-color .3s}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#007bff;color:#fff}"]});let i=t;return i})();var ke=[{path:"",component:ie,data:{title:"Dashboard Home"},children:[{path:"calendar",component:le},{path:"appointment",component:re}]}],se=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=C({type:t}),t.\u0275inj=_({imports:[k.forChild(ke),k]});let i=t;return i})();var we=[],ce=(()=>{let t=class t{constructor(){this.title="Citas medicas"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=C({type:t}),t.\u0275inj=_({imports:[k.forChild(we),k]});let i=t;return i})();var de=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=C({type:t}),t.\u0275inj=_({imports:[B,ce,z]});let i=t;return i})();var ct=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=C({type:t}),t.\u0275inj=_({imports:[B,se,de,z]});let i=t;return i})();export{ct as DashboardModule};
