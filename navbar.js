function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  document.addEventListener("DOMContentLoaded", function() {
    
    var sidenav = document.getElementById('mySidenav');

    var links = [
        { href: "home.html", icon: "fa-house", text: "Home"},
        { href: "CIA.html", icon: "fa-newspaper", text: "CIA Triad" },
        { href: "Non.html", icon: "fa-address-card", text: "Non-Reputation" },
        { href: "AAA.html", icon: "fa-map", text: "AAA"},
        { href: "DD Tech.html", icon: "fa-laptop", text: "Deception & Distruption Tech" },
        { href: "PS.html", icon: "fa-wrench", text: "Physical Security" },
        { href: "AMV.html", icon: "fa-book", text: "Actors Vectos & Mitigation" },        
    ];

    links.forEach(function(link) {
        var aTag = document.createElement('a');
        
        aTag.href = link.href;

        var icon = document.createElement('i');
        icon.classList.add('fa', 'fa-fw', link.icon);

        aTag.appendChild(icon);

        aTag.appendChild(document.createTextNode(" " + link.text));

        sidenav.appendChild(aTag);
    });
});
