_.ofa={
    LESS_WALKING:"LESS_WALKING",FEWER_TRANSFERS:"FEWER_TRANSFERS"
};
var pfa=_.Me({routes:_.Pe(_.Qe(_.Ce))},!0);
_.Cg=[];_.Pa(Eg,_.P);
Eg.prototype.changed=function(a){var b=this;
"map"!=a && "panel"!=a||_.pf("directions").then(function(c){c.ax(b,a)});
"panel"==a && _.Dg(this.getPanel())};