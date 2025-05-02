const planetFacts = {
    'Mercury': {
        info: 'Merkür, Güneş\'e en yakın ve en küçük gezegendir. Atmosferi yok denecek kadar incedir.',
        rotation: '10.89 km/s',
        extra: 'Kütleniz değişmez. Ağırlığınız yerçekimine göre değişir.'
    },
    'Venus': {
        info: 'Venüs, yoğun atmosferi ve yüzey sıcaklığı ile bilinir. Güneş\'e ikinci en yakın gezegendir.',
        rotation: '6.52 km/s',
        extra: 'Kütleniz değişmez. Ağırlığınız yerçekimine göre değişir.'
    },
    'Mars': {
        info: 'Mars, kızıl gezegen olarak bilinir ve yüzeyinde eski göllerin izleri bulunmuştur.',
        rotation: '0.24 km/s',
        extra: 'Kütleniz değişmez. Ağırlığınız yerçekimine göre değişir.'
    },
    'Jupiter': {
        info: 'Jüpiter, Güneş Sistemi\'nin en büyük gezegenidir ve devasa fırtınalarıyla ünlüdür.',
        rotation: '12.6 km/s',
        extra: 'Kütleniz değişmez. Ağırlığınız yerçekimine göre değişir.'
    },
    'Saturn': {
        info: 'Satürn, muhteşem halkalarıyla tanınır ve Güneş Sistemi\'nin ikinci en büyük gezegenidir.',
        rotation: '9.87 km/s',
        extra: 'Kütleniz değişmez. Ağırlığınız yerçekimine göre değişir.'
    },
    'Uranus': {
        info: 'Uranüs, eksen eğikliğiyle dikkat çeker ve mavi-yeşil renktedir.',
        rotation: '2.59 km/s',
        extra: 'Kütleniz değişmez. Ağırlığınız yerçekimine göre değişir.'
    },
    'Neptune': {
        info: 'Neptün, rüzgarları en hızlı gezegendir ve derin mavi renge sahiptir.',
        rotation: '2.68 km/s',
        extra: 'Kütleniz değişmez. Ağırlığınız yerçekimine göre değişir.'
    },
    'Moon': {
        info: 'Ay, Dünya\'nın tek doğal uydusudur ve yüzeyinde çok sayıda krater bulunur.',
        rotation: '1.02 km/s',
        extra: 'Kütleniz değişmez. Ağırlığınız yerçekimine göre değişir.'
    }
};

function calculate(){
    var fmass = document.getElementById("txtweight")
    if(fmass.value >= 0){
        var weight = 0
        var fplanet = document.getElementsByName("radplanet")
        var planet = ""
        var res = document.querySelector("div#res")
        var img = document.createElement("img");
        img.classList.add("planet-spin");
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';

        if(fplanet[0].checked) { 
            planet = "Mercury"; 
            weight = 0.377*fmass.value; 
            document.body.style.background = "#66749f";
            img.src = "mercury.png";
            img.alt = "Mercury";
        } else if(fplanet[1].checked) { 
            planet = "Venus"; 
            weight = 0.904*fmass.value; 
            document.body.style.background = "#d4a373";
            img.src = "venus.png";
            img.alt = "Venus";
        } else if(fplanet[2].checked) { 
            planet = "Mars"; 
            weight = 0.38*fmass.value; 
            document.body.style.background = "#b5651d";
            img.src = "mars.png";
            img.alt = "Mars";
        } else if(fplanet[3].checked) { 
            planet = "Jupiter"; 
            weight = 2.53*fmass.value; 
            document.body.style.background = "#f4a460";
            img.src = "jupiter.png";
            img.alt = "Jupiter";
        } else if(fplanet[4].checked) { 
            planet = "Saturn"; 
            weight = 1.065*fmass.value; 
            document.body.style.background = "#e6c200";
            img.src = "saturn.png";
            img.alt = "Saturn";
        } else if(fplanet[5].checked) { 
            planet = "Uranus"; 
            weight = 0.886*fmass.value; 
            document.body.style.background = "#4682b4";
            img.src = "uranus.png";
            img.alt = "Uranus";
        } else if(fplanet[6].checked) { 
            planet = "Neptune"; 
            weight = 1.14*fmass.value; 
            document.body.style.background = "#4169e1";
            img.src = "neptune.png";
            img.alt = "Neptune";
        } else if(fplanet[7].checked) { 
            planet = "Moon"; 
            weight = 0.165*fmass.value; 
            document.body.style.background = "#c0c0c0";
            img.src = "moon.png";
            img.alt = "Moon";
        }

        res.style.textAlign = 'center';
        res.innerHTML = '';
        
        var imgDiv = document.createElement('div');
        imgDiv.style.display = 'flex';
        imgDiv.style.justifyContent = 'center';
        imgDiv.style.alignItems = 'center';
        imgDiv.appendChild(img);
        res.appendChild(imgDiv);
        
        // Sonucu modern 3D buton olarak göster
        var weightBtn = document.createElement('button');
        weightBtn.className = 'modern-3d-btn result-btn dark';
        weightBtn.disabled = true;
        weightBtn.style.fontSize = '2.5rem';
        weightBtn.style.fontWeight = 'bold';
        weightBtn.style.padding = '16px 36px';
        weightBtn.style.margin = '18px auto';
        weightBtn.style.display = 'block';
        weightBtn.style.width = 'auto';
        weightBtn.style.minWidth = '180px';
        weightBtn.textContent = weight.toFixed(1);
        res.appendChild(weightBtn);

        var planetInfoBtnInline = document.getElementById('planetInfoBtnInline');
        var planetRotationBtnInline = document.getElementById('planetRotationBtnInline');
        var planetExtraBtnInline = document.getElementById('planetExtraBtnInline');
        
        if(planetFacts[planet]) {
            planetInfoBtnInline.textContent = planetFacts[planet].info;
            planetRotationBtnInline.textContent = 'Dönüş Hızı: ' + planetFacts[planet].rotation;
            planetExtraBtnInline.textContent = planetFacts[planet].extra;
            planetInfoBtnInline.style.display = 'block';
            planetRotationBtnInline.style.display = 'block';
            planetExtraBtnInline.style.display = 'block';
            document.getElementById('planetInfoBoxInline').style.display = 'block';
        }
    } else {
        alert("Geçerli bir ağırlık değeri girin");
    }
}