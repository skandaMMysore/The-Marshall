class Form{
    constructor(){
       this.title = createElement('h1');
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h1');
       this.cheer = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("THE MARSHAL");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        
        this.cheer.html("Are you ready to play this mysterious game?");
        this.cheer.position(420,100);
        this.cheer.style('font-size', '150px');
        this.cheer.style('color', 'red');

        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');

        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            

            
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');

            //change the game state
        });

        this.reset.mousePressed(() => {
           //do later
        });

        //create sprite and add different images to make form look good
        //making a rope button to display the rope 
        ropeButton = createSprite(100,250,20,20);
        ropeButton.display();

        skateButton = createSprite(100,365,20,20);
        skateButton.display();

        gunButton = createSprite(100,450,20,20);
        gunButton.display();

        rope = createSprite(100,245,20,20);
        rope.addImage(ropeImage);
        rope.display();

        skates = createSprite(100,360,20,20);
        skates.addImage(skateImage);
        skates.display();

        gun = createSprite(100,435,20,20);
        gun.addImage(gunImage);
        gun.display();
        


    }
}