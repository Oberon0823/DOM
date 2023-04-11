//arrow function
    console.log("--array function--");

    let sayhi = (name) =>{
        console.log("hi " + name);
    };

    sayhi("oberon");

    //遵循由上到下執行 , 因此不可將順序相反
    let walking = (name) =>{
        console.log(this.name + " is walking on the street.");
    }

    walking("vincent");
    //arrow function 中不可用this (會指向window.object)

//forEach function
    let array = [50, 2, 18, 76, 52, 30];
    console.log("--forEach--");

    array.forEach( number => {  //array內資料取代number
        if(number<20){   
            console.log(number);
        }
    });
    //也可寫成
    array.forEach( (number) => {  //array內資料取代number
        if(number<20){   
            console.log(number);
        }
    });