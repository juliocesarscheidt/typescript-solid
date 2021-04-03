import EventHandler from './EventHandler';

export default abstract class AbstractShareButton {
  protected eventHandler: EventHandler;
  protected className: string;

  constructor(eventHandler: EventHandler, className: string) {
    this.eventHandler = eventHandler;
    this.className = className;
  }

  protected abstract createAction(): Function;

  public bind(): void {
    const action: Function = this.createAction();
    this.eventHandler.addEventListenerToClass(this.className, 'click', action);
  }
}
