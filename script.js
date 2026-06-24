
// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});

// =========================
// Sticky Header
// =========================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.background="rgba(5,10,25,.95)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

    }

    else{

        header.style.background="rgba(10,15,30,.85)";
        header.style.boxShadow="none";

    }

});

// =========================
// Active Menu
// =========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// =========================
// Reveal Animation
// =========================

const revealElements=document.querySelectorAll(
".card,.project,.price-card,#skills div"
);

function reveal(){

    revealElements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        const height=window.innerHeight;

        if(top<height-80){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".7s";

});

window.addEventListener("scroll",reveal);

reveal();

// =========================
// Hero Typing Effect
// =========================

const text="Shopify Developer";

const target=document.querySelector(".hero-left h2");

if(target){

let i=0;

target.innerHTML="";

function type(){

    if(i<text.length){

        target.innerHTML+=text.charAt(i);

        i++;

        setTimeout(type,120);

    }

}

type();

}

// =========================
// Back To Top Button
// =========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#3b82f6";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
