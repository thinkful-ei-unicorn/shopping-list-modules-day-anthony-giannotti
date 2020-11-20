import item from './item.js';


function findById(id) {
  return items.find(id);
}

function addItem(name) {
  try{
    item.validateName(name);
    this.items.push(item.create(name));
  } catch(e) {
    console.log('Cannot update name: ${error.message}');
  }
}

function findAndToggleChecked(id) {
  this.findById(id);
  toggleCheckedForListItem(id);
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    const currentItem = this.findById(id);
    currentItem.name = name;
  } catch(e) {
    console.log('Cannot update name: ${error.message}');
  }
}


function findAndDelete(id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

let items = [];
let hideCheckedItems = false;

export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findById, 


};
