//local storage 和 session storage 比較
//***session storage會隨著瀏覽器關閉而消失***/
/***兩者都只能儲存 String 型態的資料(會自動強制轉換)***/


    //local storage
        //setItem(key, value) / getItem(key) / removeItem(key) / clear()

        //setItem   新增storage
        localStorage.setItem("name", "oberon wang");
        localStorage.setItem("age", "24");

        //getItem   取得目標storage
        let a = localStorage.getItem("name");
        console.log(a);

        //removeItem    移除目標storage
        localStorage.removeItem("age");
        let b = localStorage.getItem("age");
        console.log(b);

        //clear     清除所有storage
        localStorage.clear();

    //session storage
        sessionStorage.setItem("name01", "vincent");
        
//JSON (JavaScript Object Notation)

    //JSON.stringify() 將目標更換型態至string
    let names = ["Oberon", "Vincent", "Orthos"];
    localStorage.setItem("names", JSON.stringify(names));

    //JSON.parse() 將目標更換型態至array
    let Names = JSON.parse(localStorage.getItem("names"));
    console.log(Names);