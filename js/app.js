new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        console.log(destination.item);
        const title = section.querySelectorAll('h1');
        const tl = new TimelineMax({ delay: 0.5 });
        const tm = new TimelineMax({ delay: 1.0 });
        const sp = new TimelineMax({ delay: 1.3 });
        tl.fromTo(title, 0.5, {y: '50', opacity: 0}, {y: 0, opacity:1});
        
        if(destination.index === 2) {
            const descriptions2 = document.querySelectorAll('.description1 ul li');
            const element2 = document.querySelector('.element1');
            const ship2 = document.querySelector('.catamaran-box1');
            
            tl.fromTo(descriptions2, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1});
            tm.fromTo(element2, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1});   
            sp.fromTo(ship2, 1.0, {y: '100', opacity: 0}, {y: 0, opacity:1});   
        }
        
        if(destination.index === 3) {
            const descriptions3 = document.querySelectorAll('.description4 ul li');
            const element3 = document.querySelector('.element4');
            const ship3 = document.querySelector('.catamaran-box4');
            
            tl.fromTo(descriptions3, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1});
            tm.fromTo(element3, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1});
            sp.fromTo(ship3, 1.0, {y: '100', opacity: 0}, {y: 0, opacity:1});
        }
        
        if(destination.index === 4) {
            const descriptions4 = document.querySelectorAll('.description5 ul li');
            const element4 = document.querySelector('.element5');
            const ship4 = document.querySelector('.catamaran-box5');
            
            tl.fromTo(descriptions4, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1});
            tm.fromTo(element4, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1});
            sp.fromTo(ship4, 1.0, {y: '100', opacity: 0}, {y: 0, opacity:1});
        }
        
        if(destination.index === 5) {
            const descriptions5 = document.querySelectorAll('.description6 ul li');
            const element5 = document.querySelector('.element6')
            
            tl.fromTo(descriptions5, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1});
            tm.fromTo(element5, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1});   
        }
        
        if(destination.index === 6) {
            const descriptions6 = document.querySelectorAll('.description7 p');
            const texts = document.querySelectorAll('.post-slide');
            const img = document.querySelector('.description7 .ad img');
            
            tl.fromTo(descriptions6, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1}) 
              .fromTo(texts, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1}) 
              .fromTo(img, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1}); 
        }
        
        if(destination.index === 7) {
            const descriptions7 = document.querySelector('.description8 p');
            const images = document.querySelectorAll('.description8 img');
            
            tl.fromTo(descriptions7, 1.0, {y: '50', opacity: 0}, {y: 0, opacity:1})
            tm.fromTo(images, 0.3, {y: '50', opacity: 0}, {y: 0, opacity:1});
        }

    }
});