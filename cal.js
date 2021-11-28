var app=angular.module("myApp",[]);
app.service("operations",function(){
 this.evaluation=function(expression){ return eval(expression);}
});
app.service("roots",function(){
    this.square_root=function(a){return Math.sqrt(a)}
    this.power=function(a){return a*a}
    this.onebyx=function(a){return 1/a};
});
app.service("screens",function(){
    this.per=(x)=>{return x/100}
    this.ce=()=>{return 0;}
    this.c=()=>{return 0;}
});
app.controller("myctl",function($scope,operations,roots,screens){
    $scope.initial=0;
    $scope.con="";
    $scope.vars=true;
    $scope.get=function(x){
        $scope.con+=x;
        $scope.final=$scope.con
        $scope.initial=$scope.con
    }
    $scope.ope=function(){
        try{
        $scope.initial=operations.evaluation($scope.con)
        $scope.con=$scope.initial;
        }
        catch(err){
            $scope.final="ERROR"
            $scope.initial="ERROR";
        }
        
    }
    $scope.sqr=function(){
        if($scope.con!=""){
        $scope.initial=roots.square_root(parseInt($scope.con))
        $scope.con=$scope.initial;
        }
        else{
            $scope.initial=0;
        }
    }
    $scope.pow=function(){
        if($scope.con!=""){
        $scope.initial=roots.power(parseInt($scope.con))
        $scope.con=$scope.initial;
        }
        else{
            $scope.initial=0;
        }
    }
    $scope.ob=function(){
        if($scope.con!=""){
        $scope.initial=roots.onebyx(parseInt($scope.con))
        $scope.con=$scope.initial;
        }
        else{
            $scope.initial=0;
        }
    }
    $scope.back=function(){
        console.log($scope.initial)
        var t=Array.from($scope.initial)
        var len=t.length
        t.splice(len-1,1)
        $scope.dup=""
        for(let i=0;i<t.length;i++){
            $scope.dup+=t[i]
        }
        $scope.initial=$scope.dup
        $scope.con=$scope.initial
        if(len==1 || len==0){
            $scope.initial=0;
        }
    }
    $scope.ce=function(){
        $scope.initial=screens.ce();
        $scope.final="";
        $scope.con=""
    }
    $scope.c=function(){
        $scope.initial=screens.ce();
        $scope.final="";
        $scope.con=""
    }
    $scope.per=function(){
        if($scope.con!=""){
        $scope.initial=screens.per(parseInt($scope.con))
        $scope.con=$scope.initial;
        }
        else{
            $scope.initial=0;
        }
    }

    
});