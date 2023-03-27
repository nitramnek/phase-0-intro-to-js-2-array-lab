//K3n5c0d3
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name='Ralph') {
     cats.push(name);
    };

function destructivelyPrependCat(name='Bob') {
     cats.unshift(name);
    };

function destructivelyRemoveLastCat(name) {
     cats.pop(name);
    };

function destructivelyRemoveFirstCat(name) {
     cats.shift(name);
    };

function appendCat(name){
        let newCats=[...cats, name];
        return newCats;
    }
function prependCat(name) {
        return [name, ...cats];
      }
    
function removeLastCat() {
        return cats.slice(0, -1);
      }
      
function removeFirstCat() {
        return cats.slice(1);
      }



//Arrays lab