import AbstractShareButton from './AbstractShareButton';
import EventHandler from './EventHandler';

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
  protected url: string;

  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className);

    this.url = url;
  }

  abstract generateLink(): string;

  protected createAction(): Function {
    const link: string = this.generateLink();
    return () => window.open(link);
  }
}
