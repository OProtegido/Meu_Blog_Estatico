
/**
 * Chaves de conexão ccom o Firebase.
 * ATENÇÃO! Sempre troque essas chaves pelas chaves do seu projeto.
 **/
const firebaseConfig = {
  apiKey: "AIzaSyD-N7ErdUif5yNryc8JH5qiJB2V_v5EbIc",
  authDomain: "meublog-420de.firebaseapp.com",
  projectId: "meublog-420de",
  storageBucket: "meublog-420de.firebasestorage.app",
  messagingSenderId: "100731235770",
  appId: "1:100731235770:web:839794933620cc7c260183"
};


/**
 * Configuração do site;
 **/
const site = {

    /**
      * Nome do site usado na tag <title>...</title> e nas interações dinâmicas
      **/
    nome: "Meu Blog Estático",

    /**
     * Logotipo do site, usado na tag <header>...</title>
     */
    logo: "img/logo.png",

    /**
     * Controla a ação ao clicar no link do usuário logado no menu principal
     * Se `true`, exibe o perfil do usuário → perfil.html
     * Se `false`, faz logout direto
     **/
    verPerfil: true,

    /**
     * Ano de lançamento do site
     **/
    ano: 2025,

    /**
     * Licensa do site usada no rodapé
     **/
    licensa: `
    <i class="fa-regular fa-copyright fa-rotate-180 fa-fw"></i>
    <span>Copyleft <span id="footerAno"></span> Telmir da Silva</span>
    `,

}

