document.addEventListener("DOMContentLoaded", function () {
  //le Fond dynamique du bloc #hero
  const hero = document.getElementById("hero");
  if (hero) {
    const hero_bg_list = [
      "https://static.vitrine.ynov.com/var/site/storage/images/4/6/9/3/83964-1-fre-FR/5c7a6f5c66d1-campus-2.jpg",
      "https://static.vitrine.ynov.com/var/site/storage/images/1/6/9/3/83961-1-fre-FR/d98289fbdf33-campus-1.jpg",
      "https://static.vitrine.ynov.com/var/site/storage/images/5/4/9/4/84945-1-fre-FR/7a48b79ec09a-YnovCampusNantes_Photo4.png",
      "https://static.vitrine.ynov.com/var/site/storage/images/6/3/3/6/126336-1-fre-FR/d1a5c72c030c-23-10-10_Ynov_Paris_0631.jpg",
      "https://static.vitrine.ynov.com/var/site/storage/images/0/1/3/9/109310-1-fre-FR/15706cafbce5-arch.jpg",
      "https://static.vitrine.ynov.com/var/site/storage/images/1/2/9/5/35921-1-fre-FR/b768772d45bf-cybersecurite-dans-les-entreprises.webp",
      "https://static.vitrine.ynov.com/var/site/storage/images/6/3/2/2/132236-1-fre-FR/72b8e10e95c5-etudiants_informatique_challenges.png",
      "https://static.vitrine.ynov.com/var/site/storage/images/1/0/0/7/187001-1-fre-FR/9bcc5e1f3b72-lab-IA-1-creativite-ynov_05.png",
      "https://static.vitrine.ynov.com/var/site/storage/images/2/3/3/8/188332-1-fre-FR/90f3c3a2575f-IMG_7736.jpg",
      "https://static.vitrine.eicar.fr/var/site/storage/images/4/7/4/7/147474-1-fre-FR/ecf07d827d95-Campus_Lyon_1.webp",
      "https://static.vitrine.eicar.fr/var/site/storage/images/9/9/5/8/148599-1-fre-FR/057523a9e3ea-rca2.jpg",
      "https://static.vitrine.eicar.fr/var/site/storage/images/6/2/7/6/146726-1-fre-FR/80f5078509ff-img-rentree-2023-1.png",
    ];
    const hero_bg = hero_bg_list[Math.floor(Math.random() * hero_bg_list.length)];
    hero.style.background = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('${hero_bg}')`;
    hero.style.backgroundPosition = "center";
    hero.style.backgroundSize = "cover";
  }

  //ici on a ma  kestion du formulaire en 2 étapes
  const loginForm = document.getElementById("loginForm");
  const passwordForm = document.getElementById("passwordForm");


  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("username").value.trim();
      if (email !== "") {
        document.getElementById("content_login_email").style.display = "none";
        document.getElementById("content_login_password").style.display = "block";
      } else {
        alert("Veuillez entrer une adresse e-mail.");
      }
    });
  }

  if (passwordForm) {
    passwordForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;
    });
  }
});