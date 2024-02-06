

document.addEventListener("DOMContentLoaded", function() {
    // Codes for Navigations

    const menuBtn = document.getElementById('menu-btn');
    const navMenuContainer = document.getElementById('nav-menu-container');
    const goBack = document.getElementById('go-back');
    const addContainer = document.getElementById('add-container');
    const addMsgContainer = document.getElementById('add-msg-container');
    const adBtn = document.getElementById('add-btn');

    menuBtn.addEventListener("click", ()=>{
        navMenuContainer.style.display = 'block';
        document.body.classList.toggle('no-scroll');
        addContainer.style.display = 'none'
    })

    goBack.addEventListener("click", ()=>{
        navMenuContainer.style.display = 'none';
        document.body.classList.remove('no-scroll')
        addContainer.style.display = 'block';
    })

    setInterval(()=>{
        addMsgContainer.style.display = 'none';
        adBtn.style.display = 'flex';
    },3000)


    // Code for Nearby Shops

    const markets = document.getElementById('markets');
    const marketsBtn = document.getElementById('markets-open-close-btn');

    const pharmacies = document.getElementById('pharmacies');
    const pharmaciesBtn = document.getElementById('pharmacies-open-close-btn');

    const restaurants = document.getElementById('restaurants');
    const restaurantsBtn = document.getElementById('restaurants-open-close-btn');

    const laundries = document.getElementById('laundries');
    const laundriesBtn = document.getElementById('laundries-open-close-btn');

    const groceries = document.getElementById('groceries');
    const groceriesBtn = document.getElementById('groceries-open-close-btn');

    let shopsTabArray = [markets, pharmacies, restaurants, laundries, groceries];
    let shopBtnArray = [marketsBtn, pharmaciesBtn, restaurantsBtn, laundriesBtn, groceriesBtn];



    shopBtnArray.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            let attribute = btn.id.substring(0,btn.id.length - 15);
            let element = document.getElementById(attribute);
            if(element.style.display == 'none'){
                element.style.display = 'block';
                btn.classList.toggle("upside-down");
            }else{
                element.style.display = 'none';
                btn.classList.remove("upside-down")
            }
        })
    })




});

