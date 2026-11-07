// =========================================================
// JAVASCRIPT - PORTFÓLIO LÍVIA VETRACK
// =========================================================


// =========================================================
// 1. ANIMAÇÃO DAS SEÇÕES
// =========================================================
// threshold 0 + rootMargin: a seção aparece assim que entra na tela,
// não importa o tamanho dela. (Com threshold 0.15, seções muito altas
// no celular podiam nunca atingir 15% visível e ficavam invisíveis.)

const secoes = document.querySelectorAll("section");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observador.unobserve(entrada.target);
            }

        });

    },
    {
        threshold: 0,
        rootMargin: "0px 0px -8% 0px"
    }
);


secoes.forEach((secao) => {
    observador.observe(secao);
});


// =========================================================
// 2. DESTAQUE DO MENU CONFORME A SEÇÃO
// =========================================================
// A "faixa de leitura" é uma linha fina no meio da tela: a seção que
// cruza essa faixa é a ativa. Funciona para seções de qualquer altura.

const linksMenu = document.querySelectorAll("nav ul li a");

const secoesMenu = document.querySelectorAll("main section");

const observadorMenu = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                linksMenu.forEach((link) => {
                    link.classList.remove("ativo");
                });

                const linkAtivo = document.querySelector(
                    `nav ul li a[href="#${entrada.target.id}"]`
                );

                if (linkAtivo) {
                    linkAtivo.classList.add("ativo");
                }

            }

        });

    },
    {
        threshold: 0,
        rootMargin: "-45% 0px -50% 0px"
    }
);


secoesMenu.forEach((secao) => {
    observadorMenu.observe(secao);
});


// =========================================================
// 3. MENU HAMBÚRGUER (TABLET E CELULAR)
// =========================================================

const nav = document.querySelector("nav");

const botaoMenu = document.querySelector(".menu-toggle");

const listaMenu = document.querySelector("#menu-principal");


function abrirMenu() {

    nav.classList.add("menu-aberto");

    botaoMenu.setAttribute("aria-expanded", "true");

    botaoMenu.setAttribute("aria-label", "Fechar menu");

}


function fecharMenu() {

    nav.classList.remove("menu-aberto");

    botaoMenu.setAttribute("aria-expanded", "false");

    botaoMenu.setAttribute("aria-label", "Abrir menu");

}


if (nav && botaoMenu && listaMenu) {

    // Abre e fecha ao clicar no botão

    botaoMenu.addEventListener("click", () => {

        if (nav.classList.contains("menu-aberto")) {
            fecharMenu();
        } else {
            abrirMenu();
        }

    });


    // Fecha ao escolher um link do menu

    listaMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", fecharMenu);
    });


    // Fecha ao clicar fora do menu

    document.addEventListener("click", (evento) => {

        if (!nav.contains(evento.target)) {
            fecharMenu();
        }

    });


    // Fecha com a tecla Esc

    document.addEventListener("keydown", (evento) => {

        if (
            evento.key === "Escape" &&
            nav.classList.contains("menu-aberto")
        ) {
            fecharMenu();
            botaoMenu.focus();
        }

    });


    // Fecha se a tela virar desktop (ex.: girar o tablet)

    window
        .matchMedia("(min-width: 901px)")
        .addEventListener("change", fecharMenu);

}


// =========================================================
// 4. BOTÃO VOLTAR AO TOPO
// =========================================================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.setAttribute(
    "aria-label",
    "Voltar ao topo"
);

botaoTopo.id = "botaoTopo";

document.body.appendChild(botaoTopo);


// Mostrar ou esconder o botão

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        botaoTopo.classList.add("mostrar");
    } else {
        botaoTopo.classList.remove("mostrar");
    }

});


// Voltar ao topo

botaoTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================================
// 5. MENSAGEM AO CLICAR NO E-MAIL
// =========================================================

const linkEmail = document.querySelector(
    '#contato a[href^="mailto:"]'
);


if (linkEmail) {

    linkEmail.addEventListener("click", () => {

        console.log(
            "Abrindo aplicativo de e-mail..."
        );

    });

}


// =========================================================
// 6. EFEITOS DE HOVER NOS CARDS
// =========================================================
// Os efeitos de "subir" dos cards de projetos e habilidades agora
// ficam só no CSS (dentro de @media (hover: hover)). Antes, o JS
// aplicava o efeito com mouseenter, e no celular o card ficava
// "preso" levantado depois de tocar nele.


// =========================================================
// 7. ANO AUTOMÁTICO DO RODAPÉ
// =========================================================

const rodape = document.querySelector("footer p");


if (rodape) {

    const anoAtual = new Date().getFullYear();

    rodape.innerHTML =
        `© ${anoAtual} Livia Vetrack. Todos os direitos reservados.`;

}


// =========================================================
// 8. MENSAGEM NO CONSOLE
// =========================================================

console.log(
    "✨ Portfólio de Livia Vetrack carregado com sucesso!"
);