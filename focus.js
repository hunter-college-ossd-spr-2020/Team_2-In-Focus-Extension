myList = document.getElementsByTagName('img')
myLength = myList.length

for(let i = 0; i < myLength; i++) {
    myList.item(i).style.filter = "blur(10px)";
}
