// =========================================================
// JAVASCRIPT - PORTFÓLIO LÍVIA VETRACK
// =========================================================


// =========================================================
// 1. ANIMAÇÃO DAS SEÇÕES
// =========================================================

const secoes = document.querySelectorAll("section");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
            }

        });

    },
    {
        threshold: 0.15
    }
);


secoes.forEach((secao) => {
    observador.observe(secao);
});


// =========================================================
// 2. DESTAQUE DO MENU CONFORME A SEÇÃO
// =========================================================

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
        threshold: 0.35
    }
);


secoesMenu.forEach((secao) => {
    observadorMenu.observe(secao);
});


// =========================================================
// 3. BOTÃO VOLTAR AO TOPO
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
// 4. MENSAGEM AO CLICAR NO E-MAIL
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
// 5. EFEITO NOS CARDS DE PROJETOS
// =========================================================

const projetos = document.querySelectorAll(
    "#projetos article"
);


projetos.forEach((projeto) => {

    projeto.addEventListener("mouseenter", () => {

        projeto.style.transform =
            "translateY(-10px)";

    });


    projeto.addEventListener("mouseleave", () => {

        projeto.style.transform =
            "translateY(0)";

    });

});


// =========================================================
// 6. EFEITO NOS CARDS DE HABILIDADES
// =========================================================

const habilidades = document.querySelectorAll(
    "#habilidades > div > div"
);


habilidades.forEach((habilidade) => {

    habilidade.addEventListener("mouseenter", () => {

        habilidade.style.transform =
            "translateY(-8px) scale(1.01)";

    });


    habilidade.addEventListener("mouseleave", () => {

        habilidade.style.transform =
            "translateY(0) scale(1)";

    });

});


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