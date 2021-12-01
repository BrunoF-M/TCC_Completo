const iframeLocations = {
  padroeira:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14569.147615433154!2d-46.6168443!3d-24.091404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40195a44e45e3375!2sMorro%20da%20Padroeira!5e0!3m2!1spt-BR!2sbr!4v1637838290752!5m2!1spt-BR!2sbr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  plataforma:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.9435290957535!2d-46.69199768311296!3d-24.136766836652946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce2823a5c106af%3A0x9ca49806ec5f4053!2sPlataforma%20de%20Pesca%20Amadora%20de%20Mongagu%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1637838875445!5m2!1spt-BR!2sbr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  feiraVeraCruz:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14567.887899566766!2d-46.6328548!3d-24.102481!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2af6c05514c4a7ce!2sFeira%20De%20Artes%20e%20Variedades%20Do%20Vera%20Cruz!5e0!3m2!1spt-BR!2sbr!4v1637839165601!5m2!1spt-BR!2sbr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  feiraPlataforma:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.5433444200876!2d-46.6937997165178!3d-24.13359356721498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce2823a77183e1%3A0xb793dc07bfef3597!2sAv.%20Gov.%20M%C3%A1rio%20Covas%20J%C3%BAnior%2C%2010239%20-%20Balneario%20Itagua%C3%AD%2C%20Mongagu%C3%A1%20-%20SP%2C%2011730-000!5e0!3m2!1spt-BR!2sbr!4v1637841017855!5m2!1spt-BR!2sbr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  zonaRural:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58275.75765443665!2d-46.635946326381635!3d-24.093235101595937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce27a66ce85681%3A0xb3f1913050b7dd97!2sParque%20Municipal%20de%20Mongagu%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1637841335340!5m2!1spt-BR!2sbr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  centroCultural:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14567.917246438634!2d-46.6363191!3d-24.102223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x980a375615864a8f!2sCentro%20Cultural%20Raul%20Cortez!5e0!3m2!1spt-BR!2sbr!4v1637841544646!5m2!1spt-BR!2sbr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  feiraCentro:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14568.75773828242!2d-46.6195979!3d-24.0948328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c5bdb50e4b9bb6!2sFeira%20de%20Artesanato%20do%20Centro%20de%20Mongagu%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1637841620412!5m2!1spt-BR!2sbr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  pracaJacoub:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58265.392072562965!2d-46.657530932738986!3d-24.11601506786992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce2712fc58af4f%3A0xffb873c79164eb83!2sPra%C3%A7as%20Jacoub%20Koukdjean%20%26%20Fernando%20Arens!5e0!3m2!1spt-BR!2sbr!4v1637841852657!5m2!1spt-BR!2sbr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  igrejaMatriz:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116473.92268548459!2d-46.847439841796856!3d-24.178392399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1d585666d34fb%3A0xfd9651baf58d2b0c!2sIgreja%20Nossa%20Senhora%20da%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1637841968689!5m2!1spt-BR!2sbr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  parqueTribuna:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14564.309020889596!2d-46.6955346!3d-24.1339249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd109bee7a2ae2f0f!2zUGFycXVlIEVjb2zDs2dpY28gLSDigJxBIFRyaWJ1bmEi!5e0!3m2!1spt-BR!2sbr!4v1637842097977!5m2!1spt-BR!2sbr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  pocoDasAntas:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455.29944075361675!2d-46.6240647175071!3d-24.08758232022925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce27f6e9b577b1%3A0xbdb0a84d1abf28f!2sPortaria%20Po%C3%A7o%20das%20Antas%20(MB)!5e0!3m2!1spt-BR!2sbr!4v1637842283349!5m2!1spt-BR!2sbr" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
};

function changeModalInfo(type) {
  const modalBody = $("#modal_body");

  modalBody.html(iframeLocations[type]);
}
