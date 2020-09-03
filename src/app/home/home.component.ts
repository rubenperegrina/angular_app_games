import { Component, OnInit } from '@angular/core';

import { User } from '@app/_models';
import { AccountService, AlertService } from '@app/_services';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    form: FormGroup;
    user: User;
    reward: number;
    isDisabled: boolean;

    constructor(
        private accountService: AccountService,
        private formBuilder: FormBuilder,
        private alertService: AlertService
        ) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        this.reward = 1000;
        this.isDisabled = false;
        this.form = this.formBuilder.group({
            firstName: [this.user.firstName],
            lastName: [this.user.lastName],
            userName: [this.user.userName],
            password: [this.user.password],
            money: [this.user.money + this.reward]
        });
    }
    
    get f() { return this.form.controls; }

    addRewards() {
        this.accountService.update(this.user.id, this.form.value)
            .subscribe(
                data => {
                    this.alertService.success('Reward collected, your balance is ' + this.form.value.money + '€', { keepAfterRouteChange: true });
                    this.reward = 0;
                    this.isDisabled = true;
                },
                error => {
                    this.alertService.error(error);
                });
    }
}