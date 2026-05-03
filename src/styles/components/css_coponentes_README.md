### Este diretório centraliza as definições visuais compartilhadas por todo o projeto. O objetivo é garantir a consistência da interface e agilizar o desenvolvimento através de:

- **Reset & Patterns:** Normalização de estilos e padrões reutilizáveis.
- **Variables:** Definição de tokens de design (cores, fontes e efeitos de sombra).
- **Layout Base:** Estilização global de componentes fixos como Navbar e Footer.

## 📁 Estrutura de Estilos (`/components`)

| Arquivo        | Descrição                                       |
| :------------- | :---------------------------------------------- |
| `reset.css`    | Limpeza de estilos padrões do navegador.        |
| `variavel.css` | Definição de cores, fontes e tokens do projeto. |
| `patterns.css` | Classes utilitárias e padrões repetíveis.       |
| `navbar.css`   | Estilização do menu de navegação global.        |
| `footer.css`   | Estilização do rodapé institucional.            |

---

### O navbar e footer estão configurados seguindo o conceito BEM (organização e padronização das classes / tags), caso seja necessário o uso, basta copiar o elemento abaixo:

**Navbar: barra de navegação**

```bash
<header class="navbar">
    <nav class="navbar__container">

      <!-- logotipo -->
      <div id="home" class="navbar__logotipo">
        <img src="assets/img/logotipo/logotipo_vira-lar.png" alt="Logotipo Vira-lar" />
      </div>

      <!-- itens para navegação da página -->
      <ul class="navbar__navegation">
        <li class="navbar__navegation-item">
          <a href="#">Home</a>
        </li>
        <li class="navbar__navegation-item">
          <a href="sobre.html">Sobre</a>
        </li>
        <li class="navbar__navegation-item">
          <a href="#">Galeria de Pets</a>
        </li>
        <li class="navbar__navegation-item">
          <a href="#">Blog</a>
        </li>
        <li class="navbar__navegation-item">
          <a href="#">Contato</a>
        </li>
        <li class="navbar__navegation-item btn-form">
          <a href="#">Adotar agora</a>
        </li>
      </ul>
    </nav>
  </header>
```

_Obs : a classe `active` serve para ativar o estilo pré setado referente a página aberta, ao add na página ativa._

---

**Footer: O rodapé da pagina**

````bash
  <footer class="footer">
        <div class="footer__container">

            <!-- logotipo + slogan + sociais -->
            <div class="footer__section footer__section--brand">
                <img src="assets/img/logotipo/logotipo_vira-lar.png" alt="Logotipo Vira-lar" class="footer__logo" />
                <div class="footer__brand-content">
                    <p class="footer__slogan">Transformando vidas através do amor animal.</p>
                    <ul class="footer__social-list">
                        <li class="footer__social-item">
                            <a href="#" class="footer__social-link" target="_blank">
                                <!-- importação dos Icones no html -->
                                <i class="bi bi-whatsapp footer__social-icon"></i>
                            </a>
                        </li>
                        <li class="footer__social-item">
                            <a href="#" class="footer__social-link" target="_blank">
                                <i class="bi bi-instagram footer__social-icon"></i>
                            </a>
                        </li>
                        <li class="footer__social-item">
                            <a href="#" class="footer__social-link" target="_blank">
                                <i class="bi bi-linkedin footer__social-icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Contato -->
            <div class="footer__section">
                <h4 class="footer__title">Contato & Localização</h4>
                <address>
                    <ul class="footer__list">
                        <li class="footer__item">Rua xxxxx - Petrópolis/RJ</li>
                        <li class="footer__item">contato@viralar.com.br</li>
                        <li class="footer__item">Segunda a sexta, 10h às 16h</li>
                    </ul>
                </address>
            </div>

            <!--  links de Ajuda -->
            <div class="footer__section">
                <h4 class="footer__title">Como Ajudar</h4>
                <ul class="footer__list">
                    <li class="footer__item">
                        <a href="#" class="footer__link">Seja um Voluntário</a>
                    </li>
                    <li class="footer__item">
                        <a href="#" class="footer__link">Doe qualquer valor (PIX)</a>
                    </li>
                    <li class="footer__item">
                        <a href="#" class="footer__link">Itens de necessidade</a>
                    </li>
                </ul>
            </div>

            <!-- QrCode -->
            <div class="footer__section footer__section--extra">
                <img src="assets/img/qrcode/qrcode.png" alt="qrcode do githut" class="footer__img-qrcode" />
            </div>

        </div>

        <!-- Copyright -->
        <div class="footer__copyright">
            <p class="footer__copy-text">Desenvolvido por Grupo 03 - Serratec 2026</p>
            <p class="footer__copy-text">Copyright © 2026</p>
        </div>
    </footer>```
````
