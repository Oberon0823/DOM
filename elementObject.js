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

        //child & childNodes
            let F = document.querySelector("body");
            console.log("children");
            console.log(F.children);    //return HtmlCollection
            console.log("childNodes");
            console.log(F.childNodes);  //return NodeList
        //parentElement
            let G = document.querySelector("p.second");
            console.log("parentElement");
            console.log(G.parentElement);   //回傳父層內容
        //innerHTML & innerText
            let H = document.querySelector("h3.third");
            console.log("innerHTML");
            H.innerHTML = "changed h3";
            console.log(H);

            let I = document.querySelector("h3.third");
            console.log("innerText");
            I.innerText = "changed twice on h3";
            console.log(I);
            //兩者皆可更改目標標籤內容
        //appendChild (在目標標籤內增加新標籤)
            let J = document.querySelector("h3.third"); //選定目標位置

            let K = document.createElement("h4");   //新增元素
            K.innerText = "Hello";

            console.log("appendChild"); 
            J.appendChild(K); //將元素放入目標位置

        //classList 針對class的清單
            //add() 針對含有目標元素新增指定class name
            let L = document.querySelector("h2.red");
            console.log("add");
            L.classList.add("blue")
            

            //remove() 針對含有目標元素刪除指定class name
            let M = document.querySelector("h2.green");
            console.log("remove");
            M.classList.remove("green");

            //toggle()  針對含有目標class name 的元素做刪除
            let N = document.querySelector("h2.gray");
            console.log("toggle");
            N.classList.toggle("gray"); //針對有class = gray 的元素做刪除的動作

            //contains()  針對目標元素是否含有指定class name做boolean回傳
            let O = document.querySelector("body");
            console.log("contains");
            console.log( O.classList.contains("black") );


        //getAttribute()    取的目標元素內的 property 或 method
            //object 包含 property & method
                //property -> attribute
                //method -> function
            let P = document.querySelector("a");
            console.log(P.getAttribute("href"));

        //querySelector & querySelectorAll (用在object上)
            let Q = document.querySelector("section")
            console.log("querySelector");
            console.log(Q);

            let R = Q.querySelectorAll("p");
            console.log("querySelectorAll");
            console.log(R);


        //remove  移除目標標籤
            let S = document.querySelector("h5");
            S.remove();