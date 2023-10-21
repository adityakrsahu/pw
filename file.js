function run(){
    let len = 0;
    let str = "RELIABLE";
    let store = "";
    setTimeout(out,500);
        function out(){
            if(len < str.length){
                store=store+str[len];
                len++;
                document.getElementById('show').innerHTML=store;
            }
            else{
                clearInterval();
                len=0;
                store="";
            }
        }
}