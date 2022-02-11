"use strict";(self.webpackChunkng=self.webpackChunkng||[]).push([[362],{3362:(B,w,i)=>{i.r(w),i.d(w,{AuthModule:()=>j});var g=i(9808),u=i(2252),r=i(3075),f=i(3490),v=i(2340),e=i(5e3),c=i(8248),p=i(520),Z=i(2147),_=i(6938),h=i(7029);function P(s,n){1&s&&(e.TgZ(0,"div",22),e._uU(1," Email is required. "),e.qZA())}function T(s,n){1&s&&(e.TgZ(0,"div",22),e._uU(1," Please insert a valid email address "),e.qZA())}function A(s,n){if(1&s&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&s){const o=e.oxw();e.Gre("alert alert-",o.messageSendEmail.type," mt-sm-3"),e.xp6(1),e.hij(" ",o.messageSendEmail.text," ")}}let q=(()=>{class s{constructor(o,t,a,l,d,m){this.activatedRoute=o,this.alertMessageService=t,this.http=a,this.httpRequestStatusService=l,this.authService=d,this.router=m,this.submitted=!1,this.messageSendEmail={text:"",type:"success"},this.forgotPasswordForm=new r.cw({emailOrPassword:new r.NI("",[r.kI.required,r.kI.pattern(v.N.emailPattern)])})}static someMethod(){const o=window.location.href.split("/");return o[0]+"//"+o[2]+"/"+o[3]}sendEmail(){this.messageSendEmail.text="",this.submitted=!0;const o={emailOrPassword:this.forgotPasswordForm.get("emailOrPassword").value.trim(),linkOrToken:s.someMethod()+"/change-password"};this.httpRequestStatusService.requestStatusCounter(!0),this.http.post(f.V.httpUrl.resource_server+"/admin/forgot-password",o).subscribe(()=>{this.messageSendEmail.text="Password reset instructions have been successfully sent to your email.",this.messageSendEmail.type="success",this.httpRequestStatusService.requestStatusCounter(!1)},t=>{this.messageSendEmail.text=t.error.message,this.messageSendEmail.type="danger",this.httpRequestStatusService.requestStatusCounter(!1)})}ngOnInit(){this.authService.getAuthenticatedStatus()&&this.router.navigate(["/"])}mailChanged(){this.messageSendEmail.text=""}}return s.\u0275fac=function(o){return new(o||s)(e.Y36(u.gz),e.Y36(c.O),e.Y36(p.eN),e.Y36(Z.q),e.Y36(_.e),e.Y36(u.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-forgot-password"]],decls:28,vars:8,consts:[[3,"main_class"],[1,"app-body","min-vh-100"],["main",""],[1,"main","d-flex","align-items-center"],[1,"container"],[1,"row"],[1,"col-md-12"],[1,"col-md-6","offset-md-3"],["id","formResetPassword",1,"anchor"],[1,"card","card-outline-secondary"],[1,"card-header"],[1,"mb-0"],[1,"card-body"],["autocomplete","off",1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","inputResetPasswordEmail"],["formControlName","emailOrPassword","type","email","id","inputResetPasswordEmail","name","email","placeholder","user@example.com","value","",1,"form-control",3,"input"],["class","invalid-feedback",4,"ngIf"],[3,"class",4,"ngIf"],["routerLink","/account/login",1,"btn","btn-sm","btn-danger","mr-1"],[1,"cui-arrow-left"],["type","submit",1,"btn","btn-sm","btn-success",3,"disabled"],[1,"invalid-feedback"]],template:function(o,t){if(1&o&&(e._UZ(0,"app-loader",0),e.TgZ(1,"div",1,2),e.TgZ(3,"main",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",5),e.TgZ(8,"div",7),e._UZ(9,"span",8),e.TgZ(10,"div",9),e.TgZ(11,"div",10),e.TgZ(12,"h3",11),e._uU(13,"Password Reset"),e.qZA(),e.qZA(),e.TgZ(14,"div",12),e.TgZ(15,"form",13),e.NdJ("ngSubmit",function(){return t.sendEmail()}),e.TgZ(16,"div",14),e.TgZ(17,"label",15),e._uU(18,"Email"),e.qZA(),e.TgZ(19,"input",16),e.NdJ("input",function(){return t.mailChanged()}),e.qZA(),e.YNc(20,P,2,0,"div",17),e.YNc(21,T,2,0,"div",17),e.YNc(22,A,2,4,"div",18),e.qZA(),e.TgZ(23,"a",19),e.TgZ(24,"i",20),e._uU(25," Login"),e.qZA(),e.qZA(),e.TgZ(26,"button",21),e._uU(27,"Reset"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const a=e.MAs(2);e.Q6J("main_class",a),e.xp6(15),e.Q6J("formGroup",t.forgotPasswordForm),e.xp6(4),e.ekj("is-invalid",(t.submitted||t.forgotPasswordForm.get("emailOrPassword").touched)&&t.forgotPasswordForm.controls.emailOrPassword.invalid),e.xp6(1),e.Q6J("ngIf",(t.submitted||t.forgotPasswordForm.get("emailOrPassword").touched)&&t.forgotPasswordForm.get("emailOrPassword").getError("required")),e.xp6(1),e.Q6J("ngIf",(t.submitted||t.forgotPasswordForm.controls.emailOrPassword.touched)&&""!==t.forgotPasswordForm.controls.emailOrPassword.value&&null!==t.forgotPasswordForm.controls.emailOrPassword.value&&t.forgotPasswordForm.controls.emailOrPassword.invalid),e.xp6(1),e.Q6J("ngIf",t.messageSendEmail.text),e.xp6(4),e.Q6J("disabled",t.forgotPasswordForm.get("emailOrPassword").invalid)}},directives:[h.R,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,g.O5,u.yS],styles:[".password_show[_ngcontent-%COMP%]{position:absolute;right:25px;margin-top:10.5px;cursor:pointer;z-index:100}"]}),s})();var b=i(2398);function C(s,n){1&s&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function S(s,n){1&s&&(e.TgZ(0,"div"),e._uU(1,"Please insert a valid email address"),e.qZA())}function y(s,n){if(1&s&&(e.TgZ(0,"div",41),e.YNc(1,C,2,0,"div",42),e.YNc(2,S,2,0,"div",42),e.qZA()),2&s){e.oxw();const o=e.MAs(26);e.xp6(1),e.Q6J("ngIf",o.errors.required),e.xp6(1),e.Q6J("ngIf",o.errors&&o.errors.pattern)}}function F(s,n){if(1&s&&(e.TgZ(0,"div",44),e.TgZ(1,"b"),e._uU(2),e.qZA(),e.qZA()),2&s){const o=e.oxw(3);e.Q6J("ngClass",o.response_error.error&&"User account is locked"===o.response_error.error.error_description?"alert alert-danger":""),e.xp6(2),e.Oqu(o.response_error.error.error_description)}}function U(s,n){1&s&&(e.TgZ(0,"div"),e._uU(1,"Incorrect email or password"),e.qZA())}function J(s,n){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,F,3,2,"div",43),e.YNc(2,U,2,0,"div",42),e.qZA()),2&s){const o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",o.response_error.error&&"Bad credentials"!==o.response_error.error.error_description),e.xp6(1),e.Q6J("ngIf",o.response_error.error&&"Bad credentials"===o.response_error.error.error_description)}}function k(s,n){if(1&s&&(e.TgZ(0,"div",41),e.YNc(1,J,3,2,"div",42),e.qZA()),2&s){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.response_error.error)}}function I(s,n){1&s&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function Y(s,n){if(1&s&&(e.TgZ(0,"div",41),e.YNc(1,I,2,0,"div",42),e.qZA()),2&s){e.oxw();const o=e.MAs(33);e.xp6(1),e.Q6J("ngIf",o.errors.required)}}let M=(()=>{class s{constructor(o,t,a,l,d){this.httpAuthService=o,this.authService=t,this.router=a,this.route=l,this.alertMessageService=d,this.isShowPasswordHidden=!0,this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/",console.log(this.returnUrl)}showPassword(o){this.isShowPasswordHidden=!o}login(o){if(console.log(this.returnUrl),console.log(o),o.valid){o.value.remember&&this.authService.setRememberMe(!0);const t={username:o.value.username,password:o.value.password,grant_type:"password",device_id:this.authService.generateUniqueId()};this.httpAuthService.login(t).subscribe(a=>{a.access_token&&(this.authService.setLoggedIn(a),this.authService.resetLastActionTime(),console.log(this.returnUrl),this.router.navigate([this.returnUrl]),this.response_error=!1)},a=>{console.log(a),a.status?this.response_error=a:this.alertMessageService.addDangerMessage("Server error")})}}keyDown(o){13!==o.keyCode&&(this.response_error=!1)}ngOnInit(){this.currentYear=new Date}}return s.\u0275fac=function(o){return new(o||s)(e.Y36(b.d),e.Y36(_.e),e.Y36(u.F0),e.Y36(u.gz),e.Y36(c.O))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-login"]],decls:65,vars:10,consts:[[3,"main_class"],[1,"app-body","min-vh-100","d-flex","flex-column"],["main",""],[1,"main","d-flex","align-items-center"],[1,"container","d-flex","flex-column"],[1,"header","text-center","mb-sm-5"],[1,"mb-sm-5"],["width","190px","alt","",3,"src"],[1,"text-muted"],[1,"row"],[1,"col-md-8","mx-auto"],[1,"card-group"],[1,"card","p-4"],[1,"card-body"],[3,"ngSubmit"],["form","ngForm"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"icon-user"],["type","text","placeholder","Email","autocomplete","username","name","username","email","true","ngModel","","required","","pattern","^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",1,"form-control",3,"ngClass","keydown"],["email","ngModel"],["class","invalid-feedback",4,"ngIf"],[1,"input-group","mb-4"],[1,"icon-lock"],["type","password","placeholder","Password","autocomplete","current-password","name","password","required","","ngModel","",1,"form-control",3,"ngClass","type","keydown"],["password","ngModel"],[1,"fa","fa-lg","password_show","text-muted",3,"ngClass","click"],["class","invalid-feedback ",4,"ngIf"],[1,"col-8"],["type","submit",1,"btn","btn-primary","px-4"],["type","checkbox","ngModel","","name","remember",1,"ml-3"],["remember","ngModel"],[1,"col-4","text-right"],["routerLink","/account/forgot-password","type","button",1,"btn","btn-link","px-0","text-muted"],[1,"card-body","text-center"],["href","tel:800 997-5566"],["target","_blank","href","https://www.connectto.com/contacts/"],[1,"page-footer","font-small","blue"],[1,"footer-copyright","text-center","py-4"],["target","_blank","href","https://www.connectto.com"],[1,"invalid-feedback"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(o,t){if(1&o){const a=e.EpF();e._UZ(0,"app-loader",0),e.TgZ(1,"div",1,2),e.TgZ(3,"main",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"img",7),e.qZA(),e.TgZ(8,"h3",8),e._uU(9,"Welcome to the Aya"),e.qZA(),e.qZA(),e.TgZ(10,"div",9),e.TgZ(11,"div",10),e.TgZ(12,"div",11),e.TgZ(13,"div",12),e.TgZ(14,"div",13),e.TgZ(15,"form",14,15),e.NdJ("ngSubmit",function(){e.CHM(a);const d=e.MAs(16);return t.login(d)}),e.TgZ(17,"h1"),e._uU(18,"Login"),e.qZA(),e.TgZ(19,"p",8),e._uU(20,"Sign In to your account"),e.qZA(),e.TgZ(21,"div",16),e.TgZ(22,"div",17),e.TgZ(23,"span",18),e._UZ(24,"i",19),e.qZA(),e.qZA(),e.TgZ(25,"input",20,21),e.NdJ("keydown",function(d){return t.keyDown(d)}),e.qZA(),e.YNc(27,y,3,2,"div",22),e.qZA(),e.TgZ(28,"div",23),e.TgZ(29,"div",17),e.TgZ(30,"span",18),e._UZ(31,"i",24),e.qZA(),e.qZA(),e.TgZ(32,"input",25,26),e.NdJ("keydown",function(d){return t.keyDown(d)}),e.qZA(),e.TgZ(34,"i",27),e.NdJ("click",function(){return t.showPassword(t.isShowPasswordHidden)}),e.qZA(),e.YNc(35,k,2,1,"div",28),e.YNc(36,Y,2,1,"div",22),e.qZA(),e.TgZ(37,"div",9),e.TgZ(38,"div",29),e.TgZ(39,"button",30),e._uU(40,"Login"),e.qZA(),e.TgZ(41,"label"),e._UZ(42,"input",31,32),e._uU(44," Remember Me! "),e.qZA(),e.qZA(),e.TgZ(45,"div",33),e.TgZ(46,"button",34),e._uU(47,"Forgot password? "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(48,"div",35),e.TgZ(49,"span",8),e._uU(50,"Telephone: "),e.qZA(),e.TgZ(51,"a",36),e._uU(52," 800 997-5566 "),e.qZA(),e._uU(53," | "),e.TgZ(54,"span",8),e._uU(55," E-mail: "),e.qZA(),e.TgZ(56,"a",37),e._uU(57," info@connectto.com"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(58,"footer",38),e.TgZ(59,"div",39),e.TgZ(60,"span"),e._uU(61,"Powered by "),e.TgZ(62,"a",40),e._uU(63,"ConnectTo Communications"),e.qZA(),e._uU(64),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const a=e.MAs(2),l=e.MAs(16),d=e.MAs(26),m=e.MAs(33);e.Q6J("main_class",a),e.xp6(7),e.Q6J("src","/assets/img/brand/logo.png",e.LSH),e.xp6(18),e.Q6J("ngClass",(l.submitted||d.touched)&&d.invalid?"is-invalid":""),e.xp6(2),e.Q6J("ngIf",d.invalid),e.xp6(5),e.Q6J("ngClass",t.response_error||(l.submitted||m.touched)&&m.invalid?"is-invalid":"")("type",t.isShowPasswordHidden?"password":"text"),e.xp6(2),e.Q6J("ngClass",t.isShowPasswordHidden?"fa-eye":"fa-eye-slash"),e.xp6(1),e.Q6J("ngIf",t.response_error),e.xp6(1),e.Q6J("ngIf",m.invalid),e.xp6(28),e.hij(" \xa9 ",t.currentYear.getFullYear(),"")}},directives:[h.R,r._Y,r.JL,r.F,r.Fj,r.on,r.JJ,r.On,r.Q7,r.c5,g.mk,g.O5,r.Wl,u.rH],styles:[".password_show[_ngcontent-%COMP%]{position:absolute;right:25px;margin-top:10.5px;cursor:pointer;z-index:100}"]}),s})();function N(s,n){1&s&&(e.TgZ(0,"div",27),e._uU(1," Password is required. "),e.qZA())}function Q(s,n){1&s&&(e.TgZ(0,"div",27),e._uU(1," Your password must be minimum 8 characters long. "),e.qZA())}function L(s,n){1&s&&(e.TgZ(0,"div",28),e._uU(1," Your password must be include at least one number, one lowercase letter and one uppercase letter. "),e.qZA())}function O(s,n){1&s&&(e.TgZ(0,"div",27),e._uU(1,' Your "Password" and "Confirm password" fields must contain equal values. '),e.qZA())}const R=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"",component:(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-auth"]],decls:1,vars:0,template:function(o,t){1&o&&e._UZ(0,"router-outlet")},directives:[u.lC],styles:[""]}),s})(),children:[{path:"login",component:M,data:{browserTitle:"Login"}},{path:"forgot-password",component:q,data:{browserTitle:"Register"}},{path:"change-password",component:(()=>{class s{constructor(o,t,a,l,d){this.activatedRoute=o,this.alertMessageService=t,this.http=a,this.router=l,this.httpRequestStatusService=d,this.submitted=!1,this.isShowPasswordHidden=!0,this.isShowPasswordConfiguredHidden=!0,this.changePasswordForm=new r.cw({username:new r.NI(""),newPassword:new r.NI("",[r.kI.required,r.kI.minLength(8),r.kI.pattern(v.N.passwordPattern)]),rePassword:new r.NI("",[r.kI.minLength(8)])})}static getQueryParameter(o){return new URLSearchParams(window.location.search).get(o)}showPassword(o,t){0===t?this.isShowPasswordHidden=!o:1===t&&(this.isShowPasswordConfiguredHidden=!o)}changePassword(){this.submitted=!0;const o={emailOrPassword:this.changePasswordForm.get("newPassword").value,linkOrToken:s.getQueryParameter("token")};this.httpRequestStatusService.requestStatusCounter(!0),this.http.post(f.V.httpUrl.resource_server+"/admin/change-password",o).subscribe(()=>{this.router.navigate(["/account/login"])&&this.alertMessageService.addSuccessMessage("Your password has been changed successfully"),this.httpRequestStatusService.requestStatusCounter(!1)},t=>{this.alertMessageService.addDangerMessage(t.error.message),this.httpRequestStatusService.requestStatusCounter(!1)})}ngOnInit(){this.username=s.getQueryParameter("username"),this.token=s.getQueryParameter("token"),(null===this.token||null===this.username)&&this.router.navigate(["/account/login"])}ngAfterViewInit(){this.changePasswordForm.get("username").setValue(s.getQueryParameter("username"))}}return s.\u0275fac=function(o){return new(o||s)(e.Y36(u.gz),e.Y36(c.O),e.Y36(p.eN),e.Y36(u.F0),e.Y36(Z.q))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-change-password"]],decls:40,vars:13,consts:[[3,"main_class"],[1,"app-body","min-vh-100"],["main",""],[1,"main","d-flex","align-items-center"],[1,"container"],[1,"row"],[1,"col-md-12"],[1,"col-md-6","offset-md-3"],["id","formResetPassword",1,"anchor"],[1,"card","card-outline-secondary"],[1,"card-header"],[1,"mb-0"],[1,"card-body"],["autocomplete","off",1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["id","username","formControlName","username","type","text","name","username","disabled","",1,"form-control"],["for","new_password"],["type","password","formControlName","newPassword","id","new_password",1,"form-control",3,"ngClass","type"],[1,"fa","fa-lg","password_show","text-muted",3,"ngClass","click"],["class","invalid-feedback",4,"ngIf"],["class","invalid-feedback d-block",4,"ngIf"],["for","rePassword"],["type","password","id","rePassword","autocomplete","new-password","formControlName","rePassword","value","",1,"form-control",3,"ngClass","type"],["type","submit",1,"btn","btn-sm","btn-success",3,"disabled"],["routerLink","/account/forgot-password",1,"btn","btn-sm","btn-danger","ml-1"],[1,"cui-arrow-left"],[1,"invalid-feedback"],[1,"invalid-feedback","d-block"]],template:function(o,t){if(1&o&&(e._UZ(0,"app-loader",0),e.TgZ(1,"div",1,2),e.TgZ(3,"main",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",5),e.TgZ(8,"div",7),e._UZ(9,"span",8),e.TgZ(10,"div",9),e.TgZ(11,"div",10),e.TgZ(12,"h3",11),e._uU(13,"Change Password"),e.qZA(),e.qZA(),e.TgZ(14,"div",12),e.TgZ(15,"form",13),e.NdJ("ngSubmit",function(){return t.changePassword()}),e.TgZ(16,"div",14),e.TgZ(17,"label",15),e._uU(18,"User Name"),e.qZA(),e._UZ(19,"input",16),e.qZA(),e.TgZ(20,"div",14),e.TgZ(21,"label",17),e._uU(22,"New Password"),e.qZA(),e._UZ(23,"input",18),e.TgZ(24,"i",19),e.NdJ("click",function(){return t.showPassword(t.isShowPasswordHidden,0)}),e.qZA(),e.YNc(25,N,2,0,"div",20),e.YNc(26,Q,2,0,"div",20),e.YNc(27,L,2,0,"div",21),e.qZA(),e.TgZ(28,"div",14),e.TgZ(29,"label",22),e._uU(30,"Confirm Password"),e.qZA(),e._UZ(31,"input",23),e.TgZ(32,"i",19),e.NdJ("click",function(){return t.showPassword(t.isShowPasswordConfiguredHidden,1)}),e.qZA(),e.YNc(33,O,2,0,"div",20),e.qZA(),e.TgZ(34,"div",14),e.TgZ(35,"button",24),e._uU(36,"Save "),e.qZA(),e.TgZ(37,"a",25),e.TgZ(38,"i",26),e._uU(39," Cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const a=e.MAs(2);e.Q6J("main_class",a),e.xp6(15),e.Q6J("formGroup",t.changePasswordForm),e.xp6(8),e.Q6J("ngClass",t.submitted||t.changePasswordForm.get("newPassword").touched?t.changePasswordForm.get("newPassword").invalid?"is-invalid ":"is-valid":"")("type",t.isShowPasswordHidden?"password":"text"),e.xp6(1),e.Q6J("ngClass",t.isShowPasswordHidden?"fa-eye":"fa-eye-slash"),e.xp6(1),e.Q6J("ngIf",(t.submitted||t.changePasswordForm.get("newPassword").touched)&&t.changePasswordForm.get("newPassword").getError("required")),e.xp6(1),e.Q6J("ngIf",(t.submitted||t.changePasswordForm.get("newPassword").touched)&&!t.changePasswordForm.get("newPassword").getError("required")&&t.changePasswordForm.get("newPassword").getError("minlength")),e.xp6(1),e.Q6J("ngIf",(t.submitted||t.changePasswordForm.get("newPassword").touched)&&!t.changePasswordForm.get("newPassword").getError("minlength")&&t.changePasswordForm.get("newPassword").getError("pattern")),e.xp6(4),e.Q6J("ngClass",t.submitted||t.changePasswordForm.get("rePassword").touched?t.changePasswordForm.get("rePassword").value===t.changePasswordForm.get("newPassword").value&&""!==t.changePasswordForm.get("newPassword").value?"is-valid ":"is-invalid":"")("type",t.isShowPasswordConfiguredHidden?"password":"text"),e.xp6(1),e.Q6J("ngClass",t.isShowPasswordConfiguredHidden?"fa-eye":"fa-eye-slash"),e.xp6(1),e.Q6J("ngIf",(t.submitted||t.changePasswordForm.get("rePassword").touched)&&t.changePasswordForm.get("rePassword").value!==t.changePasswordForm.get("newPassword").value),e.xp6(2),e.Q6J("disabled",t.changePasswordForm.get("rePassword").invalid||t.changePasswordForm.get("rePassword").value!==t.changePasswordForm.get("newPassword").value)}},directives:[h.R,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,g.mk,g.O5,u.yS],styles:[".password_show[_ngcontent-%COMP%]{float:right;margin-right:28px;margin-top:-25px;position:relative;cursor:pointer}"]}),s})(),data:{browserTitle:"Change Password"}}]}];let E=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[u.Bz.forChild(R),g.ez],u.Bz]}),s})();var H=i(4466),z=i(7787);let j=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[g.ez,E,p.JF,H.m,z.JM]]}),s})()}}]);