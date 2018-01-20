import { Component, OnInit, OnDestroy, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

declare var jQuery: any;

@Component({
  selector: 'app-sign-in',
  styleUrls: ['./sign-in.component.scss'],
  template: `
  <div class="container">
    <div class="row">
      <div class="col-3">
      <p></p><p></p><br>
        <button class="sign-in__button btn" (click)="showModal()" type="button"> Sign In</button>
        <button class="sign-in__button btn" (click)="signInWithGithub()" type="button">
        <i class="fa fa-github" aria-hidden="true"></i> GitHub</button>
        <button class="sign-in__button btn" (click)="signInWithGoogle()" type="button">
        <i class="fa fa-google" aria-hidden="true"></i> Google</button>
        <button class="sign-in__button btn" (click)="signInWithTwitter()" type="button">
        <i class="fa fa-twitter" aria-hidden="true"></i> Twitter</button>
        <button class="sign-in__button btn" (click)="signInWithFacebook()" type="button">
        <i class="fa fa-facebook-official" aria-hidden="true"></i> Facebook</button>
      </div>
      <div class="col-1"></div>
      <div class="col-8">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
          <div class="carousel-item active">
              <img class="d-block w-100 h-10" src="../../../assets/genios.jpg" height="350" alt="First slide">
              <div class="carousel-caption d-none d-md-block" [hidden]= "true">
              </div>
          </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
          </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
      </a>
  </div>
      </div>
    </div>
    <hr>
    <div class="jumbotron-fluid">
      <h2><em>Bienvenido!</em></h2>
      <p class="lead"><em>Matrículas Abiertas!.</em></p>
      <hr>
      <div class="row justify-content-md-center" style="text-align: center">
        <div class="col-lg-4">
            <a [routerLink]="['/sedes']"><img src="../../../assets/noticias.png" alt="..." class="rounded-circle"></a>
            <h3>Noticias</h3>
        </div>
        <div class="col-lg-4">
            <a href=""><img src="../../../assets/eventos.png" alt="..." class="rounded-circle"></a>
            <h3>Eventos</h3>
        </div>
        <div class="col-lg-4">
            <a href=""><img src="../../../assets/contacto.png" alt="..." class="rounded-circle"></a>
            <h3>Contactos</h3>
        </div>
      </div>
    </div>
  </div>


<form  class="form" [hidden]= 'true' >
  <h3>New User Signup</h3>
  <p>Already Registered?</p>
  <hr>
  <label for="email">Email</label>
  <input type="email"
  [(ngModel)]="correo" name='correo'>

  <label for="password">Password</label>
  <input type="password"
  [(ngModel)]="clave" name='clave' >
  <button type="submit" (click)="signUp(correo, clave)">Create</button>

  <button type="submit" (click)="signIn(correo, clave)">Login</button>

</form>
<div #myModal class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sign In</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container">
          <nav class="nav nav-tabs" id="myTab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home"
              aria-selected="true">Usuario</a>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <form class="form" (ngSubmit)="addAlumno()">
                <div class="container">
                  <p></p>
                  <p class="lead">
                    <em>
                      <strong>Ingrese sus datos:</strong>
                    </em>
                  </p>
                  <hr>
                  <div class="row justify-content-start">
                    <div class="col-lg-12">
                      <label for="email">Email:</label>
                      <input type="email" class="form-control" id="email" name="email" [(ngModel)]="correo" name='correo'>
                    </div>
                  </div>
                  <div class="row justify-content-start">
                    <div class="col-lg-12">
                      <label for="password">Password:</label>
                      <input type="password" class="form-control" id="password" name="password" [(ngModel)]="clave" name='clave'>
                    </div>
                  </div>
                  <p></p>
                </div>
                <div class="row justify-content-center">
                  <div class="" style="text-align: right">
                    <p class="lead">
                      <button class="btn btn-primary btn-lg" type="submit" (click)="signIn(correo, clave)">Login</button>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  `
})
export class SignInComponent implements OnInit  {
  @ViewChild('myModal') myModal: ElementRef;
  public userForm: FormGroup;
  correo: any;
  clave: any;

  constructor(private auth: AuthService, private router: Router,  public formBuilder: FormBuilder) {
    this.correo = '';
    this.clave = '';
  }

  ngOnInit() {

  }

  signInAnonymously(): void {
    this.auth.signInAnonymously().then(() => this.postSignIn());
  }

  signInWithFacebook(): void {
    this.auth.signInWithFacebook().then(() => this.postSignIn());
  }

  signInWithGithub(): void {
    this.auth.signInWithGithub().then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle().then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter().then(() => this.postSignIn());
  }

  signUp(email: string, password: string) {
    this.auth.emailSignUp(email, password).then(() => this.postSignIn());
  }

  signIn(email: string, password: string) {
    this.auth.emailLogin(email, password).then(() => this.postSignIn());
    jQuery(this.myModal.nativeElement).modal('hide');
  }

  private postSignIn(): void {
    this.router.navigate(['/Home']);
  }

  showModal() {
    jQuery(this.myModal.nativeElement).modal('show');
  }

  addAlumno() {
  }

}
