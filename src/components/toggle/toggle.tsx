import { Component, h } from '@stencil/core';

import { getMode } from '@ionic/core';

@Component({
  tag: 'component-toggle',
  styleUrl: 'toggle.css'
})
export class Toggle {
  render() {
    const mode = getMode();
    const slot = mode === 'ios' ? 'end' : 'start';

    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Toggle</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-item>
            <ion-label>Blueberry</ion-label>
            <ion-toggle slot={slot} name="blueberry" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Apple</ion-label>
            <ion-toggle slot={slot} name="apple" color="secondary" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Grape</ion-label>
            <ion-toggle slot={slot} name="grape" color="tertiary" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Kiwi</ion-label>
            <ion-toggle slot={slot} name="kiwi" color="success" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Orange</ion-label>
            <ion-toggle slot={slot} name="banana" color="warning" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Cherry</ion-label>
            <ion-toggle slot={slot} name="cherry" color="danger" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Banana</ion-label>
            <ion-toggle slot={slot} name="banana" color="light" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Cantaloupe</ion-label>
            <ion-toggle slot={slot} name="cantaloupe" color="medium" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Blackberry</ion-label>
            <ion-toggle slot={slot} name="blackberry" color="dark" checked></ion-toggle>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
