import AbstractShareButton from './AbstractShareButton';

import EventHandler from './EventHandler';
import DOMEventHandler from './DOMEventHandler';
// import MockEventHandler from './MockEventHandler';

import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';

const eventHandler: EventHandler = new DOMEventHandler();
// const eventHandler: EventHandler = new MockEventHandler();
const url: string = 'https://www.youtube.com/channel/UCHkkpZ7unPtC9sjzIF2jD1A';

const shareButtonTwitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, '.btn-twitter', url);
shareButtonTwitter.bind();

const shareButtonFacebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, '.btn-facebook', url);
shareButtonFacebook.bind();

const shareButtonLinkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler, '.btn-linkedin', url);
shareButtonLinkedin.bind();

const shareButtonPrint: AbstractShareButton = new ShareButtonPrint(eventHandler, '.btn-print');
shareButtonPrint.bind();
