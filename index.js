const { program } = require("commander");

const contacts = require("./contacts");

const invokeAction =async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.table(allContacts);
            break;
        case 'get':
            const contact = await contacts.getContactById(id);
            console.table(contact);
            break;
        
        case 'add':
            const newContact = await contacts.addContact({ name, email, phone });
            console.table(newContact);
            break;
        
        case 'remove':
            const removeContact = await contacts.removeContact(id);
            console.table(removeContact);
            break;
        
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

program
    .option("--action, <type>")
    .option("--id, <type>")
    .option("--name, <type>")
    .option("--email, <type>")
    .option("--phone, <type>")
program.parse();

const options = program.opts();
invokeAction(options);


// invokeAction({ action: "list" });
// invokeAction({ action: 'get', id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: 'add', name: "Alia", email: "hallin@vestibul.co.uk",
// phone: "914-3792" });
// invokeAction({ action: 'remove', id: "AeHIrLTr6JkxGE6SN-0Rw" });

