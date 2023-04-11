//HtmlCollection
   //getElementById
   let A = document.getElementById("First");

   console.log("getElementById");
   console.log(A);

    //getElementsByClassName
   let B = document.getElementsByClassName("second");

   console.log("getElementsByClassName");
   console.log(B[0]); //H1
   console.log(B[1]); //P1

//NodeList
    //querySelector 查詢選擇器
    let D = document.querySelector("h1.second");
    console.log("querySelector");
    console.log(D);//h1

    //querySelectorAll
    let E = document.querySelectorAll(".second");
    console.log("querySelectorAll");
    console.log(E);//H1 P1 P2
    //NodeList is not an array

//array
    let F = [15, 71, 23, 12];
    //length, index
    //具有push, pop, shift, unshift 這些methods


/*
    * HtmlCollection & Nodelist
        * both of them have length property(屬性)
        * both of them have index
*/
/*  
    *Array & Nodelist
        * both of them can use ForEach
*/