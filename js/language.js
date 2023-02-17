// setting changes
export const langEv =  document.querySelector('.language');
      langEv.addEventListener('change', langScript, true);
export const navLang = navigator.language

export function langScript(){
    // classes template//
    /* ///////////// */
    class ClassLayout{
        constructor(title){
            this._title = title;
        }
        get title(){
            return this._title;
        }
        set title(title){
            this._title = title;
        }
    }
    // resumetext card
    const resumeText = document.querySelector('.resume-text');
    const desktopC = document.querySelector('.desktop-content');
    // academic card
    const academicTitle = document.querySelector('.acad-h4');
    // currently parent node
    const currentlySection = document.querySelector('.currently');
    // acamica parent node
    const acamicaSection = document.querySelector('.acamica');
    // edu it parent node
    const eduItSection = document.querySelector('.edu-it');
    // autodidact parent node
    const autodidactSection = document.querySelector('.autodidact');
    /* ///////////// */
    // technologies card
    const techH4 = document.querySelector('.tech-h4');
    const cLearn = document.querySelector('.c-learn');
    /* ///////////// */
    // gallery 
    const galleryH1 = document.querySelector('.gallery-title');
    // gallery cards
    // first card
    const sushi = document.querySelector('.sushi-ctr');
    const pswrd = document.querySelector('.pswrd-ctr');
    const pbdpCtnr = document.querySelector('.pbdp-ctnr');
    const lTls = document.querySelector('.l-tls');
    const bsf = document.querySelector('.bsf');
    const bgt = document.querySelector('.bgt');
    const pList = document.querySelector('.p-lst');
    const gfs = document.querySelector('.gfs');
    const insta = document.querySelector('.insta');
    const twtr = document.querySelector('.twtr');
    /* ///////////////////////////////// */
    // form
    const formH1 = document.querySelector('.form-title');
    const iName = document.getElementById('name');
    const iEmail = document.getElementById('email');
    const iText = document.getElementById('textarea');
    const sendBtn = document.querySelector('.submit');

    // resume text
    const resumetextEs = new ClassLayout(
        `Bienvenido a mi portafolio! soy Miguel Rendón, mejor conocido como 'micky'. Soy un desarrollador web Front end, me especializo en diseño y desarrollo web, Posicionamiento web(SEO) y marketing digital.
        Soy un chico Colombiano 🇨🇴 que viaja por el mundo, apasionado por la fotografía, el diseño y los deportes.`
    );
    const resumetextEn = new ClassLayout(
        `Welcome to my portfolio! I'm Miguel Rendón, better known as 'micky'. I am a Front end web developer, I specialize in web design and development, web positioning (SEO) and digital marketing.
        I am a Colombian boy 🇨🇴 who travels the world, I am passionate about photography, design and sports.`
    );
    /* /////////////////////////////////////// */
    // academic title
    const academicTitleEs = new ClassLayout(`Académico`);
    const academicTitleEn = new ClassLayout(`Academic`);
    // currently li
    const currentlyEs = new ClassLayout(`Actualmente`);
    const currentlyEn = new ClassLayout(`Currently`);
    // currently li
    const oBEs = new ClassLayout(`Open Bootcamp, React`);
    const oBEn = new ClassLayout(`Open Bootcamp, React`);
    // currently li
    // const udemyEs = new ClassLayout(`Udemy, universidad JavaScript por (Ubaldo Acosta)`);
    // const udemyEn = new ClassLayout(`Udemy, JavaScript university by (Ubaldo Acosta)`);
    const udemyEs = new ClassLayout(`Platzi, full stack developer con JavaScript`);
    const udemyEn = new ClassLayout(`Platzi, full stack developer with JavaScript`);
    // currently li
    const platziEs = new ClassLayout(`Platzi, diseño de interfaces (UI)`);
    const platziEn = new ClassLayout(`Platzi, User Interface (UI)`);

    // acamica li
    const acamicaEs = new ClassLayout(`Acamica 2020`);
    const acamicaEn = new ClassLayout(`Acamica 2020`);
    // acamica li
    const fswdEs = new ClassLayout(`Desarrollador Web Full Stack`);
    const fswdEn = new ClassLayout(`Full Stack Web Developer`);

    // educacion it li
    const educacionItEs = new ClassLayout(`Educación IT 2019`);
    const educacionItEn = new ClassLayout(`Educación IT 2019`);
    // educacion it li
    const webLayoutEs = new ClassLayout(`Maquetación web HTML5 Y CSS3`);
    const webLayoutEn = new ClassLayout(`Web layout HTML5 and CSS3`);
    // educacion it li
    const jsEs = new ClassLayout(`JavaScript desde cero`);
    const jsEn = new ClassLayout(`JavaScript from scratch`);
    // educacion it li
    const gitEs = new ClassLayout(`GIT desarrollo colaborativo`);
    const gitEn = new ClassLayout(`GIT collaborative development`);
    // educacion it li
    const dbEs = new ClassLayout(`Introducción a base de datos y SQL`);
    const dbEn = new ClassLayout(`Database introduction and SQL`);

    // autodidact
    const autoDEs = new ClassLayout(`Autodidacta`);
    const autoDEn = new ClassLayout(`Autodidact`);
    // autodidact li
    const engEs = new ClassLayout(`Ingles B1(intermedio)`);
    const engEn = new ClassLayout(`English B1(intermediate)`);
    // autodidact li
    const phEs = new ClassLayout(`Adobe Photoshop`);
    const phEn = new ClassLayout(`Adobe Photoshop`);
    // autodidact li
    const ilEs = new ClassLayout(`Adobe Ilustrator`);
    const ilEn = new ClassLayout(`Adobe Ilustrator`);
    /* /////////////////////////////////////// */
    // technologies card
    const techEs = new ClassLayout(`Tecnologías`);
    const techEn = new ClassLayout(`Technologies`);
    // currently learning h4
    const cLearningEs = new ClassLayout(`Actualmente aprendiendo`);
    const cLearningEn = new ClassLayout(`Currently learning`);
    /* /////////////////////////////////////// */
    // gallery content
    const gH1Es = new ClassLayout(`Algunos proyectos`);
    const gH1En = new ClassLayout(`Some proyects`);

    // gral btns description
    const demoEs = new ClassLayout(`Demo`);
    const demoEn = new ClassLayout(`Demo`);
    const codeEs = new ClassLayout(`Codigo`);
    const codeEn = new ClassLayout(`Code`);
    // card 0 title
    const sushiEs = new ClassLayout(`Sushi Resto`);
    const sushiEn = new ClassLayout(`Sushi Resto`);
    // card 0 description
    const sushiDescEs = new ClassLayout(
        `Pagina web para cualquier tipo de restaurante, en este caso es de sushi, creada con vanilla JavaScript (JavaScript puro), HTML, CSS, Tailwind y buenas prácticas de optimización web. La pagina permite al usuario ver los productos con sus descripciones y precios, descargar la carta y ponerse en contacto con el restaurante por medio de un formulario o redes sociales, así como ver las sucursales en google maps.`
    );
    const sushiDescEn = new ClassLayout(
        `Web page for any type of restaurant, in this case it is sushi, created with vanilla JavaScript (pure JavaScript), HTML, CSS, Tailwind and good web optimization practices. The page allows the user to see the products with their descriptions and prices, download the menu and contact the restaurant through a form or social networks, as well as see the branches on google maps.`
    );
    // card 1 title
    const pswrdEs = new ClassLayout(`Generador de contraseñas`);
    const pswrdEn = new ClassLayout(`Password generator`);
    // card 1 description
    const pswrdDescEs = new ClassLayout(
        `Creado con JavaScript, HTML, CSS, API's. La aplicación le permite elegir el tipo de caracteres y longitud de la contraseña, también puede copiar la contraseña gracias al uso de la web API. Hace uso de una API de frases.`
    );
    const pswrdDescEn = new ClassLayout(
        `Created with JavaScript, HTML; CSS; API's. The application let you choose the chars type and the password length, also you can copy the password thanks to the use of the web API. Make use of an API of quotes.`
    );
    // card 1 title
    const pbdpEs = new ClassLayout(`PaleBlueDotPodcast`);
    const pbdpEn = new ClassLayout(`PaleBlueDotPodcast`);
    // card 1 description
    const pbdpDescEs = new ClassLayout(
        `Pale Blue Dot Podcast es una pagina web 'responsiva', creada con puro HTML Y CSS, ésta pagina le permite reproducir podcast desde spotify mediante el uso de iframes.`
    );
    const pbdpDescEn = new ClassLayout(
        `Pale Blue Dot Podcast is a 'Responsive' web page created with pure HTML & CSS, this page let you to reproduce podcast audios from spotify through the use of iframes.`
    );
    // card 2 title
    const ltlsEs = new ClassLayout(`Los Tilos`);
    const ltlsEn = new ClassLayout(`Los Tilos`);
    // card 2 description
    const losTlsEs = new ClassLayout(
        `Pagina web responsiva creada con HTML, CSS, JavaScript y Bootstrap para mostrar una casa de alquiler, trabajé con arreglos, funciones y el DOM.`
    );
    const losTlsEn = new ClassLayout(
        `Responsive web page created with HTML, CSS, JavaScript and Bootstrap to show a rental house, i worked with arrays, functions and DOM.`
    );
    // card 3 title
    // const bsfEs = new ClassLayout(`Bensof estampados`);
    // const bsfEn = new ClassLayout(`Bensof prints`);
    // // card 3 description
    // const bensofEs = new ClassLayout(
    //     `Ésta es una pagina web responsiva para un microemprendimiento de estampados, lo hice con HTML, CSS, JS, Bootstrap y animate.css una libreria de animacion que funciona en todos los navegadores, ésta pagina no está finalizada aún.`
    // );
    // const bensofEn = new ClassLayout(
    //     `This is a responsive webpage for a microenterprise of prints, made it with HTML, CSS, JS, bootstrap and animate.css a cross browser animation library, this page is not finished yet.`
    // );
    // card 4 title
    const bgtEs = new ClassLayout(`Mi presupuesto`);
    const bgtEn = new ClassLayout(`My budget`);
    // card 4 description
    const budgetEs = new ClassLayout(
        `Una sencilla app para administrar el presupuesto personal, le permite agregar y ver ingresos y egresos con un panel de total actualizado. Trabajé con clases en JS, HTML Y CSS.`
    );
    const budgetEn = new ClassLayout(
        `A simple app to manage personal budget, let you to add and view incomes and expenses with an updated total panel. I worked with classes in JS, HTML and CSS.`
    );
    // // card 5 title listint people
    // const instaEs = new ClassLayout(`Listado de personas`);
    // const instaEn = new ClassLayout(`People listing`);
    // // card 5 description
    // const instagramEs = new ClassLayout(
    //     `Ésta app le permite agregar nombres a una lista desde un campo de texto, contiene unas pocas validaciones como ingresar solo texto, sin numeros ni simbolos.
    //     Ésto fue hecho con clases, POO(Programacion Orientada a Objetos), tecnicas de UX, HTML, CSS, JS y la API de localStorage.`
    // );
    // const instagramEn = new ClassLayout(
    //     `This app let you add names to the list from inputs text, it containes a few validations as enter only text, not number and symbols.
    //     It was made with classes, OOP(object oriented programming), UX techniques, HTML, CSS, JS and localStorage API.`
    // );
    // card 5 title
    const instaEs = new ClassLayout(`Clon de Instagram`);
    const instaEn = new ClassLayout(`Instagram clone`);
    // card 5 description
    const instagramEs = new ClassLayout(
        `Clon de Instagram del Platzi challenge portfolio web creado con HTML, CSS y un poco de JS con diseño responsive.`
    );
    const instagramEn = new ClassLayout(
        `Instagram Clone for Platzi Challenge web portfolio created with HTML, CSS and a bit of JS with responsive design.`
    );
    // card 6 title
    const gfsEs = new ClassLayout(`Guifos`);
    const gfsEn = new ClassLayout(`Guifos`);
    // card 6 description
    const guifosEs = new ClassLayout(
        `Pagina de escritorio para crear guifs, integrada con una API externa (giphy). El propósito fue hacer una pagina funcional, que permita buscar, crear y subir guifs.`
    );
    const guifosEn = new ClassLayout(
        `Desktop page to create guifs, integrated with an external API (giphy). The purpose was to do a functional page, that allows to search, create and post guifs.`
    );
    // card 7 title
    const twtrEs = new ClassLayout(`Clon de Twitter`);
    const twtrEn = new ClassLayout(`Twitter clone`);         
    // card 7 description
    const twitterEs = new ClassLayout(
        `Clon de Twitter del Platzi challenge portfolio web creado con HTML, CSS y un poco de JS con diseño responsive.`
    );
    const twitterEn = new ClassLayout(
        `Twitter Clone for Platzi Challenge web portfolio created with HTML, CSS and a bit of JS with responsive design.`
    );
    /* /////////// */
    // form
    const fH1Es = new ClassLayout(`Ponte en contacto`);
    const fH1En = new ClassLayout(`Get in touch`);
    // input name
    const iNaEs = new ClassLayout(`Nombre`);
    // const iNaEn = new ClassLayout(`Name`);
    // input email
    const iEmEs = new ClassLayout(`Correo`);
    const iEmEn = new ClassLayout(`Email`);
    // input textarea
    const iTxtEs = new ClassLayout(`Deja tu texto`);
    const iTxtEn = new ClassLayout(`Let your text`);
    // send btn
    const sndBtnEs = new ClassLayout(`Enviar`);
    const sndBtnEn = new ClassLayout(`Send`);


    /* /////////////////////////////////////////////////// */
    if(navLang == 'es' || langEv.options[langEv.selectedIndex].value === 'Es'){
        console.log(`event lang 'es' selected`);
        resumeText.innerHTML = resumetextEs.title;
        academicTitle.innerHTML = academicTitleEs.title;
        // currentlySection.;
        currentlySection.children[0].innerHTML = currentlyEs.title;
        currentlySection.children[1].innerHTML = oBEs.title;
        currentlySection.children[2].innerHTML = udemyEs.title;
        currentlySection.children[3].innerHTML = platziEs.title;
        // acamica section
        acamicaSection.children[0].innerHTML = acamicaEs.title;
        acamicaSection.children[1].innerHTML = fswdEs.title;
        // edu it section
        eduItSection.children[0].innerHTML = educacionItEs.title;
        eduItSection.children[1].innerHTML = webLayoutEs.title;
        eduItSection.children[2].innerHTML = jsEs.title;
        eduItSection.children[3].innerHTML = gitEs.title;
        eduItSection.children[4].innerHTML = dbEs.title;
        // autodidact section
        autodidactSection.children[0].innerHTML = autoDEs.title;
        autodidactSection.children[1].innerHTML = engEs.title;
        autodidactSection.children[2].innerHTML = phEs.title;
        autodidactSection.children[3].innerHTML = ilEs.title;
        //technologies section
        techH4.innerHTML = techEs.title;
        cLearn.innerHTML = cLearningEs.title;
        // gallery proyects section
        galleryH1.innerHTML = gH1Es.title;
        // card -0
        sushi.children[0].innerHTML = sushiEs.title;
        sushi.children[1].innerHTML = sushiDescEs.title;
        sushi.children[2].children[0].innerHTML = demoEs.title ;
        sushi.children[2].children[1].children[0].innerHTML = codeEs.title;
        // card 0
        pswrd.children[0].innerHTML = pswrdEs.title;
        pswrd.children[1].innerHTML = pswrdDescEs.title;
        pswrd.children[2].children[0].innerHTML = demoEs.title ;
        pswrd.children[2].children[1].children[0].innerHTML = codeEs.title;
        // card 1
        pbdpCtnr.children[0].innerHTML = pbdpEs.title;
        pbdpCtnr.children[1].innerHTML = pbdpDescEs.title;
        pbdpCtnr.children[2].children[0].innerHTML = demoEs.title ;
        pbdpCtnr.children[2].children[1].children[0].innerHTML = codeEs.title;
        // card 2
        lTls.children[0].innerHTML = ltlsEs.title;
        lTls.children[1].innerHTML = losTlsEs.title;
        lTls.children[2].children[0].innerHTML = demoEs.title ;
        lTls.children[2].children[1].children[0].innerHTML = codeEs.title;
        // card 3
        // bsf.children[0].innerHTML = bsfEs.title;
        // bsf.children[1].innerHTML = bensofEs.title;
        // bsf.children[2].children[0].innerHTML = demoEs.title ;
        // bsf.children[2].children[1].children[0].innerHTML = codeEs.title;
        // card 4
        bgt.children[0].innerHTML = bgtEs.title;
        bgt.children[1].innerHTML = budgetEs.title;
        bgt.children[2].children[0].innerHTML = demoEs.title ;
        bgt.children[2].children[1].children[0].innerHTML = codeEs.title;
        // card 5
        insta.children[0].innerHTML = instaEs.title;
        insta.children[1].innerHTML = instagramEs.title;
        insta.children[2].children[0].innerHTML = demoEs.title ;
        insta.children[2].children[1].children[0].innerHTML = codeEs.title;
        // card 6
        // gfs.children[0].innerHTML = gfsEs.title;
        // gfs.children[1].innerHTML = guifosEs.title;
        // gfs.children[2].children[0].innerHTML = demoEs.title ;
        // gfs.children[2].children[1].children[0].innerHTML = codeEs.title;
        // card 7
        twtr.children[0].innerHTML = twtrEs.title;
        twtr.children[1].innerHTML = twitterEs.title;
        twtr.children[2].children[0].innerHTML = demoEs.title ;
        twtr.children[2].children[1].children[0].innerHTML = codeEs.title;
        // form
        formH1.innerHTML = fH1Es.title;
        iName.placeholder = iNaEs.title;
        iEmail.placeholder = iEmEs.title;
        iText.placeholder = iTxtEs.title;
        sendBtn.value = sndBtnEs.title;

    }else{
        console.log(`event lang 'en' selected`);    
        resumeText.innerHTML = resumetextEn.title;
        academicTitle.innerHTML = academicTitleEn.title;
        currentlySection.children[0].innerHTML = currentlyEn.title;
        currentlySection.children[1].innerHTML = oBEn.title;
        currentlySection.children[2].innerHTML = udemyEn.title;
        currentlySection.children[3].innerHTML = platziEn.title;
        // acamica section
        acamicaSection.children[0].innerHTML = acamicaEn.title;
        acamicaSection.children[1].innerHTML = fswdEn.title;
        // edu it section
        eduItSection.children[0].innerHTML = educacionItEn.title;
        eduItSection.children[1].innerHTML = webLayoutEn.title;
        eduItSection.children[2].innerHTML = jsEn.title;
        eduItSection.children[3].innerHTML = gitEn.title;
        eduItSection.children[4].innerHTML = dbEn.title;
        // autodidact section
        autodidactSection.children[0].innerHTML = autoDEn.title;
        autodidactSection.children[1].innerHTML = engEn.title;
        autodidactSection.children[2].innerHTML = phEn.title;
        autodidactSection.children[3].innerHTML = ilEn.title;
        //technologies section
        techH4.innerHTML = techEn.title;
        cLearn.innerHTML = cLearningEn.title;
        // gallery proyects section
        galleryH1.innerHTML = gH1En.title;
        // card -0
        sushi.children[0].innerHTML = sushiEn.title;
        sushi.children[1].innerHTML = sushiDescEn.title;
        sushi.children[2].children[0].innerHTML = demoEn.title ;
        sushi.children[2].children[1].children[0].innerHTML = codeEn.title ;
        // card 0
        pswrd.children[0].innerHTML = pswrdEn.title;
        pswrd.children[1].innerHTML = pswrdDescEn.title;
        pswrd.children[2].children[0].innerHTML = demoEn.title ;
        pswrd.children[2].children[1].children[0].innerHTML = codeEn.title ;
        // card 1
        pbdpCtnr.children[0].innerHTML = pbdpEn.title;
        pbdpCtnr.children[1].innerHTML = pbdpDescEn.title;
        pbdpCtnr.children[2].children[0].innerHTML = demoEn.title ;
        pbdpCtnr.children[2].children[1].children[0].innerHTML = codeEn.title ;
        // card 2
        lTls.children[0].innerHTML = ltlsEn.title;
        lTls.children[1].innerHTML = losTlsEn.title;
        lTls.children[2].children[0].innerHTML = demoEn.title ;
        lTls.children[2].children[1].children[0].innerHTML = codeEn.title ;
        // card 3
        // bsf.children[0].innerHTML = bsfEn.title;
        // bsf.children[1].innerHTML = bensofEn.title;
        // bsf.children[2].children[0].innerHTML = demoEn.title ;
        // bsf.children[2].children[1].children[0].innerHTML = codeEn.title ;
        // card 4
        bgt.children[0].innerHTML = bgtEn.title;
        bgt.children[1].innerHTML = budgetEn.title;
        bgt.children[2].children[0].innerHTML = demoEn.title ;
        bgt.children[2].children[1].children[0].innerHTML = codeEn.title ;
        // card 5
        insta.children[0].innerHTML = instaEn.title;
        insta.children[1].innerHTML = instagramEn.title;
        insta.children[2].children[0].innerHTML = demoEn.title ;
        insta.children[2].children[1].children[0].innerHTML = codeEn.title ;
        // card 6
        // gfs.children[0].innerHTML = gfsEn.title;
        // gfs.children[1].innerHTML = guifosEn.title;
        // gfs.children[2].children[0].innerHTML = demoEn.title ;
        // gfs.children[2].children[1].children[0].innerHTML = codeEn.title ;
        // card 6
        twtr.children[0].innerHTML = twtrEn.title;
        twtr.children[1].innerHTML = twitterEn.title;
        twtr.children[2].children[0].innerHTML = demoEn.title ;
        twtr.children[2].children[1].children[0].innerHTML = codeEn.title ;
        // form
        formH1.innerHTML = fH1En.title;
        // iName.placeholder.placeholder = iNaEn.title;
        iEmail.placeholder = iEmEn.title;
        iText.placeholder = iTxtEn.title;
        sendBtn.value = sndBtnEn.title;
    };
}
