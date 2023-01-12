_.Xe=function(a,b,c)
{
    c=void 0===c?!1:c;
    var d; //lat
    a instanceof _.Xe?d=a.toJSON():d=a;
    if(!d||void 0===d.lat && void 0===d.lng)
    {
        var e=d; //lat
        var f=b} //lng
    else{
        void 0!=b && void 0!=c && console.warn("The second argument to new LatLng() was ignored and can be removed.");
        try{lba(d),c=c||!!b,f=d.lng,e=d.lat}
        catch(g){_.Le(g)}
    }
        e-=0;f-=0;c||(e=_.xe(e,-90,90),180!=f&&(f=_.ye(f,-180,180)));
        this.lat=function(){return e};
        this.lng=function(){return f}
}