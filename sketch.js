var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);

fedTime = database.ref('Feed Time');
fedTime.on("value", function(data)){
  lastFed= data.val();
}

  drawSprites();
};

//function to read food Stock
display(){
  var x = 80, y =100;

  imageMode(CENTER);
  image(this.image,720,220,70,70);

  if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
      if(i%10==0){
        xxx=80;
        y=y+50;
      }
      image(this.image,x,y,50,50);
      x=x+30;
    }
  }
}

//function to update food stock and last fed time
function feedDog(){
  
  if(foodObj.getFoodStock()<= 0){
    foodObj. updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  }
}

//function to add food in stock


function addFoods(){
foodS++;
database.ref('/').update({
 Food : foodS 
})
}


fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed : " + lastFed%12 + "PM", 350,30);
} else if(lastFed==0){
  texxt("Last Feed: 12 AM", 350,30);
}else{
  text("Last Feed :" + lastFed + "AM", 350 ,30);
}