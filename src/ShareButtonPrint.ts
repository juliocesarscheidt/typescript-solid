import AbstractShareButton from './AbstractShareButton';
import EventHandler from './EventHandler';

export default class ShareButtonPrint extends AbstractShareButton {
  constructor(eventHandler: EventHandler, className: string) {
    super(eventHandler, className);
  }

  protected createAction(): Function {
    return () => window.print();
  }
}
