class Button {
  constructor(width, height, type = 'button', colour = 'green') {
    this.width = width;
    this.height = height;
    this.type = type;
    this.colour = colour;
  }

  onClick() {
    console.log({
        Width: this.width,
        Height: this.height,
        Type: this.type,
        Colour: this.colour,
      });
  }
}

function testButton(testObject) {
    if(typeof testObject.width === "number" && typeof testObject.height == "number" && testObject.type == "button" && testObject.colour == "green") {
        console.log("All properties are correct")
    } else if (typeof testObject.width !== "number"){
        console.log("Button width is not a number")
    } else if (typeof testObject.height !== "number"){
        console.log("Button height is not a number")
    }else if (testObject.type !== "button"){
        console.log("Button type is incorrect")
    } else {
        console.log("Button colour isn't green")
    }
}

let btn1 = new Button(15, 5);

btn1.onClick();

testButton(btn1);