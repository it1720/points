$(function(){
    let points = {
        /* Atributy objektu */
        ax: 0,
        ay: 0,
        bx: 1,
        by: 1,
        /* Metody objektu */
        vektorx: function(ax,bx) {
            return bx - ax;
        },
        vektory: function(ay,by) {
            return by - ay;
        },
        distance: function() {
            return Math.sqrt(this.vektorx(this.ax,this.bx)**2 + this.vektory(this.ay,this.by)**2).toFixed(2); 
        },
        nsd: function(x, y){
            x= Math.abs(x)
            y= Math.abs(y)
            while(y){
                var t = y;
                y = x % y;
                x = t;
            }
            return x;
        },
        summary_vektorx: function(){
            return this.vektorx(this.ax,this.bx)/this.nsd(this.vektorx(this.ax,this.bx),this.vektory(this.ay,this.by));
        },
        summary_vektory: function(){
            return this.vektory(this.ay,this.by)/this.nsd(this.vektorx(this.ax,this.bx),this.vektory(this.ay,this.by));
        }
    }
    $("#calc").on("click", function(){
        points.ax = $("#ax").val();
        points.ay = $("#ay").val();        
        points.bx = $("#bx").val();
        points.by = $("#by").val();
        $("#result").html(`A[${points.ax}, ${points.ay}] B[${points.bx}, ${points.by}] = ${points.distance()}  vektor: u(${points.summary_vektorx()}, ${points.summary_vektory()})`);
    })

});