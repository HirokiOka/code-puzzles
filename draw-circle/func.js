function myFunc() {
r=""
for(y=x=a=40;y+a;x+a||(x=a,y-=2,r+="\n"))r+=x*x--+y*y<900?"*":"-"
return r
}
module.exports = myFunc;
