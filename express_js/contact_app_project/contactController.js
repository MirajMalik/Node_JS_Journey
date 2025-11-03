const contacts = require('./Contacts').default

exports.getAllContacts = (req,res)=>{
    res.json(contacts.getAllContacts())

}


exports.createContact = (req,res)=>{
    console.log(req.body)
    let{name,phone,email} = req.body
    let contact = contacts.createContact({
        name,
        phone,
        email

    })

    res.json(contact)

}


exports.getContactsById = (req,res)=>{
    let id = req.params.id
    id = parseInt(id)
    
    let contact = contacts.getContactsById(id)

    res.json(contact)
}

exports.updateContactById = (req,res)=>{
    let id = req.params.id
    id = parseInt(id)

    let{name,phone,email} = req.body

    let updatedContact = {
        name,
        phone,
        email
    }



    let contact = contacts.updateContactById(id,updatedContact)

    res.json(contact)

}

exports.deleteContactById = (req,res)=>{
    let id = req.params.id
    id = parseInt(id)

    let contact = contacts.deleteContactById(id)

    res.json(contact)

}