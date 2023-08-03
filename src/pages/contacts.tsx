import { Cemjsx } from "cemjs-all"
import platform from '@svg/platform.svg'
import telegram from '@svg/social/telegram.svg'
import youtube from '@svg/social/youtube.svg'
import github from '@svg/social/github.svg'
import email from '@svg/social/email.svg'


export default function (data, children) {
  return (
    <div class="contacts">
      <div class="contact">
        <a target="_blank" href="https://t.me/FrameworkCemJS" class="contact-content">
          <div class="content-image">
            <img src={telegram}></img>
          </div>
          <span>Telegram</span>
        </a>
        <span class="contact_hint">
          <span class="contact_hint-info">t.me/FrameworkCemJS</span>
        </span>
      </div>
      <div
        class="contact">
        <a target="_blank" href="https://www.youtube.com/@CemJS" class="contact-content">
          <div class="content-image">
            <img src={youtube}></img>
          </div>
          <span>Youtube</span>
        </a>
        <span class="contact_hint">
          <span class="contact_hint-info">www.youtube.com/@CemJS</span>
        </span>
      </div>
      <div class="contact">
        <a target="_blank" href="https://github.com/CemJS" class="contact-content">
          <div class="content-image">
            <img src={github}></img>
          </div>
          <span>Github</span>
        </a>
        <span class="contact_hint">
          <span class="contact_hint-info">github.com/CemJS</span>
        </span>
      </div>
      <div class="contact">
        <a target="_blank" href="mailto:support@crypto-emergency" class="contact-content">
          <div class="content-image">
            <img src={email}></img>
          </div>
          <span>E-mail</span>
        </a>
        <span class="contact_hint">
          <span class="contact_hint-info">support@crypto-emergency</span>
        </span>
      </div>
      <div class="contact">
        <a target="_blank" href="https://crypto-emergency.com/" class="contact-content">
          <div class="content-image">
            <img src={platform}></img>
          </div>
          <span>Our platform</span>
        </a>
        <span class="contact_hint">
          <span class="contact_hint-info">Crypto Emergency</span>
        </span>
      </div>

    </div>
  )
}