import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(private router: Router, public toastController: ToastController, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.senha)
      .then(result => {
        this.router.navigate(['/tabs/home']);
      }).catch(error => {
        this.presentToast('E-mail e/ou senha inválido(s).');
        delete this.senha;
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  register() {
    this.router.navigate(['/register']);
  }

}
