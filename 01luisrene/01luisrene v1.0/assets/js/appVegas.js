var agente = navigator.userAgent,
    dispositivos = /(Android|webOS|Phone|iPad|iPod|Iphone|BlackBerry|Windows Phone|opera mini|iemobile|mobile)/i,
    timer = true;

    if(agente.search(dispositivos) > -1)
    {
        timer = false;
    }
    else
    {
        timer = true;
    }
$(function(){
    $("body").vegas({
    	delay: 7000,
        timer : timer,
        shuffle: true,
        transitionDuration: 1000,
        overlay: true,
        slides: [        
            { src: "/assets/images/bg/bg2.jpg" },
            { src: "/assets/images/bg/bg3.jpg" },
            { src: "/assets/images/bg/bg4.jpg" },
            { src: "/assets/images/bg/bg5.jpg" },
            { src: "/assets/images/bg/bg6.jpg" },
            { src: "/assets/images/bg/bg7.jpg" },
            { src: "/assets/images/bg/bg8.jpg" },
            { src: "/assets/images/bg/bg9.jpg" }
        ],
        animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
        transition: [ 'fade','slideLeft2' ],
    });
});