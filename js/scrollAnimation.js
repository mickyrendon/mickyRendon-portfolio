
window.addEventListener("scroll",()=>{
    var bodyH = document.body.offsetHeight;
    const   a=document.querySelector(".background-waves"),
            i=document.querySelector(".theme-btn"),
            e=document.querySelector(".resume-text"),
            t=document.querySelector(".academic-container"),
            n=document.querySelector(".tech-container"),
            f=document.querySelector(".form-container"),
            h=document.querySelector(".portfolio-gallery"),
            l=document.querySelector(".background-waves-btm"),
            s=[a,i,e,t,n,h,f,l];
    l.style.top = `${bodyH}px`;
    s.forEach((a,e)=>{
        a.classList.add("opacity");
        const t=window.innerHeight/1.1,
        n=a.getBoundingClientRect().top;return n<=t&&0===e?
        a.classList.add("animate__animated","animate__fadeInDown"):(a.classList.remove("animate__animated","animate__fadeInDown"),
        n<=t&&1===e?a.classList.add("animate__animated","animate__zoomIn"):a.classList.remove("animate__animated","animate__zoomIn"),
        n<=t&&2===e?a.classList.add("animate__animated","animate__fadeInRight"):(a.classList.remove("animate__animated","animate__fadeInRight"),
        n<=t&&3===e?(a.classList.add("animate__animated","animate__left"),a.classList.remove("opacity")):(a.classList.remove("animate__animated","animate__left"),
        n<=t&&4===e?a.classList.add("animate__animated","animate__fadeInRight"):(a.classList.remove("animate__animated","animate__fadeInRight"),
        n<=t&&5===e?a.classList.add("animate__animated","animate__fadeInLeft"):(a.classList.remove("animate__animated","animate__fadeInLeft"),
        n<=t&&6===e?a.classList.add("animate__animated","animate__fadeInDown"):a.classList.remove("animate__animated","animate__fadeInDown"),
        n<=t&&7===e?a.classList.add("animate__animated","animate__fadeInUp"):(a.classList.remove("animate__animated","animate__fadeInUp"))))))),a})});
