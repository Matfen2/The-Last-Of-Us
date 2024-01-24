import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css',
})
export class SubscribeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.register = this.formBuilder.group({
      adress: [
        '',
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
      ],
    });
  }

  register: FormGroup;

  successmsg: any = 'Abonnement réussi';
  errormsg: any = "Echec de l'abonnement";

  suscribe() {
    this.authService.subscribeMember(this.register.value).subscribe(
      (res) => {
        alert(this.successmsg);
      },
      (error) => {
        alert(this.errormsg);
      }
    );
  }

  ngOnInit(): void {}
}
