//HtmlCollection
   //getElementById
        let A = document.getElementById("First");

        console.log("getElementById");
        console.log(A);

    //getElementsByClassName
        let B = document.getElementsByClassName("first");

        console.log("getElementsByClassName");
        console.log(B[0]); //h1
        console.log(B[1]); //p

//createElement
    let C = document.createElement("h1");
    console.log("createElement");
    console.log(C);

//NodeList
    //querySelector 查詢選擇器
        let D = document.querySelector("h1.second");
        console.log("querySelector");
        console.log(D);//h1

    //querySelectorAll
        let E = document.querySelectorAll(".second");
        console.log("querySelectorAll");
        console.log(E);//h1 p
        //NodeList is not an array