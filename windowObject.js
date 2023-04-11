console.log(window);

//methods使用範例
let oberon = {
    name: 'Oberon Wang',
    walk(){
        console.log('Oberon Wang is walking on the street.');
    }
}
oberon.walk();  //使用oberon object 中的 walk method

//method

    /*window.alert("Alert");*/  /*以下平時皆省略window*/

    /*window.prompt("How are you ?");*/

    function sayhi(){
        console.log("hi");
    }

    let A = setInterval(sayhi, 1000); /*3000 = 3秒*/

    function stop(){
        clearInterval(A);
    }

//property

    let vincent = {
        name: 'Vincent Wang',
        friend: oberon,     //OOP concept : an object can be a property of another object 
        walk(){
            console.log('Vincent is walking.');
        }
    }

    console.log(vincent.friend.walk());

    console.warn("Warn");
    console.error("Error");