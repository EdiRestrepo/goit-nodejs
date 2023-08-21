const fs = require("fs").promises;
const { v4: uuidv4 } = require('uuid');

const contactsPath = "./db/contacts.json";
 
function listContacts() {
    return fs.readFile(contactsPath).then(data => {
        return JSON.parse(data.toString())
    })    
}

function getContactById(contactId) {
    return listContacts().then((list) => {
        const getById = list.find(contact => contact.id === contactId);
        return getById;
    })
}

function removeContact(contactId) {
    return listContacts().then((list) => {
        const filteredList = list.filter((contact) => contact.id !== contactId);
        return fs
            .writeFile(contactsPath, JSON.stringify(filteredList), (err) => {
                if (err) {
                    console.error(err);
                }
            })
            .then(() => `Contact with id ${contactId} was successfully removed.`);
    })
}

function addContact(name, email, phone) {
    return listContacts().then((list) => {
        const addUser = { id: uuidv4(), name, email, phone };
        list.push(addUser);
        return fs
          .writeFile(contactsPath, JSON.stringify(list), (err) => {
            if (err) {
              console.error(err);
            }
          })
          .then(() => `Contact was successfully created.`);
    })
    
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}
