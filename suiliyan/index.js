function Point(x,y){
        this.x = x;
        this.y = y;
      }
      Point.prototype.toString = function () {
        return `(${this.x},${this.y})`;
      }
      Point.prototype.name="suiliyan"

      function  Hello(){
        this.toString =  function(){
          return "hello say";
        }
      }
      let xx=new Point(5,6);
      Hello.prototype=xx;

      var p=new Hello();

      console.log(p.toString())
      console.log(p.name)
      console.log(p.x)
