import { createDomApi } from '../../../core/renderer/dom-api';
import { createPlatformClient } from '../../../core/client/platform-client';
import { IonicGlobal } from '../../../util/interfaces';


const IonicGbl: IonicGlobal = (<any>window).Ionic = (<any>window).Ionic || {};

const plt = createPlatformClient(
  IonicGbl,
  window,
  createDomApi(window.document),
  IonicGbl.ConfigCtrl,
  IonicGbl.QueueCtrl,
  IonicGbl.DomCtrl,
  IonicGbl.staticDir
);

plt.registerComponents(IonicGbl.components).forEach(cmpMeta => {
  plt.defineComponent(cmpMeta, class HostElement extends HTMLElement {});
});
