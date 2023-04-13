//local storage 和 session storage 比較
//***session storage會隨著瀏覽器關閉而消失***/


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
        

