import { Cemjsx } from "cemjs-all"
import Navigation from "./navigation"
import logo from '@svg/logo.svg'
import logoW from '@svg/logo-white.svg'
import whatsup from '@svg/socials/whatsup.svg'
import vk from '@svg/socials/vk.svg'
import inst from '@svg/socials/instagram.svg'
import arrowR from '@svg/arrow_right.svg'


export const display = function () {
    return (
        <div class="general">
            <header class="header">
                <div class="container">
                    <div class="header-inner">
                        <a href="/" class="logo">
                            <img src={logo} alt="PhotoComa" />
                        </a>
                        <div
                            class="menu_icon"
                            ref="burger"
                            onclick={() => {
                                this.Ref.menu.classList.toggle('active')
                                this.Ref.burger.classList.toggle('active')
                            }}
                        >
                            <span></span>
                        </div>
                        <div class="header-menu" ref="menu">
                            <a class="phone" href="tel:+7 (915) 431-06-66">+7 (915) 431-06-66</a>
                            <nav>
                                <ul class="menu-list">
                                    <li class="menu-list_item">
                                        <a href="#">
                                            Москва
                                        </a>
                                    </li>
                                    <li class="menu-list_item">
                                        <a href="#">
                                            Контакты
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={whatsup} alt="Whats'up" />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <button
                                class="btn"
                                onclick={() => {
                                    this.Static.page = "order"
                                    this.init()
                                }}
                            >
                                Заказать переплёт диплома
                                <img src={arrowR} alt="Заказать" />
                            </button>
                        </div>

                    </div>
                </div>
                <div class="header-sublist">
                    <div class="container">
                        <ul class="sublist">
                            <li class="menu-list_item">
                                <a
                                    onclick={() => {
                                        this.Static.page = "documentation";
                                        this.init();
                                    }}
                                >
                                    Проектная документация
                                </a>
                            </li>
                            <li class="menu-list_item">
                                <div class="dropdown"
                                    onclick={()=>{
                                        this.Ref.dropMenu.classList.toggle('show');
                                    }}
                                >
                                    <span class="dropdown-toggle">Копицентр</span>
                                    <ul class="dropdown-menu" ref="dropMenu">
                                        <li class="dropdown-menu_item">
                                            <a href="#">Page 1</a>
                                        </li>
                                        <li class="dropdown-menu_item">
                                            <a href="#">Page 2</a>
                                        </li>
                                        <li class="dropdown-menu_item">
                                            <a href="#">Page 3</a>
                                        </li>
                                        <li class="dropdown-menu_item">
                                            <a href="#">Page 4</a>
                                        </li>
                                        <li class="dropdown-menu_item">
                                            <a href="#">Page 5</a>
                                        </li>
                                        <li class="dropdown-menu_item">
                                            <a href="#">Page 6</a>
                                        </li>
                                        <li class="dropdown-menu_item">
                                            <a href="#">Page 7</a>
                                        </li>
                                        <li class="dropdown-menu_item">
                                            <a href="#">Page 8</a>
                                        </li>
                                        <li class="dropdown-menu_item">
                                            <a href="#">Page 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <main class="main">
                <div class="container">
                    <Navigation />
                </div>
            </main>

            <footer class="footer">
                <div class="container">
                    <div class="footer-inner">
                        <a href="/" class="footer-logo">
                            <img src={logoW} alt="Логотип" />
                        </a>
                        <div class="footer-item footer-item_socials">
                            <div class="socials">
                                <a href="#" target="_blank" class="socials-icon">
                                    <img src={inst} alt="Instagram" />
                                </a>
                                <a href="#" target="_blank" class="socials-icon">
                                    <img src={vk} alt="Vkontakte" />
                                </a>
                            </div>
                            <span class="footer-item_desc copycom">© 2015–2023 Копиком</span>
                        </div>
                        <div class="footer-item footer-item_number">
                            <div class="number">
                                <img class="socials-icon" src={whatsup} alt="whatsup" />
                                <span>+7 (915) 431-06-66</span>
                            </div>
                            <span class="footer-item_desc conf">Политика конфиденциальности</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}