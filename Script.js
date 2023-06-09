let a = document.getElementById("two");

        const timer = () =>{
    var sec=10;
    setTimeout(() =>{
    a.innerText = sec;
        setTimeout(() =>{
            sec--;
        a.innerText = sec;
            setTimeout(() =>{
                sec--;
            a.innerText = sec;
                setTimeout(() =>{
                    sec--;
                a.innerText = sec;
                    setTimeout(() =>{
                        sec--;
                    a.innerText = sec;
                        setTimeout(() =>{
                            sec--;
                        a.innerText = sec;
                            setTimeout(() =>{
                                sec--;
                        a.innerText = sec;
                                setTimeout(() =>{
                                    sec--;
                            a.innerText = sec;
                                    setTimeout(() =>{
                                        sec--;
                                a.innerText = sec;
                                        setTimeout(() =>{
                                            sec--;
                                    a.innerText = sec;
                                            setTimeout(() =>{
                                            a.innerText = '';
                                            a.innerText = "Happy Independence Day";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
           }, 1000);
        }, 1000);                                                        
   }, 1000);
};
timer();