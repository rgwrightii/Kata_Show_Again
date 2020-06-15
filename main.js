
// Tyler was the main contributor for this code
const mainElement = document.querySelector("main")
const kata1 = document.createElement("h1")

kata1.append("Kata1")
mainElement.append(kata1)

let counter1 = 0
while (counter1 < 20) {
    counter1 += 1
    mainElement.append(counter1 + ", ")
}

const kata2 = document.createElement("h1")
kata2.append("Kata2")
mainElement.append(kata2)

for (let counter2 = 2; counter2 <= 20; counter2 += 2){
    mainElement.append(counter2 + ", ")
}

const kata3 = document.createElement("h1")
kata3.append("Kata3")
mainElement.append(kata3)

let counter3 = -1
  while (counter3 < 19) {
    console.log(counter3)
    counter3 += 2
    mainElement.append(counter3 + ", ")
  }

  const kata4 = document.createElement("h1")
  kata4.append("Kata4")
  mainElement.append(kata4)

  for (counter4 = 5; counter4 <= 100; counter4 += 5 ) {
    mainElement.append(counter4 + ", ")
  }

const kata5 = document.createElement("h1")
kata5.append("Kata5")
mainElement.append(kata5)

for (let counter5 = 1; counter5 <= 100; counter5 += 1) {
    const isSquare = Number.isInteger(Math.sqrt(counter5));
    if (isSquare)  {
        mainElement.append(counter5 + ", ")
    }
  }
  
// Nicole helped problem solve counter issue

const kata6 = document.createElement("h1")
kata6.append("Kata6")
mainElement.append(kata6)
let counter6 = 21
while (counter6 >= 2) {
    counter6 -= 1
    mainElement.append(counter6 + ", ")
}

const kata7 = document.createElement("h1")
kata7.append("Kata7")
mainElement.append(kata7)

let counter7 = 22
while (counter7 >= 3) {
    counter7 -= 2
    mainElement.append(counter7 + ", ")
}

const kata8 = document.createElement("h1")
kata8.append("Kata8")
mainElement.append(kata8)

let counter8 = 21
while (counter8 >= 2) {
    counter8 -= 2
    mainElement.append(counter8 + ", ")
}

const kata9 = document.createElement("h1")
kata9.append("Kata9")
mainElement.append(kata9)

let counter9 = 105
while (counter9 >= 10) {
    counter9 -= 5
    mainElement.append(counter9 + ", ")
}

const kata10 = document.createElement("h1")
kata10.append("Kata10")
mainElement.append(kata10)
//Tyler spearheaded this kata
let counter10 = 100
while (counter10 >= 1) {
    const isSquare = Number.isInteger(Math.sqrt(counter10));
  if (isSquare) 
  {mainElement.append(counter10 + ", ")
  console.log(counter10)
  }
  counter10 -= 1 
}

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

const kata11 = document.createElement("h1")
kata11.append("Kata11")
mainElement.append(kata11)

 for (i = 0; i <= 0; i ++) {
     mainElement.append(sampleArray + ", ")
 }

const kata12 = document.createElement("h1")
kata12.append("Kata12")
mainElement.append(kata12)
//Alec helped to problem solve LOOP
for (let i = 0; i < sampleArray.length; i++){
    if (sampleArray[i] % 2 === 0){
    mainElement.append(sampleArray[i] + ", ")
    }
}

const kata13 = document.createElement("h1")
kata13.append("Kata13")
mainElement.append(kata13)

for (let i = 0; i < sampleArray.length; i++){
    if (sampleArray[i] % 2 != 0){
    mainElement.append(sampleArray[i] + ", ")
    }
}

const kata14 = document.createElement("h1")
kata14.append("Kata14")
mainElement.append(kata14)

for (let i = 0; i < sampleArray.length; i++){
    mainElement.append((sampleArray[i] * sampleArray[i]) + ", ")
    }

const kata15 = document.createElement("h1")
kata15.append("Kata15")
mainElement.append(kata15)
let sum = 0
for (let counter15 = 0; counter15 <= 20; counter15 += 1){
    sum += counter15
    
}
mainElement.append(sum)

const kata16 = document.createElement("h1")
kata16.append("Kata16")
mainElement.append(kata16)
let sum2 = 0
for (let counter16 = 0; counter16 < sampleArray.length; counter16 += 1){
    sum2 += sampleArray[counter16]
}
mainElement.append(sum2)

const kata17 = document.createElement("h1")
kata17.append("Kata17")
mainElement.append(kata17)

let min = 0 
for (let index = 0; index < sampleArray.length; index += 1) {
    min = Number.POSITIVE_INFINITY
for (i = 0, l = sampleArray.length; i < l; i++) {
    min = Math.min(min, sampleArray[i])
}
mainElement.append(min)
    }
mainElement.append(largestNumber)

const kata18 = document.createElement("h1")
kata18.append("Kata18")
mainElement.append(kata18)

let largestNumber = 0 
for (let index = 0; index < sampleArray.length; index += 1) {
    let currentNumber = sampleArray[index]
    if (currentNumber > largestNumber) {
        largestNumber = (currentNumber)
    }
}
mainElement.append(largestNumber)




