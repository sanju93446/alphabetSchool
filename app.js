window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll('.sound');
    const keys = document.querySelectorAll('.keys div');
    const visual = document.querySelector('.visual');

    const images = [
        "./Alphabet/A.jpeg",
        "./Alphabet/B.jpeg",
        "./Alphabet/C.png",
        "./Alphabet/D.jpeg",
        "./Alphabet/E.jpeg",
        "./Alphabet/F.jpeg",
        "./Alphabet/G.jpeg",
        "./Alphabet/H.jpeg",
        "./Alphabet/I.jpeg",
        "./Alphabet/J.jpeg",
        "./Alphabet/k.jpeg",
        "./Alphabet/L.jpeg",
        "./Alphabet/M.jpeg",
        "./Alphabet/N.jpeg",
        "./Alphabet/O.jpeg",
        "./Alphabet/P.jpeg",
        "./Alphabet/Q.jpeg",
        "./Alphabet/R.jpeg",
        "./Alphabet/S.jpeg",
        "./Alphabet/T.jpeg",
        "./Alphabet/U.jpeg",
        "./Alphabet/V.jpeg",
        "./Alphabet/W.jpeg",
        "./Alphabet/X.png",
        "./Alphabet/Y.jpeg",
        "./Alphabet/Z.jpeg",
    ]
    
    // sounds
    keys.forEach((key,index)=>{
        key.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createJUmpImg(index);
        });
    });
    const createJUmpImg = function(index){
        const jumpImg = document.createElement("img");        
        
        jumpImg.src = images[index];
        visual.appendChild(jumpImg);
        jumpImg.addEventListener('animationend', function(){
            visual.removeChild(jumpImg);
        });
    }

    
});