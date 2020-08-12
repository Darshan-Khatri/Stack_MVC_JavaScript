//MODEL
var s1 = {};
// s1.stk = Array[10] = [0,0,0,0,0,0,0,0,0,0];
s1.stk = Array(10);
s1.sp = 10;
console.log("Stack array " + s1.stk);


//MODEL
s1.push = function (v) {
    if (this.sp == 0) {
        console.log("Overflow");
    }
    else {
        this.sp--;
        this.stk[this.sp] = v;
    }
};

//MODEL
s1.print = function () {
    console.log("Printing Stack....");
    for (let index = this.sp; index < this.stk.length; index++) {
        if (this.stk[index] === undefined) {
            this.stk[index] = 0;
        }
        console.log(this.stk[index]);
    }
}

//MODEL
s1.pop = function () {
    if (this.sp < 10) {
        var temp = this.stk[this.sp];
        this.sp++;
        return temp;
    }
    else {
        console.log("Underflow");
    }
}

//MODEL
s1.getDataString = function () {
    let s = "";
    for (let index = this.sp; index < this.stk.length; index++) {
        s = s + "<br>" + this.stk[index];
    }
    return s;
}

//This is how you connect MODAL with VIEW.
//This part is VIEW part 
function view() {
    let p = document.getElementById("stack");
    p.innerHTML = s1.getDataString();
}

//controller : Because it is called when someone clicks on push button.
function pushHandler() {
    var ip = document.getElementById("in");
    s1.push(+(ip.value));
    view();
}


//controller
function popHandler() {
    var s = document.getElementById("popLabel");
    var v = s1.pop();
    s.innerHTML = "The value popped is " + v;
    view();
}

s1.print(); view();
s1.push(10);
s1.push(20);
s1.push(30);
s1.push(40);
s1.print(); view();
var t1 = s1.pop();
t1 = s1.pop();
// t1 = s1.pop();
// t1 = s1.pop();
s1.print(); view();
console.log("Last item popped = " + t1);

